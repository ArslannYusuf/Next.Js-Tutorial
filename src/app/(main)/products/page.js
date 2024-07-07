import PageHeader from '@/components/page-header'
import React from 'react'


export const metadata = {
	title: "Products Us",
	description: "Our company supports ...",
};

const Page = () => {

  console.log("Static routing")

  return (
    <>
      <PageHeader title="Products Us" />
    </>
  )
}

export default Page
