import PageHeader from '@/components/page-header';
import { notFound } from 'next/navigation';
import React from 'react'

export const metadata = {
	title: "Product Details Us",
	description: "Our company supports ...",
};


const Page = ({params}) => {
    console.log("Dynamic routing");

    if(params.id>100) notFound(); // 404 sayfasını render eder.

  return (
    <>
      <PageHeader title="Product Details Us" />
    </>
  )
}

export default Page
