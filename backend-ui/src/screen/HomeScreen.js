import Modal from "@/components/element/Modal";
import CategorisHandler from "@/components/pageContent/homePage/CategorisHandler";
import ProductHandler from "@/components/pageContent/homePage/ProductHandler";
import React, { useState } from "react";

function HomeScreen() {
  return (
    <>
      <div className="px-24 py-7">
        <ProductHandler />
        <CategorisHandler />
      </div>
    </>
  );
}

export default HomeScreen;
