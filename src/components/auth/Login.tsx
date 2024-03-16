'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useToast } from '../ui/use-toast'

import { Button } from '@/components/ui/button'

import React from 'react'
import { GoogleAuthProvider, signInWithPopup, UserCredential, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const FormSchema = z.object({
  email: z.string().email({
    message: '有効なメールアドレスを入力してください。'
  }),
  password: z.string().min(6, {
    message: 'パスワードは6文字以上で入力してください。'
  })
})

const Login = () => {
  const { toast } = useToast()
  const router = useRouter()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user
        toast({
          title: '✅ ログインしました'
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
              title: '無効なメールアドレスです。',
              description: '正しいメールアドレスを入力してください。'
            })
            break
          case 'auth/user-not-found':
            toast({
              variant: 'destructive',
              title: 'ユーザーが見つかりません。',
              description: 'メールアドレスを確認してください。'
            })
            break
          case 'auth/wrong-password':
            toast({
              variant: 'destructive',
              title: 'パスワードが間違っています。',
              description: 'パスワードを確認してください。'
            })
            break
          case 'auth/too-many-requests':
            toast({
              variant: 'destructive',
              title: 'ログインに失敗しました。',
              description: 'しばらくしてからもう一度お試しください。'
            })
            break
          default:
            toast({
              variant: 'destructive',
              title: 'エラーが発生しました。',
              description: 'もう一度お試しください。'
            })
            break
        }
      })
  }

  const authWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result: UserCredential) => {
        const user = result.user
        toast({
          title: '✅ ログインしました'
        })
        router.push(`/`)
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: 'エラーが発生しました。',
          description: 'もう一度お試しください。'
        })
      })
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
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
                <FormLabel>パスワード</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="パスワードを入力..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-end">
            <Button type="submit" className="font-bold w-full">
              ログイン
            </Button>
          </div>
        </form>
      </Form>
      <hr className="my-5" />
      <p className="text-center">
        新規登録は
        <Link className="underline text-blue-500" href={`/register`}>
          こちら
        </Link>
      </p>
      <div className="text-center pb-10">
        <p className="my-4">または</p>
        <Button onClick={authWithGoogle}>Googleでログイン</Button>
      </div>
    </div>
  )
}

export default Login
