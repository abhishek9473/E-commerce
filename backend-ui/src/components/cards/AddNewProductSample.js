import React from "react";

function AddNewProductSample({ message }) {

const text = message || "Add"
  return (
    <>
      <a>
        <div className="m-1 py-1 px-2 h-72 border border-gray-400 flex flex-col cursor-pointer justify-around hover:text-blue-600  hover:border-blue-primary">
          <div className="h-3/5 flex flex-col justify-center text-center border-gray-700 border shadow-lg ">
            {/* imeage section */}
            <svg className=" h-16" viewBox="0 0 24 24" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
            <p>{text}</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default AddNewProductSample;
