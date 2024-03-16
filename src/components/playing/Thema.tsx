'use client'

// import ThemaInput from '@/app/components/input/themaInput'
import AnimationTitle from '../global/animationTitle'
// import StartGameBtn from '@/app/components/buttons/startGameBtn'
import Link from 'next/link'
// import useAitext from '@/hooks/useAitext'
const Thema = () => {
  const { handleClick } = useAitext()
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen gap-14">
        <div>
          <AnimationTitle text="テーマを入力してください" />
        </div>
        <div className="w-1/2">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleClick()
            }}
          >
            {/* <ThemaInput /> */}
          </form>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <div className="w-1/2 mx-auto">{/* <StartGameBtn handleClick={handleClick} /> */}</div>
          <div className="border-2 border-black rounded-xl p-2 mt-5 w-5/12 mx-auto">{/* <AiModel /> */}</div>
          <div className="mt-3">
            <p className="mx-auto">
              ※テーマの内容によってはうまくAIが処理できなかったり、不完全な文章が生成される場合があります
            </p>
            <p className="mx-auto">
              ※ゲームの詳細なルールは
              <Link href={'/about'} className="underline">
                遊び方
              </Link>
              をご覧ください
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Thema
