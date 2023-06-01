import React from "react";

// // this is only for map the data
export default function AllItemBox({ caption, children }) {
  return (
    <>
      <div className="p-2 bg-slate-200 shadow">
        <div className="bg-white">
          <div className=" text-center text-2xl font-semibold">
            {caption ? caption : "Content"}{" "}
          </div>
          <div className="grid lg:grid-cols-7 grid-cols-5 gap-2 ">
            {/* map function below */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
