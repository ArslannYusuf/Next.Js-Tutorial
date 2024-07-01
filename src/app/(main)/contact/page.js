import { wait } from '@/helpers/misc/misc';
import React from 'react'

const Page = async() => {

  await wait(5000);

  if(Math.random() > 0.5) throw new Error("Invalid parameters")

  return (
    <div>
        <h1>Contact Page</h1>
    </div>
  )
}

export default Page