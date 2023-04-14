import { Layout } from "@/components";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../public/fonts/BYekan.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className={myFont.className}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
