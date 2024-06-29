import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div>
			<h1>About Page</h1>
			

			{[...new Array(100)].map((_, index) => (
				<p key={index}>.</p>
			))}

            <Link href="/dashboard/products">Dashboard</Link>
		</div>
	);
};

export default Page;
