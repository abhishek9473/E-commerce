import Modal from "@/components/element/Modal";
import AddProduct from "@/components/forms/AddProduct";
import { getAllCategoryFromDb } from "@/services/api-services";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ProductHandler() {
  const [addProductModalOpen, setAddProductModalOpen] = useState(false);
  const [categoryOption, setCategoryOption] = useState([]);

  const router = useRouter();

  const addProductHandler = () => {
    setAddProductModalOpen(true);
  };
  const allProductHandler = () => {
    router.push("/allProducts");
  };

  const handleModalClose = () => {
    setAddProductModalOpen(false);
  };

  // api call
  useEffect(() => {
    getAllCategoryFromDb()
      .then((responce) => {
        setCategoryOption(responce.entity);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className="homeScreenCardBody">
        <div className="homeScreenCardHeader">product</div>
        <div className="flex justify-between">
          <div className="homeScreenCardContent">
            <div className="button blue-effect" onClick={addProductHandler}>
              <button type="button">add product</button>
            </div>
            <Modal isOpen={addProductModalOpen} onClose={handleModalClose}>
              <AddProduct
                categoryOption={categoryOption}
                onClose={handleModalClose}
              />
            </Modal>

            <div className="button blue-effect" onClick={allProductHandler}>
              <button>all product</button>
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

export default ProductHandler;
