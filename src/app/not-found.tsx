import { TypingAnimation } from '@/components/lottie-animation/TypingAnimation'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-xl font-bold ">
      <div>お探しのページが見つかりません</div>
      <TypingAnimation className="w-[400px]" />
    </div>
  )
}

export default NotFound
