// this is not use

import React from "react";
import ItemCardWithPrice from "../cards/ProductCardWithPrice";

function ProductListWithPrice({ data, sectionTitle }) {
  const caption = sectionTitle;
  const productItem = data;
  return (
    <>
      <div className="product-section-body">
        <div className="bg-white">
          <div className=" text-center text-2xl font-semibold">
            {caption ? caption : "Products"}{" "}
          </div>
          <div className="responsive-card-body">
            {/* check product detail avilable or not */}
            {console.log("p-test",typeof productItem)}
            {typeof productItem === "object"
              ? productItem?.map((item, i) => (
                  <ItemCardWithPrice
                    key={i}
                    // nextPage="/products/index"
                    item={item}
                  />
                ))
              : (
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

export default ProductListWithPrice;
