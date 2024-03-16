'use client'

import Lottie from 'lottie-react'
import animation from '@/assets/title.json'

export const TypingAnimation = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <Lottie animationData={animation} />
    </div>
  )
}
