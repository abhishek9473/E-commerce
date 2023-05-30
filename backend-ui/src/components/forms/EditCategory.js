import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  deleteCategoryFromDb,
  updateCategoryFromDb,
} from "@/services/api-services";
import Modal from "../element/Modal";
import DeleteCategoryConfirm from "../others/DeleteCategoryConfirm";

function EditCategory({ onClose, data, refresh }) {
  const [imgData, setImgData] = useState("");
  const [categoryData, setCategoryData] = useState("");
  const [dbError, setdbError] = useState("");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const imgDataHandler = (event) => setImgData(event.target.value);
  const deleteButtonHandler = (id) => setDeleteModalOpen(true);
  const categoryDataHandler = (event) => setCategoryData(event.target.value);
  const deleteModalHandler = () => setDeleteModalOpen(false);

  const caption = "Update A Category";
  const oldData = {
    categoeryName: data.categoeryName,
    imageSrc: data.imageSrc,
  };
  const { register, handleSubmit } = useForm({
    defaultValues: oldData,
  });

  // post api call
  const updateCategory = (newDetail) => {
    updateCategoryFromDb(data.id, newDetail)
      .then((responce) => {
        if (responce.status == true) {
          refresh();
          onClose();
        } else if (responce.status == false) {
          showError(responce.entity);
        }
      })
      .catch((err) => console.log(err));
  };

  //  // set caption in  modal form

  const permanentDeleteCategory = () => {
    const id = data.id;
    deleteCategoryFromDb(id).then((responce) => {
      console.log("deleted", responce);
      onClose();
      refresh();
      //   refresh function
    });
  };

  const showError = (data) => {
    setdbError(data);
  };

  return (
    <>
      <div className="bg-gray-100  w-[30rem] h-80">
        <form onSubmit={handleSubmit(updateCategory)}>
          <div className=" h-full flex flex-col ">
            <div className="text-center p-2 font-semibold text-xl shadow-xl bg-blue-dark">
              {caption}
            </div>
            <div className="flex-grow px-8 flex flex-col py-1 gap-5 bg-blue-light">
              <div>
                <input
                  id={"categoryName"}
                  {...register("categoeryName")}
                  type="text"
                  className="modalInput"
                  placeholder="Category Name"
                  onChange={categoryDataHandler}
                />
                <p className=" absolute text-red-600 text-sm">{dbError}</p>
              </div>

              <div>
                <input
                  id={"imageSrc"}
                  {...register("imageSrc")}
                  type="text"
                  className="modalInput w-full "
                  placeholder="Image Src"
                  onChange={imgDataHandler}
                />
              </div>
              <div className=" h-28 flex justify-between">
                <div>{categoryData}</div>
                {imgData.length >= 1 ? (
                  <img
                    className="w-44"
                    src={imgData}
                    alt="url error"
                    height={50}
                    width={50}
                  />
                ) : null}
              </div>
            </div>
            <div className="flex justify-end p-2 gap-2">
              <button
                className="button red-effect "
                type="button"
                onClick={() => deleteButtonHandler()}
              >
                delete
              </button>

              <Modal isOpen={deleteModalOpen}>
                <DeleteCategoryConfirm
                  close={deleteModalHandler}
                  categoryName={data.categoeryName}
                  confirm={permanentDeleteCategory}
                />
              </Modal>

              <button
                onClick={onClose}
                type="button"
                className="button border-effect "
              >
                Cancel
              </button>
              <button className="button blue-effect " type="submit">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditCategory;
