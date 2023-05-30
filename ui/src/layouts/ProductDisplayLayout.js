import React from "react";

export default function ProductDisplayLayout({
  caption = "Products",
  children,
}) {
  const newCaption = caption.charAt(0).toUpperCase() + caption.slice(1);

  return (
    <>
      <div className="m-2 p-1 border">
        <div className=" text-center text-2xl font-semibold bg-blue-dark">
          {newCaption}
        </div>
        <div className="flex gap-2 p-1 ">
          {/* left section */}
          <div className=" md:basis-1/4 lg:basis-1/5 border ">
            <div className="border-r">
              <div className="bg-yellow-300">--this part doesn't work right now--</div>
              <div>Fillter</div>
              <div>
                <div>Brand</div>
                <div>Price</div>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="border md:basis-3/4 lg:basis-4/5">
            <div className=" h-full grid lg:grid-cols-5 grid-cols-4 gap-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
