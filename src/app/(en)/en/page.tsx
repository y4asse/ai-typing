import Logo from '@/components/global/Logo'
import WidthContainer from '@/components/global/WitdthContainer'
import { TypingAnimation } from '@/components/lottie-animation/TypingAnimation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <WidthContainer>
      <div className="flex items-center md:px-10 max-md:flex-col max-md:gap-20">
        <div className="w-1/2 text-center max-md:w-full">
          <h1 className="tracking-widest bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent text-4xl font-bold">
            AI-Powered Typing Game
          </h1>
          <h1 className="tracking-widest bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent text-3xl font-bold mt-5">
            Dive into a New World of Typing!
          </h1>
          <p className="text-lg text-gray-500 mt-10">
            Enter a theme, and the AI will generate sentences for you to practice typing. Tired of typing the same old
            sentences over and over? Now you can practice typing with sentences tailored to your favorite topics!
          </p>
          <div className="mt-10">
            <Button asChild className="text-xl font-bold">
              <Link href="/play">Play</Link>
            </Button>
          </div>
        </div>
        <div className="w-1/2 text-center max-md:w-full">
          <Logo className="mx-auto w-[500px]" />
          <div className="text-end text-xl text-gray-500">Next-Generation AI Typing Game🚀</div>
          <TypingAnimation className="w-[400px] h-[400px] mx-auto rounded-full max-md:w-[300px]" />
        </div>
      </div>
    </WidthContainer>
  )
}
