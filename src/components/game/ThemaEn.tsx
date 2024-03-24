import React, { useEffect, useRef, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { AiTextResponse } from '@/types/aiText'
import { useToast } from '@/components/ui/use-toast'
import { useAtom } from 'jotai'
import { gameAtom } from '@/jotai/gameAtom'

const Thema = () => {
  const { toast } = useToast()
  const [game, setGame] = useAtom(gameAtom)
  const [errorMessages, setErrorMessages] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  }, [])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (game.status === 'creating') return
    if (e.target.value.length > 25) {
      setErrorMessages('Please enter a theme using 25 characters or less')
    } else {
      setErrorMessages('')
    }
    setGame((prev) => ({ ...prev, thema: e.target.value }))
  }

  const handleClick = async () => {
    if (game.thema.length === 0) {
      setErrorMessages('Please enter a theme')
      return
    }
    if (game.thema.length > 25) {
      setErrorMessages('Please enter a theme using 25 characters or less')
      return
    }
    try {
      setGame((prev) => ({ ...prev, status: 'creating' }))
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/aiText`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ thema: game.thema, model: 'gpt-3.5-turbo' }),
        cache: 'no-cache'
      })
      if (!res.ok) {
        console.log(res.statusText)
        throw new Error('[response error]' + res.statusText)
      }

      // 成功時
      const data: AiTextResponse = await res.json()
      setGame((prev) => ({
        ...prev,
        text: data.data.map((d) => d.text),
        hiragana: data.data.map((d) => d.hiragana),
        status: 'created'
      }))
    } catch (e) {
      console.error(e)
      toast({
        title: 'Error',
        description: 'Failed to generate text',
        variant: 'destructive'
      })
      setGame((prev) => ({ ...prev, status: 'input' }))
    }
  }
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Enter a Theme</h1>
      <div className="w-full">
        {errorMessages && <p className="text-red-500">{errorMessages}</p>}
        <Input
          ref={inputRef}
          placeholder="e.g., Movie Quotes, Sports Trivia, Famous Lyrics"
          className="text-xl shadow"
          value={game.thema}
          onChange={handleChange}
          name="thema"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClick()
              e.currentTarget.blur()
            }
          }}
        />
      </div>
      <Button onClick={handleClick} className="mt-3" disabled={game.status === 'creating'}>
        {game.status === 'creating' ? (
          <div className="flex">
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Creating...
          </div>
        ) : (
          'Create'
        )}
      </Button>

      <div>
        <p>* Please note that the AI may not always generate suitable content depending on the theme.</p>{' '}
        <p>
          * For detailed game rules and instructions, please see the{' '}
          <Link href={`/about/play`} className="underline">
            How to Play
          </Link>{' '}
          section.
        </p>
      </div>
    </>
  )
}

export default Thema
