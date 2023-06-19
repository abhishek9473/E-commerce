import Link from "next/link";
import React from "react";

export default function CartPriceDetailCard({
  totalItems,
  mrp,
  discount,
  deliveryCharge = 0,
  totalAmmount,
}) {
  return (
    <>
      <div className="flex justify-center pt-2">
        <div className="border-2 my-auto h-80 w-80 flex flex-col shadow-lg">
          <div className="text-center text-lg font-medium bg-blue-light border-b-2 py-1">
            Price Details
          </div>
          {/* detail section */}
          <div className="px-2">
            <div className="flex flex-col gap-4 py-4">
              <div className="flex justify-between">
                <span>
                  MRP{" "}
                  <span className="text-sm text-textGray">
                    ({totalItems} {totalItems == 1 ? "item" : "items"})
                  </span>
                </span>
                <span>₹ {mrp}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-{discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>{deliveryCharge}</span>
              </div>
            </div>
            <div className="py-2 border-y-2 border-dotted font-medium flex justify-between">
              <span>Total Ammount</span>
              <span>₹ {totalAmmount}</span>
            </div>
          </div>
          {/* detail section end here */}

          {/* check out button */}
          <div className="flex justify-center pt-8">
            <Link href="/checkout">
              <button className="bg-green-primary px-2 w-64 rounded-md text-white font-medium py-1">
                Proceed to Buy
              </button>
            </Link>
          </div>
          {/* check out button end */}
        </div>
      </div>
    </>
  );
}
