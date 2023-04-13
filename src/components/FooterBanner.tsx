import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/client";
import Image from "next/image";

const FooterBanner = ({ footerBanner }: any) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner?.discount}</p>
          <h3>{footerBanner?.largeText1}</h3>
          <h3>{footerBanner?.largeText2}</h3>
          <p>{footerBanner?.saleTime}</p>
        </div>
        <Image
          src={String(urlFor(footerBanner?.image))}
          className="footer-banner-image"
          alt="image"
          width={100}
          height={100}
        />
        <div className="right">
          <p>{footerBanner?.smallText}</p>
          <h3>{footerBanner?.midText}</h3>
          <p>{footerBanner?.desc}</p>
          <Link href={`/product/${footerBanner?.product}`}>
            <button type="button">{footerBanner?.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
