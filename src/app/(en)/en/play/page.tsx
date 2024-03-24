'use client'

import WidthContainer from '@/components/global/WitdthContainer'
import { defaultGameState, gameAtom } from '@/jotai/gameAtom'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import PlayingEn from '@/components/game/PlayingEn'
import ThemaEn from '@/components/game/ThemaEn'
import CreatedEn from '@/components/game/CreatedEn'
import ResultEn from '@/components/game/ResultEn'

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
        <div className="flex max-md:flex-col max-md:gap-10 justify-center">
          <div className="relative w-[900px] max-md:w-full aspect-video border border-blue-100 shadow-xl rounded-xl p-5 flex justify-center items-center flex-col gap-10">
            {game.status === 'result' ? (
              <ResultEn />
            ) : game.status === 'playing' ? (
              <PlayingEn />
            ) : game.status === 'created' ? (
              <CreatedEn />
            ) : (
              <ThemaEn />
            )}
          </div>
        </div>
      </WidthContainer>
    </div>
  )
}

export default Page
