import React, { useEffect, useState } from "react";
import OrderDetailCard from "@/components/cards/OrderDetailCard";
import { getAllOrdersFromDb } from "@/services/api-services";
import { useRouter } from "next/router";

function orderHistory() {
  const router = useRouter();
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    getAllOrdersFromDb()
      .then((response) => {
        if (response.status) {
          setOrderData(response.entity);
        } else {
          console.log(response.entity);
        }
      })
      .catch((error) => console.log("new error", error));
  }, []);

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
      <div className="p-3">
        <div className="border">
          <div>
            <div className="bg-blue-dark text-xl font-semibold text-center py-1">
              MY ORDERS
            </div>
          </div>
          <div>
            <div className="lg:px-10 py-2 ">
              {orderData?.map((item, i) => (
                <OrderDetailCard
                  data={item}
                  key={i}
                  productPage={productViewPage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default orderHistory;
