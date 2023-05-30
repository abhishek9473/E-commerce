import React, { useEffect, useState } from "react";
import AddNewProductSample from "@/components/cards/AddNewProductSample";
import ProductCard from "@/components/cards/ProductCard";
import Modal from "@/components/element/Modal";
import SnackbarSucess from "@/components/element/SnackbarSucess";
import AddProduct from "@/components/forms/AddProduct";
import AllCardLayout from "@/layouts/AllCardLayout";
import HomeLayout from "@/layouts/HomeLayout";
import { allProductInDb, getAllCategoryFromDb } from "@/services/api-services";

function allProducts() {
  const [refreshValue, setRefreshValue] = useState(false);
  const [addProductModalOpen, setAddProductModalOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [allProductData, setallProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null)

  const refresh = () => {
    setRefreshValue(!refreshValue);
  };
  const sanckBarClose = () => {
    setSnackBarOpen(false);
  };
  const addNewProduct = (data) => {
    setSelectedCategory(data)
    setAddProductModalOpen(true);
  };
  const handleModalClose = () => {
    setAddProductModalOpen(false);
  };
  useEffect(() => {
    getAllCategoryFromDb().then((responce) => {
      setAllCategoryData(responce.entity);
    });
  }, []);
  useEffect(() => {
    allProductInDb().then((responce) => {
      setallProductData(responce.entity);
    });
  }, [refreshValue]);

  return (
    <>
      <HomeLayout pageTitle="all products">
        {allCategoryData.map((data, i) => (
          <AllCardLayout key={i} caption={data.categoeryName}>
            {/* direct button of add product */}
            <div onClick={() => addNewProduct(data.id)}>
              <AddNewProductSample />
            </div>
            {allProductData.map(
              (product, j) =>
                data.id == product.categoryId && (
                  <ProductCard
                    refresh={refresh}
                    allCategoryData={allCategoryData}
                    item={product}
                    key={j}
                  />
                )
            )}
          </AllCardLayout>
        ))}

        <Modal isOpen={addProductModalOpen} onClose={handleModalClose}>
          <AddProduct
            selectedCategory={selectedCategory}
            categoryOption={allCategoryData}
            onClose={handleModalClose}
            refresh={refresh}
          />
        </Modal>

        <button onClick={() => setSnackBarOpen(true)}> click</button>
        <SnackbarSucess
          open={snackBarOpen}
          onclose={sanckBarClose}
          message={"hello user"}
        />
      </HomeLayout>
    </>
  );
}

export default allProducts;
