import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../../lib/client";

export default function ProductItem({
  product: { image, name, slug, price, brand },
}: any) {
  return (
    <div className="card">
      <Link href={`/product/${slug?.current}`}>
        <Image
          src={String(urlFor(image && image[0]))}
          alt={name}
          className="rounded shadow"
          width={500}
          height={500}
        />
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${slug?.current}`}>
          <h2 className="text-lg">{name}</h2>
        </Link>
        <p className="mb-2">brand{brand}</p>
        <p>${price}</p>
        <button className="primary-button" type="button">
          جزییات
        </button>
      </div>
    </div>
  );
}
