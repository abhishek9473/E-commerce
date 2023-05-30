import React, { useState } from "react";
import { addNewCategoryInDb } from "@/services/api-services";
import { useForm } from "react-hook-form";

function AddCategory({ onClose, refresh }) {
  const caption = "Add A New Category";

  const [imgData, setImgData] = useState("");
  const [categoryData, setCategoryData] = useState("");
  const [dbError, setdbError] = useState("");
  const imgDataHandler = (event) => setImgData(event.target.value);
  const categoryDataHandler = (event) => setCategoryData(event.target.value);

  const { register, handleSubmit } = useForm();

  // post api call
  const addCategory = (data) => {
    addNewCategoryInDb(data)
      .then((responce) => {
        console.log("add category res", responce);
        if (responce.status == true) {
          refresh ? refresh() : null;
          onClose();
        } else if (responce.status == false) {
          showError(responce.entity);
        }
      })
      .catch((err) => console.log(err));
  };

  const showError = (data) => {
    setdbError(data);
  };

  return (
    <>
      <div className="bg-gray-100  w-[30rem] h-80">
        <form onSubmit={handleSubmit(addCategory)}>
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
                onClick={onClose}
                type="button"
                className="button border-effect "
              >
                Cancel
              </button>
              <button className="button blue-effect " type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCategory;
