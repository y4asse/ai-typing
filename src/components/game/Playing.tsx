'use client'

import useTypingLogic from '@/hooks/useTypingLogic'
import DisplayText from './DisplayText'
import DisplayHiragana from './DisplayHiragana'
import DisplayRomaji from './DisplayRomaji'
import Timer from './Timer'
import Score from './Score'

const Playing = () => {
  const {
    textIndex,
    totalInput,
    splitSentence,
    hiraganaIndex,
    requiredRomaji,
    isMissFlash,
    game,
    timer: TimeMiliSec
  } = useTypingLogic()
  const romajiShow = totalInput + requiredRomaji.join('').substring(totalInput.length)
  const { score, text } = game
  return (
    <div className="">
      <div className="absolute top-10 right-1/2 translate-x-1/2 text-xl text-gray-500">テーマ「{game.thema}」</div>
      <div className="absolute top-5 right-5">
        <Score score={score} />
      </div>

      {/* 下の問題の進捗度の線 */}
      <div
        style={{ width: `${textIndex * 20}%` }}
        className={`absolute bottom-0 left-0 h-2 bg-blue-500 duration-200 transition-all`}
      />

      <div className="absolute bottom-10 right-1/2 translate-x-1/2 flex gap-10 justify-center items-center">
        <Timer timeMiliSec={TimeMiliSec} />
        <div>
          <span className="mr-2">タイプ数</span>
          <span className="text-3xl text-blue-500">{totalInput.length}</span>
        </div>
        <div>
          <span className="mr-2">ミスタイプ数</span>
          <span className="text-3xl text-red-500">{game.missTypeNum}</span>
        </div>
      </div>
      {/* 文章の表示 */}
      <DisplayText textIndex={textIndex} className={`${isMissFlash && 'text-red-500'}`} />

      {/* ひらがなの表示 */}
      <DisplayHiragana splitSentence={splitSentence} hiraganaIndex={hiraganaIndex} />

      {/* ローマ字の表示 */}
      <DisplayRomaji romajiShow={romajiShow} totalInput={totalInput} />
    </div>
  )
}

export default Playing
