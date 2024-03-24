'use client'

import Spinner from '@/components/global/Spinner'
import WidthContainer from '@/components/global/WitdthContainer'
import { useAuth } from '@/components/provider/FirebaseAuthProvider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Page = () => {
  const user = useAuth()
  if (user === undefined) {
    return (
      <div className="min-h-screen">
        <Spinner />
      </div>
    )
  }
  if (user === null) {
    return (
      <div>
        <WidthContainer>
          <div className="text-center text-xl font-bold">
            Please login
            <div className="mt-10">
              <Button asChild>
                <Link href={`/login`}>Log in</Link>
              </Button>
            </div>
          </div>
        </WidthContainer>
      </div>
    )
  }
  return (
    <div className="min-h-screen">
      <WidthContainer>
        <div className="flex flex-col justify-center items-center">
          <img
            src={user.photoURL ?? 'https://github.com/shadcn.png'}
            alt="User icon"
            className="w-[100px] h-[100px] rounded-full border"
          />
          <div className="mt-5 text-xl font-bold">{user?.displayName}</div>
          <div className="mt-10">
            <Button asChild>
              <Link href={`/mypage/edit`}>Edit profile</Link>
            </Button>
          </div>
        </div>
      </WidthContainer>
    </div>
  )
}

export default Page
