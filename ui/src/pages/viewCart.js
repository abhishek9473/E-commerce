import React, { useEffect, useState } from "react";
import {
  deleteProductInCartDb,
  getAllCartItemsFromDb,
  updateProductQtyInCartDb,
} from "@/services/api-services";
import CartProductCard from "@/components/cards/CartProductCard";
import CartPriceDetailCard from "@/components/cards/CartPriceDetailCard";
import { useRouter } from "next/router";
import EmptyCartDisplay from "@/components/others/EmptyCartDisplay";

export default function viewCart() {
  const router = useRouter();
  const [totalMrp, setTotalMrp] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmmount, setTotalAmmount] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [cartData, setCartData] = useState([]);

  // api call and set cart data in page for render
  useEffect(() => {
    getAllCartItemsFromDb()
      .then((responce) => {
        if (responce.status) {
          setCartData(responce.entity);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log("cart page error", error));
  }, []);

  // api for delete cart data
  const removeProduct = (cartId) => {
    deleteProductInCartDb(cartId)
      .then((responce) => {
        if (responce.status) {
          router.reload();
        }
      })
      .catch((error) => console.log("error in delete cart product", error));
  };

  // api call and update product qty
  const cartProductQtyChangeHandler = (cartId, productQty) => {
    const data = { newQty: productQty };
    updateProductQtyInCartDb(cartId, data).then((responce) => {
      if (responce.status) {
        router.reload();
      }
    });
  };

  // /////////////////////////////   set cart price value   //////////////////////
  useEffect(() => {
    const cartDataArr = cartData;
    let grossMrp = 0;
    let grossDiscount = 0;
    let grossTotalAmmount = 0;
    for (let i = 0; i < cartDataArr.length; i++) {
      let data = cartDataArr[i];
      grossMrp = grossMrp + data.Product.mrp * data.productQty;
      grossDiscount =
        grossDiscount +
        (data.Product.mrp - data.Product.sellingPrice) * data.productQty;
      grossTotalAmmount =
        grossTotalAmmount + data.Product.sellingPrice * data.productQty;
    }
    setTotalMrp(grossMrp);
    setDiscount(grossDiscount);
    setTotalAmmount(grossTotalAmmount);
    setTotalItems(cartDataArr.length);
  }, [isLoading]);
  // ////////////////////////////////////////////////////////////

  const productViewPage = (productID, productType) => {
    const queryParams = {
      pid: productID,
      productType: productType,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/products?${queryString}`);
  };

  return (
    <>
      <div className="p-4">
        <div className="border min-h-screen ">
          <div className="bg-blue-dark py-1 text-center font-semibold text-2xl">
            Cart items
          </div>

          {isLoading ? (
            "Loading..."
          ) : (
            <>
              {cartData.length > 0 ? (
                <div className="flex flex-row gap-1 px-8 lg:px-20">
                  <div className="basis-3/4 lg:basis-3/5">
                    {cartData.map((data, i) => (
                      <CartProductCard
                        key={i}
                        data={data}
                        productPage={productViewPage}
                        removeFunction={removeProduct}
                        updateQty={cartProductQtyChangeHandler}
                      />
                    ))}
                  </div>
                  <div className="grow">
                    <CartPriceDetailCard
                      mrp={totalMrp}
                      discount={discount}
                      totalItems={totalItems}
                      totalAmmount={totalAmmount}
                    />
                  </div>
                </div>
              ) : (
                <EmptyCartDisplay />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
