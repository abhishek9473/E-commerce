import AddNewProductSample from "@/components/cards/AddNewProductSample";
import AllCategoriesCard from "@/components/cards/AllCategoriesCard";
import Modal from "@/components/element/Modal";
import AddCategory from "@/components/forms/AddCategory";
import AllCardLayout from "@/layouts/AllCardLayout";
import HomeLayout from "@/layouts/HomeLayout";
import { getAllCategoryFromDb } from "@/services/api-services";
import React, { useEffect, useState } from "react";

function allCategories() {
  const [addCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
  const [refreshValue, setRefreshValue] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  //   call the api and get allcategories data from database
  useEffect(() => {
    getAllCategoryFromDb().then((responce) => {
      setAllCategories(responce.entity);
    });
  }, [refreshValue]);

  const refresh = () => {
    setRefreshValue(!refreshValue);
  };
  function handleModalClose() {
    setAddCategoryModalOpen(false);
  }
  const addCategoryHandler = () => {
    setAddCategoryModalOpen(true);
  };

  return (
    <>
      <HomeLayout pageTitle="category">
        <AllCardLayout caption={"All Categories"}>
          

          <div onClick={addCategoryHandler}>
            <AddNewProductSample />
          </div>

          {/* All categories map from database */}
          {allCategories.map((item, i) => (
            <AllCategoriesCard refresh={refresh} item={item} key={i} />
          ))}
        </AllCardLayout>
        <Modal isOpen={addCategoryModalOpen} onClose={handleModalClose}>
          <AddCategory onClose={handleModalClose} refresh={refresh} />
        </Modal>
      </HomeLayout>
    </>
  );
}

export default allCategories;
