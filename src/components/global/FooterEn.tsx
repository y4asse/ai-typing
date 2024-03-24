import React from 'react'
import WidthContainer from './WitdthContainer'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 text-gray-500 dark:text-gray-300">
      <div className="max-w-[1000px] px-3 mx-auto">
        <div className="flex flex-col gap-2 h-full">
          <div>
            <Link href="/privacy" className="">
              Privacy Policy
            </Link>
          </div>
          <div>
            <Link href="/about" className="">
              About
            </Link>
          </div>
          <div>
            <Link href="/about/play" className="">
              How to play
            </Link>
          </div>
          <div>
            <a href="https://twitter.com/y4isse" target="_blank">
              Developer
            </a>
          </div>
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
