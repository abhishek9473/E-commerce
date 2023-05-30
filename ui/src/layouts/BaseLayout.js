import Head from "next/head";
import React from "react";

function BaseLayout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title> {pageTitle ? pageTitle + "- Zeytech" : "Zeytech"} </title>
        <meta name="discription" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <main>{children}</main>
      </div>
    </>
  );
}

export default BaseLayout;

