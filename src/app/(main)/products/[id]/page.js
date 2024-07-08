import PageHeader from "@/components/page-header";
import ProductDetails from "@/components/product-details";
import { API_URL } from "@/helpers/config";
import { notFound } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Product Details",
  description: "Our company supports ...",
};

const Page = async ({ params }) => {
  const productId = params.id;
  if (!productId) notFound();

  const res = await fetch(`${API_URL}/products/${productId}`);
  const data = await res.json();

  if (res.status === 404) notFound();

  return (
    <>
      <PageHeader title="Product Details" />
      <ProductDetails product={data} />
    </>
  );
};

export default Page;
