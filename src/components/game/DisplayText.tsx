import { gameAtom } from '@/jotai/gameAtom'
import { useAtom } from 'jotai'
import { memo } from 'react'

const DisplayText = memo(({ textIndex, className }: { textIndex: number; className?: string }) => {
  const [game] = useAtom(gameAtom)
  const { text } = game
  return (
    <div className={className}>
      {text[textIndex] && (
        <div className="text-xl">
          {text[textIndex].split('').map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      )}
    </div>
  )
})

DisplayText.displayName = 'DisplayText'

export default DisplayText
