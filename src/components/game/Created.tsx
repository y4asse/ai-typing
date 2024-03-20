import { gameAtom } from '@/jotai/gameAtom'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'

const Created = () => {
  const [game, setGame] = useAtom(gameAtom)
  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault()
    if (game.status === 'created' && (e.key === ' ' || e.key === 'Enter')) {
      setGame((prev) => ({ ...prev, status: 'playing' }))
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">生成が完了しました</div>
      <div className="text-2xl font-bold">スペースかエンターを押してゲームを開始します</div>
      <div className="text-gray-500 text-xl mt-5 animate-pulse">Press enter or space</div>
    </div>
  )
}

export default Created
