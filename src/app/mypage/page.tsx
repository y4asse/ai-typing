'use client'

import Spinner from '@/components/global/Spinner'
import WidthContainer from '@/components/global/WitdthContainer'
import { useAuth } from '@/components/provider/FirebaseAuthProvider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Page = () => {
  const user = useAuth()
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
  return (
    <div>
      <WidthContainer>
        <div className="flex flex-col justify-center items-center">
          <img
            src={user.photoURL ?? 'https://github.com/shadcn.png'}
            alt="ユーザアイコン"
            className="w-[100px] h-[100px] rounded-full border"
          />
          <div className="mt-10 text-xl font-bold">{user?.displayName}</div>
        </div>
      </WidthContainer>
    </div>
  )
}

export default Page
