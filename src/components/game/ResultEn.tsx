'use client'

import { defaultGameState, gameAtom } from '@/jotai/gameAtom'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { FaXTwitter } from 'react-icons/fa6'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '../provider/FirebaseAuthProvider'
import Spinner from '../global/Spinner'

const postGame = async (game: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(game),
    cache: 'no-cache'
  })
  return res.json()
}

const ResultEn = () => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: postGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['games'] })
    }
  })
  const user = useAuth()
  const [game, setGame] = useAtom(gameAtom)
  const { thema, score, totalTimeMiliSec, totalTypeNum, totalMissTypeNum, missTypeKey } = game
  const handleKeydown = (e: KeyboardEvent) => {
    e.preventDefault()
    if (e.key === 'Escape') {
      setGame((prev) => ({ ...defaultGameState, thema: prev.thema, status: 'input' }))
    }
  }
  const text = encodeURIComponent(
    `I just played AI Typing! 🚀
Theme 🔥: "${thema}"
Score 📝: ${score} points
Keystrokes ⌨️: ${totalTypeNum}
Typos 🤦‍♂️: ${totalMissTypeNum}
Time ⏰: ${totalTimeMiliSec / 1000} seconds

Challenge your friends to beat your score! 💪`
  )

  const hashtags = encodeURIComponent('AITyping')
  const url = encodeURIComponent('https://ai-typing.app/en\n')
  useEffect(() => {
    mutation.mutate({
      inputed_thema: thema,
      score: score,
      total_time_mili_sec: totalTimeMiliSec,
      total_key_count: totalTypeNum,
      total_miss_type: totalMissTypeNum,
      user_id: user ? user.uid : null,
      miss_type_key_set: missTypeKey.map((miss) => `${miss.wanted_key},${miss.inputed_key}`)
    })

    window.addEventListener('keydown', handleKeydown)
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  return (
    <div className="text-center w-full">
      <div className="text-2xl font-bold animate-bounce">Finished!</div>
      <div className="text-gray-600 text-3xl font-bold mt-1">「{game.thema}」</div>
      <div className="flex gap-10 justify-center items-center mt-5 max-md:flex-col">
        <div className="rounded-full shadow w-[200px] h-[200px] border border-gray-300 flex flex-col justify-center items-center gap-3">
          <div className="text-xl text-gray-500">Score</div>
          <div className="text-4xl">
            <span className="text-orange-500 font-bold">{game.score}</span>
            <span className="ml-2 text-sm">points</span>
          </div>
        </div>
        <div className="rounded-full shadow w-[200px] h-[200px] border border-gray-300 flex flex-col justify-center items-center gap-3">
          <div className="text-xl text-gray-500">Rank</div>
          {mutation.isError ? (
            <div className="text-lg text-red-500">Error</div>
          ) : mutation.isSuccess ? (
            <div>
              <span className="text-orange-500 font-bold text-4xl">{mutation.data.ranking}</span>
              <span className="ml-2 text-sm">/{mutation.data.total}</span>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 text-xl gap-10 max-md:flex-col">
        <div>
          <span>Time: </span>
          <span className="font-bold text-blue-500">{(totalTimeMiliSec / 1000).toFixed(0)}s</span>
        </div>
        <div>
          <span>Keystrokes: </span>
          <span className="font-bold text-blue-500">{game.totalTypeNum}</span>
        </div>
        <div>
          <span>Typos: </span>
          <span className="font-bold text-blue-500">{game.totalMissTypeNum}</span>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-10">
        <Button onClick={() => setGame((prev) => ({ ...defaultGameState, thema: prev.thema, status: 'input' }))}>
          Play again (Esc)
        </Button>
        <Button asChild>
          <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}`} target="_blank">
            <FaXTwitter className="mr-2" />
            Share on X
          </a>
        </Button>
        {/* <Button onClick={() => setGame((prev) => ({ ...defaultGameState, thema: prev.thema, status: 'input' }))}>
          ランキングを見る
        </Button> */}
      </div>
    </div>
  )
}

export default ResultEn
