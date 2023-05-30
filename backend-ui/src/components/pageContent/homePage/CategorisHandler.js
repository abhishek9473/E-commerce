import Modal from "@/components/element/Modal";
import AddCategory from "@/components/forms/AddCategory";
import { useRouter } from "next/router";
import React, { useState } from "react";

function CategorisHandler() {
  const [addCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
  const router = useRouter();

  const addCategoryHandler = () => {
    setAddCategoryModalOpen(true);
  };

  // push the next page
  const allCategoriesHandler = () => {
    router.push("/allCategories");
  };

  function handleModalClose() {
    setAddCategoryModalOpen(false);
  }

  return (
    <>
      <div className="homeScreenCardBody">
        <div className="homeScreenCardHeader">category</div>

        <div className="flex justify-between">
          <div className="homeScreenCardContent">
            <div className="button blue-effect " onClick={addCategoryHandler}>
              {/* //////////   Add button for add category     ////////////// */}
              <button>add category</button>
            </div>
            {/* modal for add a new category in database */}
            <Modal isOpen={addCategoryModalOpen} onClose={handleModalClose}>
              <AddCategory onClose={handleModalClose} />
            </Modal>

            <div className="button blue-effect " onClick={allCategoriesHandler}>
              {/* //////////   All button for All category     ////////////// */}
              <button>all categories</button>
            </div>
          </div>
          <div className="homeScreenCardContent">
            {/* <div className="button blue-effect">total</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategorisHandler;
