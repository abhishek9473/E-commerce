import React from "react";

export default function CheckoutPriceDetailCard({
  totalItems,
  sellingPrice,
  deliveryCharge = 0,
}) {
  const totalAmmount = sellingPrice + deliveryCharge;
  return (
    <>
      <div>
        <div className="border-2 flex flex-col shadow-lg">
          <div className="text-center text-lg font-medium bg-blue-light border-b-2 py-1">
            Price Details
          </div>
          <div className="px-2 pb-11">
            <div className="flex flex-col gap-4 py-4">
              <div className="flex justify-between">
                <span>
                  Price{" "}
                  <span className="text-sm text-textGray">
                    ({totalItems} {totalItems == 1 ? "item" : "items"})
                  </span>
                </span>
                <span>₹ {sellingPrice}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span>{deliveryCharge}</span>
              </div>
            </div>
            <div className="py-2 border-y-2 border-dotted font-medium flex justify-between">
              <span>Ammount Payble</span>
              <span>₹ {totalAmmount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
