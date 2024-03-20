'use client'

import useTypingLogic from '@/hooks/useTypingLogic'
import DisplayText from './DisplayText'
import DisplayHiragana from './DisplayHiragana'
import DisplayRomaji from './DisplayRomaji'

const Playing = () => {
  const { textIndex, totalInput, splitSentence, hiraganaIndex, requiredRomaji, isMissFlash, game, timer } =
    useTypingLogic()
  const romajiShow = totalInput + requiredRomaji.join('').substring(totalInput.length)

  return (
    <div className={`${isMissFlash && 'text-red-500'}`}>
      <div className="absolute top-5 right-1/2 translate-x-1/2 text-xl text-gray-500">テーマ「{game.thema}」</div>
      {/* 文章の表示 */}
      <DisplayText textIndex={textIndex} />

      {/* ひらがなの表示 */}
      <DisplayHiragana splitSentence={splitSentence} hiraganaIndex={hiraganaIndex} />

      {/* ローマ字の表示 */}
      <DisplayRomaji romajiShow={romajiShow} totalInput={totalInput} />
    </div>
  )
}

export default Playing
