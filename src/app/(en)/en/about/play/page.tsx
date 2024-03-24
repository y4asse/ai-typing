import React from 'react'

const Page = () => {
  return (
    <div className="container min-h-screen">
      <div className="pb-20">
        <h1 className="text-4xl font-bold">How to Play</h1>
        <p className="mt-5 text-gray-500">Here&apos;s how to play AI Typing:</p>
        <div className="mt-10">
          <h2 className="text-3xl">○Rules</h2>
          <p>
            ・As you type the displayed text, you&apos;ll earn points based on the time taken, the number of words
            typed, and the number of typing errors. The timer starts when you type the first character.
          </p>
          <p>・You&apos;ll be presented with 5 texts to type.</p>
          <p>
            ・This game supports only Japanese and English languages. Please note that using characters from other
            languages may cause the game to malfunction.
          </p>
          <p>
            ・After completing the game, your score will be registered on the leaderboard. Aim for a high score and try
            to secure a top spot!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
