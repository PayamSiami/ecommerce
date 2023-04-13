import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";
import Image from "next/image";

const HeroBanner = ({ heroBanner, key }: any) => {
  return (
    <div className="hero-banner-container">
      <p className="beats-solo">{heroBanner?.smallText}</p>
      <h3>{heroBanner?.midText}</h3>
      <Image
        src={String(urlFor(heroBanner?.image))}
        alt="img"
        width={500}
        height={500}
        className="hero-banner-image"
      />

      <Link href={`/product/${heroBanner?.product}`}>
        <button type="button">{heroBanner?.buttonText}</button>
      </Link>
    </div>
  );
};

export default HeroBanner;
