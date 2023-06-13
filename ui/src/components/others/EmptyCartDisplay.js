import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function EmptyCartDisplay() {
  return (
    <>
      <div>
        <div className="bg-blue-light flex justify-center py-7">
          <div className="gap-2 flex flex-col">
            <Image src={"/emptyCart.png"} width={200} height={200} />
            <div className="text-center font-semibold text-xl">
              Your cart is empty
            </div>
            <div className="py-6 flex justify-center">
              <Link href={"/"}>
                <button className="button blue-effect">Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
