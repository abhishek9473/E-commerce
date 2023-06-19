import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EmptyCheckoutDisply() {
  return (
    <>
      <div>
        <div className="bg-blue-light flex justify-center py-7">
          <div className="gap-2 flex flex-col">
            <Image src={"/emptyCheckoutCart.png"} width={200} height={200} />
            <div className="text-center font-semibold text-xl">
              Nothing To Checkout
            </div>
            <div className="py-6 flex justify-center">
              <Link className="w-full" href={"/viewCart"}>
                <button className="button blue-effect w-full">
                  Go to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
