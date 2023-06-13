import React, { useState } from "react";

export default function CartProductCard({
  data,
  removeFunction,
  updateQty,
  productPage,
}) {
  const productType = data.Product.Category.categoeryName;
  const productId = data.Product.id;
  const productData = data.Product;
  const productQty = data.productQty;
  const [totalQty, setTotalQty] = useState(productQty);

  const pageChanger = () => {
    productPage(productId, productType);
  };

  const qtyChangeHandler = (e) => {
    const newQty = e.target.value;
    setTotalQty(newQty);
    updateQty(data.id, newQty);
  };
  return (
    <div className="border-2 my-1 h-44">
      <div className=" p-3 flex gap-4 h-full">
        {/* img section below */}
        <div className="flex basis-1/5 justify-center ">
          <div className="h-full w-full ">
            <img
              onClick={pageChanger}
              className="h-full w-full"
              src={productData.imageSrc}
              alt="cart image"
            />
          </div>
        </div>
        <div className="basis-2/3 flex flex-col">
          <div className="grow">
            <span
              onClick={pageChanger}
              className="hover:text-blue-600  hover:cursor-pointer"
            >
              {productData.brandName} {productData.modelName}
            </span>
            <div className="text-xs text-textGray">{productData.varient} </div>

            <div className="flex gap-2 text-lg pt-4 ">
              <span className="line-through text-base text-textGray">
                ₹{productData?.mrp}
              </span>
              <span className="font-semibold">
                <span>₹</span>
                {productData?.sellingPrice}
              </span>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              qty{" "}
              <span>
                <input
                  type="number"
                  className="border w-10 text-center"
                  value={totalQty}
                  onChange={qtyChangeHandler}
                  min={1}
                />
              </span>
            </div>
            <div
              onClick={() => removeFunction(data.id)}
              className="border px-2 rounded-md shadow-md cursor-pointer hover:text-blue-primary"
            >
              Remove item
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
