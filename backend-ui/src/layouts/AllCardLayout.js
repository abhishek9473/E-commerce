import React from "react";

function AllCardLayout({ caption, children }) {
  return (
    <>
      <div className="p-2 bg-slate-200 shadow">
        <div className="bg-white">
          <div className=" text-center text-2xl font-semibold">
            {caption ? caption : "New Page"}{" "}
          </div>
          <div className="grid lg:grid-cols-7 grid-cols-5 gap-2  overflow-auto">
            {/* map function below */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCardLayout;
