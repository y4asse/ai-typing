import React from 'react'

const Score = ({ score }: { score: number }) => {
  return (
    <div className="px-3 py-2 rounded-full bg-blue-500 text-white">
      <span className="text-3xl mr-1">{score}</span>
      <span>点</span>
    </div>
  )
}

export default Score
