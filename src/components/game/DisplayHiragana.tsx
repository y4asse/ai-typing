import React, { memo } from 'react'

const DisplayHiragana = memo(({ splitSentence, hiraganaIndex }: { splitSentence: string[]; hiraganaIndex: number }) => {
  return (
    <div className="text-2xl mt-10">
      {splitSentence.map((char, index) =>
        index < hiraganaIndex ? (
          <span key={index} className="text-gray-300">
            {char}
          </span>
        ) : (
          <span key={index}>{char}</span>
        )
      )}
    </div>
  )
})

export default DisplayHiragana
