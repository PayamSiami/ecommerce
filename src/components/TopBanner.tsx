import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";
import Image from "next/image";

const TopBanner = ({ data }: any) => {
  return (
    <div className="hero-banner-container myFont.className">
      <p className="beats-solo">{data?.smallText}</p>
      <h3>{data?.midText}</h3>
      <Image
        src={String(urlFor(data && data?.image[0]))}
        alt="img"
        width={500}
        height={500}
        className="hero-banner-image"
      />

      <Link href={`/product/${data?.slug?.current}`}>
        <button type="button">جزییات</button>
      </Link>
    </div>
  );
};

export default TopBanner;
