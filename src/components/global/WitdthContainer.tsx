import React from 'react'

const WidthContainer = ({ children }: { children?: React.ReactNode }) => {
  return <div className="max-w-[1500px] mx-auto px-3">{children}</div>
}

export default WidthContainer
