import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../../lib/client";

export default function ProductScreen({ product }: any) {
  const { image, name, details, price, category, brand } = product;

  if (!product) return <div>هیچ محصولی یافت نشد!</div>;

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={String(urlFor(image && image[0]))}
            alt={product.name}
            className="rounded shadow"
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{name}</h1>
            </li>
            <li>دسته بندی: - {category}</li>
            <li>برند: -{brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>درباره: {details}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>قیمت</div>
              <div>${price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>وضعیت</div>
              <div>{product.countInStock > 0 ? "موجود است" : "موجود نیست"}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  // return just current slug property
  const query = `*[_type == "products"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product: { slug: { current: any } }) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  // fetch first properties that match the query slug
  const query = `*[_type == "products" && slug.current == '${slug}'][0]`;
  // fetch similar products
  const productsQuery = '*[_type == "products"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};
