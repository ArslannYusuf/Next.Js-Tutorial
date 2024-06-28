import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        <Link href="/contact">Go to contact page</Link>
      </p>

      <p>
        <Link href="/dashboard/products">Go to products page</Link>
      </p>
    </div>
  );
};

export default Page;
