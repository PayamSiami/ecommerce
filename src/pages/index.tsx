import React from "react";

import { client } from "../../lib/client";
import { Product, FooterBanner, TopBanner } from "../components";

const Home = ({ products }: any) => (
  <div>
    <TopBanner data={products?.length && products[0]} />
    <div className="products-heading">
      <h2>محصولات پرفروش</h2>
      {/* <p>speaker There are many variations passages</p> */}
    </div>

    <div className="products-container layout">
      {products?.map((product: { _id: any }) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <FooterBanner footerBanner={products?.length && products[1]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "products"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Home;
