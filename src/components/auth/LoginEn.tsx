'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { set, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useToast } from '../ui/use-toast'

import { Button } from '@/components/ui/button'

import React, { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, UserCredential, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ReloadIcon } from '@radix-ui/react-icons'

const FormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address.'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  })
})

const LoginEn = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true)
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        toast({
          title: '✅ Logged in.'
        })
        router.push(`/`)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        switch (errorCode) {
          case 'auth/invalid-email':
            toast({
              variant: 'destructive',
              title: 'Invalid email address.',
              description: 'Please check your email address.'
            })
            break
          case 'auth/user-not-found':
            toast({
              variant: 'destructive',
              title: 'User not found.',
              description: 'Please check your email address.'
            })
            break
          case 'auth/wrong-password':
            toast({
              variant: 'destructive',
              title: 'Login failed.',
              description: 'Please check your password.'
            })
            break
          case 'auth/too-many-requests':
            toast({
              variant: 'destructive',
              title: 'Too many requests.',
              description: 'Please try again later.'
            })
            break
          default:
            toast({
              variant: 'destructive',
              title: 'An error occurred.',
              description: 'Please try again later.'
            })
            break
        }
        setLoading(false)
      })
  }

  const authWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        const user = result.user
        toast({
          title: '✅ Logged in.'
        })
        router.push(`/`)
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: '❌ An error occurred.',
          description: 'Please try again later.'
        })
      })
  }
  return (
    <div>
      <h1 className="text-xl font-bold">Log in</h1>
      <p className="text-gray-500 pb-5">Please enter your login information.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-end">
            <Button type="submit" className="font-bold w-full" disabled={loading}>
              {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : 'Log in'}
            </Button>
          </div>
        </form>
      </Form>
      <hr className="my-5" />
      <p className="text-center">
        Don't have an account?{' '}
        <Link className="underline text-blue-500" href={`/register`}>
          Register
        </Link>
      </p>
      <div className="text-center pb-10">
        <p className="my-4">or</p>
        <button onClick={authWithGoogle} className="gsi-material-button">
          <div className="gsi-material-button-state"></div>
          <div className="gsi-material-button-content-wrapper">
            <div className="gsi-material-button-icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ display: 'block' }}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </div>
            <span className="gsi-material-button-contents">Sign in with Google</span>
            <span style={{ display: 'none' }}>Sign in with Google</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default LoginEn
