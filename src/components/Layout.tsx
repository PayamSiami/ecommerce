import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ children, title }: any) {
  return (
    <>
      <Head>
        <title>{"فروشگاه لیواری - " + title}</title>
        <meta name="description" content="Ecomerce Website"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-start shadow-md items-center px-4">
            <Link href="/" className="text-lg font-bold">
              فروشگاه لیواری
            </Link>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright @ 2023 store</p>
        </footer>
      </div>
    </>
  );
}
