'use client'

import { useEffect, useState } from 'react'

type Props = {
  text: string
}

const AnimationTitle = ({ text }: Props) => {
  const splitText = text.split('')
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    let count = 0
    const timer = setInterval(() => {
      if (count > splitText.length) {
        clearInterval(timer)
      }
      setTextIndex((prev) => prev + 1)
      count++
    }, 50)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <h1 className=" font-bold text-5xl tracking-widest [text-shadow:_5px_5px_20px_rgb(0_0_0_/_40%)] ">
      {splitText.map((word, index) => {
        if (index <= textIndex) {
          return <span key={index}>{word}</span>
        }
      })}
    </h1>
  )
}

export default AnimationTitle
