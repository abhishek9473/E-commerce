import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AllItemBox from "../componentSections/AllItemBox";
import AllCategoriesCard from "../cards/AllCategoriesCard";
import { getAllCategoryFromDb } from "@/services/api-services";

export default function AllCategorySection() {
  const router = useRouter();

  const nextPage = (id, name) => {
    const queryParams = {
      categoryName: name,
      id: id,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    // router.push(`/products/type?${queryString}`);
    // router.push(`/products?${queryString}`);
    router.push(`/category/type?${queryString}`);
  };

  const [allCategoryData, setAllCategoryData] = useState([]);
  // api call

  useEffect(() => {
    getAllCategoryFromDb()
      .then((responce) => {
        if (responce.status) {
          setAllCategoryData(responce.entity);
        } else {
          console.log("get all category error status false", responce);
        }
      })
      .catch((error) => console.log("get all category error", error));
  }, []);

  return (
    <>
      <AllItemBox caption={"Categories"}>
        {/* map of all avilable categories in a card */}
        <div className="p-4 text-center font-bold text-2xl" >
          <div className="flex flex-col justify-between h-1/2">
            <span>shop</span>
            <span>by</span>
            <span> categories</span>
          </div>
        </div>
        {allCategoryData.map((item) => (
          <AllCategoriesCard click={nextPage} item={item} />
        ))}
      </AllItemBox>
    </>
  );
}
