import React from "react";

function DeleteCategoryConfirm({ close, categoryName, confirm }) {
  return (
    <>
      <div className="h-48 w-[28rem] flex flex-col">
        <div className="text-center py-2 font-semibold  bg-yellow-400">
          Warning
        </div>
        <div className=" py-2 flex-grow">
          <div>
            category{" "}
            <span className="font-bold">
              {categoryName ? categoryName : null}
            </span>{" "}
            deleted permanently from database,
          </div>
          <div>do you want to delete this</div>
        </div>
        <div className="flex justify-end px-4 gap-8">
          <button
            onClick={() => close()}
            type="button"
            className="button blue-effect w-20 h-7"
          >
            cancel
          </button>
          <button
            onClick={confirm}
            type="button"
            className="button border-effect w-20 h-7"
          >
            ok
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteCategoryConfirm;
