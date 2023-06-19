import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import CheckoutPriceDetailCard from "@/components/cards/CheckoutPriceDetailCard";
import EmptyCheckoutDisply from "@/components/others/EmptyCheckoutDisply";
import { addOrderInDb, getAllCartItemsFromDb } from "@/services/api-services";
import { useRouter } from "next/router";

export default function checkOut() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmmount, setTotalAmmount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cartData, setCartData] = useState([]);
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  // api call and find items in cart db
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

  // /////////////////////////////   set cart price value   //////////////////////
  useEffect(() => {
    const cartDataArr = cartData;
    let grossSellingPrice = 0;
    for (let i = 0; i < cartDataArr.length; i++) {
      let data = cartDataArr[i];
      grossSellingPrice =
        grossSellingPrice + data.Product.sellingPrice * data.productQty;
    }
    setTotalAmmount(grossSellingPrice);
    setTotalItems(cartDataArr.length);
  }, [isLoading]);

  // send data to api and save data in db
  const onSubmit = (value) => {
    const data = {
      userId: cartData[0].userId,
      totalProduct: totalItems,
      cartPrice: totalAmmount,
      status: "success",
      paymentMode: value.paymentMode,
    };

    const allData = {
      cartItems: cartData,
      orderData: data,
    };

    addOrderInDb(allData)
      .then((responce) => {
        if (responce.status == true) {
          setTimeout(() => {
            router.push("/account/orderHistory");
          }, 1500);
        }
      })
      .catch((error) => console.log("error in order submit", error));
  };

  const confirmOrder = () => {
    handleSubmit(onSubmit)();
  };

  // ______________________________________________________________________________________//
  return (
    <>
      <div className="p-4">
        <div className="border min-h-screen ">
          <div className="bg-blue-dark py-1 text-center font-semibold text-2xl">
            ORDER SUMMARY
          </div>

          {isLoading ? (
            "Loading..."
          ) : (
            <>
              {cartData.length > 0 ? (
                <div className="flex flex-row gap-3 px-8 pt-4 lg:px-10">
                  {/* left section */}
                  <div className="basis-3/5 lg:basis-[68%] flex flex-col gap-10">
                    <div className="flex border font-medium">
                      <div className="flex justify-between grow px-2 py-4 basis-2/3 lg:basis-4/5  ">
                        <div>
                          Total product ( {totalItems}{" "}
                          {totalItems == 1 ? "item" : "items"} )
                        </div>
                        <div>
                          {" "}
                          <span className="text-sm text-textGray">price</span> ₹
                          {totalAmmount}
                        </div>
                      </div>
                      <div className="grow flex flex-col justify-center">
                        <Link href="/viewCart">
                          <div className="flex justify-center">
                            <button className="border-2 py-1 w-4/5  hover:bg-green-primary hover:text-white hover:border-green-primary">
                              Edit Items
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div className="px-2 border ">
                      <div>
                        <div className="text-center font-semibold text-xl border-b py-2">
                          Payment Meathod
                        </div>
                        {/* radio button field */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="flex gap-5 flex-col py-2">
                            <div>
                              <div className="flex gap-2 font-medium">
                                <input
                                  type={"radio"}
                                  name={"paymentMode"}
                                  id={"cardPayment"}
                                  value={"cardPayment"}
                                  onSelect
                                  {...register("paymentMode", {
                                    required: true,
                                  })}
                                ></input>
                                <label htmlFor="cardPayment">
                                  Card Payment
                                </label>
                              </div>
                              <div className="pl-5 text-sm text-textGray">
                                (use debit or credit card by secure network)
                              </div>
                            </div>

                            <div>
                              <div className="flex gap-2 font-medium">
                                <input
                                  type={"radio"}
                                  name={"paymentMode"}
                                  id={"netBanking"}
                                  value={"netBanking"}
                                  {...register("paymentMode", {
                                    required: true,
                                  })}
                                ></input>
                                <label htmlFor="netBanking">Net Banking</label>
                              </div>
                              <div className="pl-5 text-sm text-textGray">
                                (use multiple bank for Net-Banking)
                              </div>
                            </div>

                            <div>
                              <div className="flex gap-2 font-medium">
                                <input
                                  type={"radio"}
                                  name={"paymentMode"}
                                  id={"upi"}
                                  value={"upi"}
                                  defaultChecked
                                  {...register("paymentMode", {
                                    required: true,
                                  })}
                                ></input>
                                <label htmlFor="upi">Upi</label>
                              </div>
                              <div className="pl-5 text-sm text-textGray">
                                (upi powered by BHIM Upi, also accept Paytm,
                                PhonePay, GPay and Other)
                              </div>
                            </div>

                            <div>
                              <div className="flex gap-2 font-medium">
                                <input
                                  type={"radio"}
                                  name={"paymentMode"}
                                  id={"cashOnDelivery"}
                                  value={"cashOnDelivery"}
                                  {...register("paymentMode", {
                                    required: true,
                                  })}
                                ></input>
                                <label htmlFor="cashOnDelivery">
                                  Cash On Delivery
                                </label>
                              </div>
                              <div className="pl-5 text-sm text-textGray">
                                (Pay Cash, When item reached to you)
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* radio button field end */}
                      </div>
                    </div>
                  </div>

                  {/* right dection */}
                  <div className="grow border pt-2 px-2 lg:px-4">
                    <div className="flex flex-col gap-5 h-full ">
                      <CheckoutPriceDetailCard
                        sellingPrice={totalAmmount}
                        totalItems={totalItems}
                        deliveryCharge={0}
                      />
                      <button
                        onClick={confirmOrder}
                        className="button w-full green-effect"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <EmptyCheckoutDisply />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
