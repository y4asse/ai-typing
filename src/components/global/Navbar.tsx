'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { motion } from 'framer-motion'

import React from 'react'
import WidthContainer from './WitdthContainer'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import Logo from './Logo'
import { Button } from '../ui/button'
import { useAuth } from '../provider/FirebaseAuthProvider'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

const Navbar = () => {
  const user = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const handleSignOut = async () => {
    await signOut(auth)
    toast({
      title: '✅　ログアウトしました'
    })
    router.push('/')
  }
  return (
    <div className="absolute top-0 right-0 w-full shadow-xl h-[70px]">
      <WidthContainer>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-5 max-md:gap-1">
            <Link href="/">
              <Logo className="h-10 max-md:h-7" />
            </Link>
            <Link href="/ranking" className="max-md:text-sm">
              ランキング
            </Link>
          </div>
          {user !== undefined && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src={user.photoURL ? user.photoURL : 'https://github.com/shadcn.png'}
                        className="rounded-full w-10 shadow"
                      />
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>{user.displayName}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href={`/mypage/edit`}>プロフィール</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut}>ログアウト</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild>
                  <Link href="/login">ログイン</Link>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </WidthContainer>
    </div>
  )
}

export default Navbar
