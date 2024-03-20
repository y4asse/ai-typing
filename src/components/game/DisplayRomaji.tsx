import React, { memo } from 'react'

const DisplayRomaji = memo(({ romajiShow, totalInput }: { romajiShow: string; totalInput: string }) => {
  return (
    <div className="max-w-full text-xl break-all mt-10 min-h-[56px]">
      {romajiShow.split('').map((char, index) => (
        <span key={index} className={`${index < totalInput.length && 'text-gray-300'}`}>
          {char}
        </span>
      ))}
    </div>
  )
})

export default DisplayRomaji
