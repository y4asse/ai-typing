'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { set, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useToast } from '../ui/use-toast'
import { ReloadIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/ui/button'

import React, { useState } from 'react'
import { updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'name must be at least 2 characters.'
  }),
  email: z.string().email({
    message: 'invalid email address.'
  }),
  password: z.string().min(6, {
    message: 'password must be at least 6 characters.'
  }),
  repeatPassword: z.string().min(6, {
    message: 'password must be at least 6 characters.'
  })
})

const RegisterEn = () => {
  const { toast } = useToast()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (data.password === data.repeatPassword) {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user
          updateProfile(user, {
            displayName: data.username
          })
            .then(() => {
              toast({
                title: '✅ Registration completed.'
              })
              router.push(`/`)
            })
            .catch((error) => {
              toast({
                variant: 'destructive',
                title: 'An error occurred.',
                description: error.message
              })
            })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          switch (errorCode) {
            case 'auth/invalid-email':
              toast({
                variant: 'destructive',
                title: 'Invalid email address.',
                description: 'Please enter a valid email address.'
              })
              break
            case 'auth/email-already-in-use':
              toast({
                variant: 'destructive',
                title: 'Email address already in use.',
                description: 'Please enter a different email address.'
              })
              break
            case 'auth/weak-password':
              toast({
                variant: 'destructive',
                title: 'Weak password.',
                description: 'Please enter a password of at least 6 characters.'
              })
              break
            default:
              toast({
                variant: 'destructive',
                title: 'An error occurred.',
                description: errorMessage
              })
              break
          }
          setLoading(false)
        })
    } else {
      toast({
        variant: 'destructive',
        title: 'Passwords do not match.',
        description: 'Please re-enter your password.'
      })
    }
  }
  return (
    <div className="pb-20">
      <h1 className="text-xl font-bold">Register</h1>
      <p className="pb-5 text-gray-500">Please enter your registration information.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>Password (re-enter)</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Re-enter your password..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-end">
            <Button type="submit" className="font-bold w-full" disabled={loading}>
              {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : 'Register'}
            </Button>
          </div>
        </form>
      </Form>
      <hr className="my-10" />
      <p className="text-center">
        Already have an account?{' '}
        <Link className="underline text-blue-500" href={`/login`}>
          Log in
        </Link>
      </p>
    </div>
  )
}

export default RegisterEn
