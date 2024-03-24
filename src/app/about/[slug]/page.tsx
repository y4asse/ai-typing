import React from 'react'
export const runtime = 'edge'

const Page = ({ params }: { params: { slug: string } }) => {
  console.log(params.slug)
  return (
    <div>
      <h1>About {params.slug}</h1>
    </div>
  )
}

export default Page
