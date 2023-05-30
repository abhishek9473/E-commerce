import React from "react";
import HomeLayout from "@/layouts/HomeLayout";
import ProductHandler from "@/components/pageContent/homePage/ProductHandler";
import CategorisHandler from "@/components/pageContent/homePage/CategorisHandler";

function Home() {
  return (
    <>
      <HomeLayout pageTitle={"home"}>
        <div className="px-24 py-7">
          <ProductHandler />
          <CategorisHandler />
        </div>
      </HomeLayout>
    </>
  );
}

export default Home;
