import React from 'react'

const Page = ({ params }) => {
  return (
    <div>
      Dashboard Products Details - {params.id}
    </div>
  )
}

export default Page
