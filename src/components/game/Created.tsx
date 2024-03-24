import { gameAtom } from '@/jotai/gameAtom'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'

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

  const handleClick = () => {
    setGame((prev) => ({ ...prev, status: 'playing' }))
  }
  return (
    <div className="text-center">
      <div className="text-2xl font-bold">Generation complete!</div>
      <div className="text-2xl font-bold">Press enter or space to start.</div>
      <div className="text-gray-500 text-xl mt-5 animate-pulse">Press enter or space.</div>
      <div className="mt-5 md:hidden">
        <Button onClick={handleClick}>スタート</Button>
      </div>
    </div>
  )
}

export default Created
