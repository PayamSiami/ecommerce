import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";
import Image from "next/image";

const TopBanner = ({ data }: any) => {
  return (
    <div className="hero-banner-container">
      <div className="content">
        <h3>{data?.midText}</h3>
        <h3>{data?.smallText}</h3>
        <Link href={`/product/${data?.slug?.current}`}>
          <button type="button">جزییات</button>
        </Link>
      </div>
      <Image
        src={String(urlFor(data && data?.image[0]))}
        alt="img"
        width={500}
        height={500}
        className="hero-banner-image"
      />
    </div>
  );
};

export default TopBanner;
