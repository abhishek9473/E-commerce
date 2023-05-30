import React from "react";

function ProductCardWithPrice({ item, click }) {
  const clickHandler = (productId) => {
    console.log("item", item);
    click ? click(productId) : null;
  };
  return (
    <>
      <a onClick={() => clickHandler(item.id)}>
        <div className="priceCardBody card-hover-style">
          <div className="priceCardImageBody">
            <img
              className="priceCardImageData "
              src={item.imageSrc}
              alt="product image"
            />
          </div>
          <div className="px-1 text-center">
            <div className="text-sm text-textGray">{item?.brandName} </div>
            <div className="font-semibold text-lg">{item?.modelName} </div>
            <div className=" text-sm text-textGray"> {item?.varient} </div>

            <div className="flex justify-center gap-3">
              <span>
                <svg
                  fill="none"
                  viewBox="0 2 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 "
                  />
                </svg>
                {item?.sellingPrice}
              </span>

              <span className="line-through text-textGray">{item?.mrp}</span>
            </div>
          </div>
          {/* <div className="flex justify-center">
            <button
              // onClick={() => alert("button clicked")}
              className="add-cart-button"
            >
              Add to cart
            </button>
          </div> */}
        </div>
      </a>
    </>
  );
}

export default ProductCardWithPrice;
