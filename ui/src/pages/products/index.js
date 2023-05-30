import BaseLayout from "@/layouts/BaseLayout";
import { getProductByIdFromDb } from "@/services/api-services";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function index() {
  const [product, setProduct] = useState([]);
  const [pageReady, setPageReady] = useState(false);

  const router = useRouter();
  const query = router.query;
  const categoryName = query.productType;
  const productId = query.pid;

  useEffect(() => {
    getProductByIdFromDb(productId)
      .then((responce) => {
        if (responce.status) {
          // use arrey-index because respone.entity give us arrey. so we can use map function or
          //  direct assign with index value because responce.entity give only a single value base on product id.
          setProduct(responce.entity[0]);
          setPageReady(true);
        }
      })
      .catch((error) => console.log("product id error", error));
  }, [productId]);

  const brandName = product?.brandName;
  const newBrandName =
    brandName?.charAt(0).toUpperCase() + brandName?.slice(1) || null;

  return (
    <>
      <BaseLayout pageTitle={categoryName}>
        {pageReady && (
          <div className="flex pt-6">
            {/* left section .. image  */}
            <div className="lg:basis-1/3 md:basis-2/5">
              <div className="px-4">
                <div className=" border p-1 h-72 w-full lg:h-96">
                  <img className="cardImage" src={product?.imageSrc} />
                </div>
              </div>
            </div>
            {/* left section end here */}

            {/* right section start here */}
            <div className="basis-2/3  pr-4">
              <div className=" border px-1 flex flex-col h-full justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-sm text-textGray">
                    {product?.brandName}
                  </div>
                  <div className="text-xl">
                    {newBrandName} {product?.modelName}
                  </div>
                  <div className="text-textGray text-sm">
                    Storage : {product?.varient}
                  </div>
                  <div className="text-textGray">
                    Feature : {product?.specification}
                  </div>
                  <div className="flex text-2xl text-blue-primary gap-2 font-semibold">
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
                      {product?.sellingPrice}
                    </span>

                    <span className="line-through text-textGray">
                      {product?.mrp}
                    </span>
                  </div>
                </div>

                <div className="pb-3 pl-3">
                  <button className="addCartButton">Add to cart</button>
                </div>
              </div>
            </div>
            {/* right div end */}
          </div>
        )}
      </BaseLayout>
    </>
  );
}

export default index;
