import React, { useState } from "react";
import Modal from "../element/Modal";
import EditCategory from "../forms/EditCategory";

function AllCategoriesCard({ item, refresh }) {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const buttonClickHandler = () => {
    setCategoryModalOpen(true);
  };

  const modalClose = () => {
    setCategoryModalOpen(false);
  };

  return (
    <>
      <a>
        <div className="m-1 py-1 px-2 h-72 border border-gray-400 flex flex-col cursor-pointer justify-around hover:text-blue-600  hover:border-blue-primary">
          <div className="h-3/5 flex justify-center">
            <img
              className="h-full w-full "
              src={item.imageSrc}
              alt="category image"
            />
          </div>
          <div className="px-1 text-center">
            <div className="font-semibold"> {item?.categoeryName} </div>
          </div>
          <div className="flex justify-center">
            <button onClick={buttonClickHandler} className="button blue-effect">
              View Details
            </button>

            <Modal isOpen={categoryModalOpen} onClose={modalClose}>
              <EditCategory data={item} onClose={modalClose} refresh={refresh} />
            </Modal>
          </div>
        </div>
      </a>
    </>
  );
}

export default AllCategoriesCard;
