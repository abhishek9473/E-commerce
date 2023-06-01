import React from "react";
import BaseLayout from "@/layouts/BaseLayout";
import AllCategorySection from "@/components/pageSection/AllCategorySection";

export default function Home() {
  console.log("home page load")
  return (
    <>
      <BaseLayout pageTitle="Home">
        <AllCategorySection />
        {/* all components like - product catagary, top brands, best deals, previous search... etc */}
        {/* <CategoryWiseProduct data={allTypeProducts} caption={"All Products"} /> */}
      </BaseLayout>
    </>
  );
}
