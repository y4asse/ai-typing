import { TypingAnimation } from '@/components/lottie-animation/TypingAnimation'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-xl font-bold ">
      <div>404 Not Found</div>
      <TypingAnimation className="w-[400px]" />
    </div>
  )
}

export default NotFound
