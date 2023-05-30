import React from "react";

function AllCategoriesCard({ item, click }) {
  const clickHandler = (id, categoryName) => {
    click ? click(id, categoryName) : null;
  };
  return (
    <>
      <a onClick={() => clickHandler(item.id, item.categoeryName)}>
        <div className="m-1 py-1 px-2 h-72 border border-gray-400 flex flex-col cursor-pointer justify-around hover:text-blue-primary  hover:border-blue-primary">
          <div className="h-3/5 flex justify-center">
            <img
              className="h-full w-full "
              src={item.imageSrc}
              alt="category image"
            />
          </div>
          <div
            className="px-1 text-center"
            // onClick={() => window.alert("text clicked")}
          >
            <div className="font-semibold"> {item?.categoeryName} </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default AllCategoriesCard;
