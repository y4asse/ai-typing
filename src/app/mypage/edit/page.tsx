'use client'

import Spinner from '@/components/global/Spinner'
import WidthContainer from '@/components/global/WitdthContainer'
import { useAuth } from '@/components/provider/FirebaseAuthProvider'
import { Button } from '@/components/ui/button'
import { z } from 'zod'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ReloadIcon } from '@radix-ui/react-icons'
import { updateProfile } from 'firebase/auth'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/firebase/client'

const FormSchema = z.object({
  username: z.string().min(2, {
    message: '名前は2文字以上で入力してください。'
  })
})

const Page = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const user = useAuth()
  const [loading, setLoading] = useState(false)
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: ''
    }
  })
  if (user === undefined) {
    return <Spinner />
  }
  if (user === null) {
    return (
      <div>
        <WidthContainer>
          <div className="text-center text-xl font-bold">
            ログインしてください
            <div className="mt-10">
              <Button asChild>
                <Link href={`/login`}>ログイン</Link>
              </Button>
            </div>
          </div>
        </WidthContainer>
      </div>
    )
  }

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true)
    await updateProfile(user, {
      displayName: data.username
    })
      .then(() => {
        toast({
          title: '✅ 保存しました。'
        })
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: 'エラーが発生しました。',
          description: error.message
        })
      })
    setLoading(false)
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0])
      setOpen(true)
    }
  }

  const handleImageUpload = async () => {
    if (selectedImage && user) {
      setLoading(true)
      const storageRef = ref(storage, `users/${user.uid}/profile.jpg`)
      await uploadBytes(storageRef, selectedImage)
      const downloadURL = await getDownloadURL(storageRef)
      await updateProfile(user, {
        photoURL: downloadURL
      })
      setOpen(false)
      setLoading(false)
      toast({
        title: '✅ プロフィール画像を更新しました。'
      })
    }
  }

  return (
    <div>
      <WidthContainer>
        <div className="text-center font-bold text-3xl">プロフィールを編集</div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={user.photoURL ?? 'https://github.com/shadcn.png'}
            alt="ユーザアイコン"
            className="w-[100px] h-[100px] rounded-full border mt-10"
          />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">画像</Label>
            <Input id="picture" type="file" onChange={handleImageChange} />
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>プロフィール画像の更新</DialogTitle>
              </DialogHeader>
              <div className="flex justify-center mt-4">
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="選択された画像"
                    className="w-[200px] h-[200px] rounded-full border object-cover object-center"
                  />
                )}
              </div>
              <DialogFooter>
                <Button onClick={handleImageUpload} disabled={loading}>
                  {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : '決定'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <hr className="mt-10 w-full max-w-[500px]" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-[500px] mt-10">
              <FormField
                control={form.control}
                name="username"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>名前</FormLabel>
                    <FormControl>
                      <Input placeholder="新しい名前を入力..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-end">
                <Button type="submit" className="font-bold w-full" disabled={loading}>
                  {loading ? <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> : '保存'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </WidthContainer>
    </div>
  )
}

export default Page
