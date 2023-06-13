import React from "react";

function ProductCardWithPrice({ item, click }) {
  const clickHandler = (productId) => {
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
              <span className="line-through text-textGray">₹{item?.mrp}</span>
              <span className="font-medium">₹{item?.sellingPrice}</span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default ProductCardWithPrice;
