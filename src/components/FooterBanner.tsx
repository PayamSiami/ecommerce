import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";
import Image from "next/image";

const FooterBanner = ({ footerBanner }: any) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <Image
          src={String(urlFor(footerBanner?.image[0]))}
          className="footer-banner-image"
          alt="image"
          width={100}
          height={100}
        />
        <div className="left">
          <p>{footerBanner?.discount}</p>
          <p>{footerBanner?.saleTime}</p>
          <p>{footerBanner?.smallText}</p>
          <h3>{footerBanner?.midText}</h3>
          <p>{footerBanner?.details}</p>
          <Link href={`/product/${footerBanner?.slug?.current}`}>
            <button type="button">جزییات</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
