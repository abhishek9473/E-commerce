import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

function HomeLayout({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title> {pageTitle ? pageTitle + "- Zeytech" : "Zeytech"} </title>
        <meta name="discription" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar/>
        <main>{children}</main>
      </div>
    </>
  );
}

export default HomeLayout;
