import { gameAtom } from '@/jotai/gameAtom'
import { useAtom } from 'jotai'
import { memo } from 'react'

const DisplayText = memo(({ textIndex }: { textIndex: number }) => {
  const [game] = useAtom(gameAtom)
  const { text } = game
  return (
    <>
      {text[textIndex] && (
        <div className="text-xl">
          {text[textIndex].split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      )}
    </>
  )
})

DisplayText.displayName = 'DisplayText'

export default DisplayText
