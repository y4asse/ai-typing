'use client'

import { defaultGameState, gameAtom } from '@/jotai/gameAtom'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { FaXTwitter } from 'react-icons/fa6'
const Result = () => {
  const [game, setGame] = useAtom(gameAtom)
  const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault()
    if (e.key === 'Escape') {
      setGame((prev) => ({ ...defaultGameState, thema: prev.thema, status: 'input' }))
    }
  }
  const { thema, score, totalTimeMiliSec, rank, batches } = game
  const text = encodeURIComponent(`AI Typingをプレイしました！🚀\nテーマ🔥「${thema}」\nスコア📃「${score}」点\n\n`)
  const hashtags = encodeURIComponent('AItyping')
  const url = encodeURIComponent('https://ai-typing.app\n')
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])
  return (
    <div className="text-center w-full">
      <div className="text-2xl font-bold animate-bounce">終了</div>
      <div className="text-gray-600 text-3xl font-bold mt-1">「{game.thema}」</div>
      <div className="flex gap-10 justify-center mt-5">
        <div className="rounded-full shadow w-[200px] h-[200px] border border-gray-300 flex flex-col justify-center items-center gap-3">
          <div className="text-xl text-gray-500">得点</div>
          <div className="text-4xl">
            <span className="text-orange-500 font-bold">{game.score}</span>
            <span className="ml-2 text-sm">点</span>
          </div>
        </div>
        {/* <div className="rounded-full shadow w-[200px] h-[200px] border border-gray-300 flex flex-col justify-center items-center gap-3">
          <div className="text-xl text-gray-500">順位</div>
          <div className="text-4xl">
            <span className="text-orange-500 font-bold">{game.rank}</span>
            <span className="ml-2 text-sm">位</span>
          </div>
        </div> */}
      </div>
      <div className="flex justify-center items-center mt-5 text-xl gap-10">
        <div>
          <span>タイム：</span>
          <span className="font-bold text-blue-500">{(totalTimeMiliSec / 1000).toFixed(0)}秒</span>
        </div>
        <div>
          <span>タイプ数：</span>
          <span className="font-bold text-blue-500">{game.totalTypeNum}</span>
        </div>
        <div>
          <span>ミスタイプ数：</span>
          <span className="font-bold text-red-500">{game.totalMissTypeNum}</span>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-10">
        <Button onClick={() => setGame((prev) => ({ ...defaultGameState, thema: prev.thema, status: 'input' }))}>
          もう一度(Esc)
        </Button>
        <Button asChild>
          <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`} target="_blank">
            <FaXTwitter />
            で共有する
          </a>
        </Button>
        {/* <Button onClick={() => setGame((prev) => ({ ...defaultGameState, thema: prev.thema, status: 'input' }))}>
          ランキングを見る
        </Button> */}
      </div>
    </div>
  )
}

export default Result
