import PageHeader from '@/components/page-header';
import { wait } from '@/helpers/misc/misc';
import React from 'react'


export const metadata = {
	title: "Contact Us",
	description: "Our company supports ...",
};

const Page = async() => {

 /*  await wait(5000);

  if(Math.random() > 0.5) throw new Error("Invalid parameters") */

  return (
    <>
        <PageHeader title="Contact Us" />
    </>
  )
}

export default Page