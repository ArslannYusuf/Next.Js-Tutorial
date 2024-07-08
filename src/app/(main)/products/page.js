import PageHeader from "@/components/page-header";
import ProductList from "@/components/product-list";
import { API_URL } from "@/helpers/config";
import React from "react";

export const metadata = {
	title: "Products",
	description: "Our company supports ...",
};

const Page = async () => {
	const res = await fetch(`${API_URL}/products`);
  const data = await res.json();

	return (
		<>
			<PageHeader title="Products" />
			<ProductList products={data}/>
		</>
	);
};

export default Page;