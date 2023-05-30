import React, { useState } from "react";
import Modal from "../element/Modal";
import EditProduct from "../forms/EditProduct";

function ProductCard({ item, allCategoryData, refresh }) {
  const [productModalOpen, setProductModalOpen] = useState(false);

  const editHandler = () => {
    setProductModalOpen(true);
  };

  const modalClose = () => {
    setProductModalOpen(false);
  };

  return (
    <>
      <a>
        <div className="m-1 py-1 px-2 h-72 border border-gray-400 flex flex-col cursor-pointer justify-around hover:text-blue-600  hover:border-blue-primary">
          <div className="h-2/5 flex justify-center">
            {/* imeage section */}
            <img
              className="h-full w-full "
              src={item.imageSrc}
              alt="category image"
            />
          </div>
          <div className="px-1 text-center">
            <div className="text-xs"> {item?.brandName} </div>
            <div className="font-semibold line-clamp-1 overflow-hidden ">
              {" "}
              {item?.modelName}{" "}
            </div>
            <div className="text-xs text-gray-700"> {item?.varient} </div>
            <div className="text-xs text-gray-700">
              avilable quantity : {item?.quantity}{" "}
            </div>
            <div className="flex justify-center">
              <span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18"
                  />
                </svg>
              </span>
              <span>{item?.sellingPrice} </span>
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={editHandler} className="button blue-effect">
              Edit
            </button>

            <Modal isOpen={productModalOpen} onClose={modalClose}>
              <EditProduct
                categoryData={allCategoryData}
                onClose={modalClose}
                data={item}
                refresh={refresh}
              />
              {/* <EditCategory data={item} onClose={modalClose} /> */}
            </Modal>
          </div>
        </div>
      </a>
    </>
  );
}

export default ProductCard;
