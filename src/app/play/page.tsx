'use client'

import WidthContainer from '@/components/global/WitdthContainer'
import { defaultGameState, gameAtom } from '@/jotai/gameAtom'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import Playing from '@/components/game/Playing'
import Result from '@/components/game/Result'
import Thema from '@/components/game/Thema'
import Created from '@/components/game/Created'

const Page = () => {
  const [game, setGame] = useAtom(gameAtom)

  // 不正防止のために初期化
  useEffect(() => {
    return () => {
      setGame(defaultGameState)
    }
  }, [])

  return (
    <div className="pb-20">
      <WidthContainer>
        <div className="flex max-md:flex-col justify-evenly">
          <div className="relative w-[60%] max-md:w-full aspect-video border border-blue-100 shadow-xl rounded-xl p-5 flex justify-center items-center flex-col gap-10">
            {game.status === 'result' ? (
              <Result />
            ) : game.status === 'playing' ? (
              <Playing />
            ) : game.status === 'created' ? (
              <Created />
            ) : (
              <Thema />
            )}
          </div>
          <div className="w-[30%] max-md:w-full p-3 border rounded-xl flex justify-center items-center text-2xl font-bold">
            準備中
          </div>
        </div>
      </WidthContainer>
    </div>
  )
}

export default Page
