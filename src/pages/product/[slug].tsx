import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

import { client, urlFor } from "../../../lib/client";
import { Product } from "../../components";
import Image from "next/image";

const ProductDetails = ({ product, products }: any) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);

  const handleBuyNow = () => {};

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={String(urlFor(image && image[index]))}
              className="product-detail-image"
              alt="Product Details"
              width={100}
              height={100}
            />
          </div>
          <div className="small-images-container">
            {image?.map((item: any, i: any) => (
              <Image
                key={i}
                src={String(urlFor(item))}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
                alt="image selected"
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>جزییات: </h4>
          <p>{details}</p>
          <p className="price">
            <h4>قیمت:</h4>${price}
          </p>
          <div className="quantity">
            <h3>تعداد:</h3>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>پیشنهاد شده</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item: { _id: any }) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  // return just current slug property
  const query = `*[_type == "product"] {
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
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  // fetch similar products
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
