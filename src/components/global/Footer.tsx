import React from 'react'
import WidthContainer from './WitdthContainer'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10">
      <WidthContainer>
        <div className="flex flex-col gap-2 h-full">
          <Link href="/privacy" className="text-gray-500">
            プライバシーポリシー
          </Link>
          <a href="https://twitter.com/y4isse" className="text-gray-500">
            開発者
          </a>
        </div>
      </WidthContainer>
      <div className="text-gray-500 text-center mt-10">
        © 2024　
        <a href="https://twitter.com/y4isse" target="_blank" className="underline">
          y4isse
        </a>
      </div>
    </div>
  )
}

export default Footer
