import PageHeader from '@/components/page-header';
import React from 'react'

export const metadata = {
	title: "Product Details Us",
	description: "Our company supports ...",
};


const Page = ({params}) => {
    console.log("Params",params.id);

  return (
    <>
      <PageHeader title="Product Details Us" />
    </>
  )
}

export default Page
