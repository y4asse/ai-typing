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
            AIが文章を生成するタイピングゲーム
          </h1>
          <h1 className="tracking-widest bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent text-3xl font-bold mt-5">
            新しいタイピングの世界へ飛び込もう！
          </h1>
          <p className="text-lg text-gray-500 mt-10">
            テーマを入力するとAIが文を生成し、その文章でタイピング練習することができます。同じ文章だけタイピングして飽きていませんか？自分の好きなテーマでタイピング練習をしてみましょう！
          </p>
          <div className="mt-10">
            <Button asChild className="text-xl font-bold">
              <Link href="/play">プレイする</Link>
            </Button>
          </div>
        </div>
        <div className="w-1/2 text-center max-md:w-full">
          <Logo className="mx-auto w-[500px]" />
          <div className="text-end text-xl text-gray-500">新世代タイピングゲーム🚀</div>
          <TypingAnimation className="w-[400px] h-[400px] mx-auto rounded-full max-md:w-[300px]" />
        </div>
      </div>
    </WidthContainer>
  )
}
