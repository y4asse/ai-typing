import React, { memo } from 'react'
import { MdOutlineTimer } from 'react-icons/md'

const Timer = memo(({ timeMiliSec }: { timeMiliSec: number }) => {
  const timeSec = Math.floor(timeMiliSec / 1000)
  return (
    <div>
      <MdOutlineTimer className="inline text-xl mr-2 mb-2" />
      <span className="text-3xl text-blue-500">{timeSec}</span>
      <span>s</span>
    </div>
  )
})

Timer.displayName = 'Timer'

export default Timer
