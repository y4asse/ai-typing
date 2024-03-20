import React from 'react'
import WidthContainer from './WitdthContainer'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 text-gray-500 dark:text-gray-300">
      <div className="max-w-[1000px] px-3 mx-auto">
        <div className="flex flex-col gap-2 h-full">
          <Link href="/privacy" className="">
            プライバシーポリシー
          </Link>
          <Link href="/about" className="">
            このサイトについて
          </Link>
          <a href="https://twitter.com/y4isse" target="_blank">
            開発者
          </a>
        </div>
      </div>
      <div className=" text-center mt-10">
        © 2024　
        <a href="https://twitter.com/y4isse" target="_blank" className="underline">
          y4isse
        </a>
      </div>
    </div>
  )
}

export default Footer
