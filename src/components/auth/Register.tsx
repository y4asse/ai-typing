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
    message: '名前は2文字以上で入力してください。'
  }),
  email: z.string().email({
    message: '有効なメールアドレスを入力してください。'
  }),
  password: z.string().min(6, {
    message: 'パスワードは6文字以上で入力してください。'
  }),
  repeatPassword: z.string().min(6, {
    message: 'パスワードは6文字以上で入力してください。'
  })
})

const Register = () => {
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
                title: '✅ 登録が完了しました。'
              })
              router.push(`/`)
            })
            .catch((error) => {
              toast({
                variant: 'destructive',
                title: 'エラーが発生しました。',
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
                title: 'メールアドレスが無効です。',
                description: '有効なメールアドレスを入力してください。'
              })
              break
            case 'auth/email-already-in-use':
              toast({
                variant: 'destructive',
                title: 'メールアドレスが既に使用されています。',
                description: '別のメールアドレスを入力してください。'
              })
              break
            case 'auth/weak-password':
              toast({
                variant: 'destructive',
                title: 'パスワードが弱いです。',
                description: '6文字以上のパスワードを入力してください。'
              })
              break
            default:
              toast({
                variant: 'destructive',
                title: 'エラーが発生しました。',
                description: errorMessage
              })
              break
          }
          setLoading(false)
        })
    } else {
      toast({
        variant: 'destructive',
        title: 'パスワードが一致しません。',
        description: 'パスワードを再入力してください。'
      })
    }
  }
  return (
    <div className="pb-20">
      <h1 className="text-xl font-bold">新規登録</h1>
      <p className="pb-5 text-gray-500">登録情報を入力してください。</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>名前</FormLabel>
                <FormControl>
                  <Input placeholder="名前を入力..." {...field} />
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
          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }: any) => (
              <FormItem>
                <FormLabel>パスワード（再入力）</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="パスワードを再入力..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-end">
            <Button type="submit" className="font-bold w-full" disabled={loading}>
              {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : '新規登録'}
            </Button>
          </div>
        </form>
      </Form>
      <hr className="my-10" />
      <p className="text-center">
        すでにアカウントをお持ちの方は
        <Link className="underline text-blue-500" href={`/login`}>
          こちら
        </Link>
      </p>
    </div>
  )
}

export default Register
