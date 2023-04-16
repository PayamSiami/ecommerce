import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import { client } from "../../lib/client";

export default function Home({ products }: any) {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: any) => (
          <ProductItem product={product} key={product?._id} />
        ))}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "products"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
