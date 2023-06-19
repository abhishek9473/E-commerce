import React from "react";

function OrderDetailCard({ data, productPage }) {
  console.log("data", data);

  const id = data?.id;
  const imgSrc = data?.Product.imageSrc;
  const brandName = data?.Product.brandName;
  const modelName = data?.Product.modelName;
  const specification = data?.Product.specification;
  const varient = data?.Product.varient;
  const sellingPrice = data?.sellingPrice;
  const sellingQty = data?.productQty;
  const totalAmmount = sellingPrice * sellingQty;
  const paymentMode = data?.UserOrder.paymentMode;
  const productId = data?.Product.id;

  const productType = data?.Product.Category.categoeryName;

  const orderDate = () => {
    const receivedDate = data?.createdAt;
    const [datePart, timePart] = receivedDate.split("T");
    const [year, month, day] = datePart.split(/[- :]/);
    const newDate = `${day}-${month}-${year}`;

    return newDate;
  };

  const pageChanger = () => {
    productPage(productId, productType);
  };

  return (
    <>
      <div className="min-h-max py-1">
        <div className="px-4 py-2 border">
          <div className="flex justify-between gap-1">
            <div className="text-sm text-textGray">Order-id : {id}</div>
            <div className="text-sm text-textGray">
              Order on : {orderDate()}
            </div>
          </div>

          <div className=" flex gap-4">
            <div className="basis-32 h-32">
              <div className="h-full w-full">
                <img
                  onClick={pageChanger}
                  className="h-full w-full"
                  src={imgSrc}
                />
              </div>
            </div>

            <div className="flex justify-between grow">
              <div className="basis-40 lg:basis-60 px-2">
                <span
                  onClick={pageChanger}
                  className="hover:text-blue-600  hover:cursor-pointer"
                >
                  {brandName} {modelName}
                </span>
                <div className="text-xs text-textGray">{varient} </div>
                <div className="text-xs text-textGray">({specification}) </div>
              </div>

              <div className="grow flex justify-between">
                <div className="min-w-max">
                  <div className="border w-60 border-black">
                    <div className="border-b flex border-black">
                      <span className="basis-1/3 text-center">price</span>
                      <span className="basis-1/3 text-center border-x border-black">
                        qty
                      </span>
                      <span className="basis-1/3 text-center">total</span>
                    </div>
                    <div className="flex">
                      <span className="basis-1/3 text-center">
                        {sellingPrice}
                      </span>
                      <span className="basis-1/3 text-center border-x border-black">
                        {sellingQty}
                      </span>
                      <span className="basis-1/3 text-center">
                        {totalAmmount}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-textGray">
                    payment mode : {paymentMode}
                  </div>
                </div>

                <div className="font-bold text-lg">₹ {totalAmmount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetailCard;
