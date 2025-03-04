import PageHeader from "@/components/page-header";
import ProductDetails from "@/components/product-details";
import ProductsInSameCategory from "@/components/products-in-same-category";
import Spacer from "@/components/spacer";
import { API_URL } from "@/helpers/config";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({params}) => {
	const res = await fetch(`${API_URL}/products/${params.id}`);
	const data = await res.json();

	return {
		title: data.title
	}


};

const Page = async ({ params }) => {
	const productId = params.id;
	if (!productId) notFound();

	const fetchProduct = (
		await fetch(`${API_URL}/products/${productId}`)
	).json();

	const fetchProducts = (await fetch(`${API_URL}/products`)).json();

	const [product, products] = await Promise.all([
		fetchProduct,
		fetchProducts,
	]);

	if (!product) notFound();

	return (
		<>
			<PageHeader title={product.title} />
			<Spacer height={50} />
			<ProductDetails product={product} />
			<Spacer />
			<ProductsInSameCategory products={products} />
			<Spacer />
		</>
	);
};

export default Page;