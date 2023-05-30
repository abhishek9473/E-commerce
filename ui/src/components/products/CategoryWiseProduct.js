// this is not use

import React from "react";
import AllTpyeProductCard from "../cards/AllTpyeProductCard";

function CategoryWiseProduct({ data, caption }) {
  const products = data;

  return (
    <>
      <div className="product-section-body">
        <div className="bg-white">
          <div className="product-section-caption">
            {caption ? caption : "Products"}{" "}
          </div>
          <div className="responsive-card-body">
            {/* check product detail avilable or not */}
            {products ? (
              products.map((item, i) => (
                <AllTpyeProductCard
                  key={i}
                  nextPage={`/products/${item.page}`}
                  imgUrl={item.imgUrl}
                  cardContent={item.type}
                />
              ))
            ) : (
              <>
                <div>Data not found</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryWiseProduct;
