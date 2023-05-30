import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AllItemBox from "../sections/AllItemBox";
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
        {allCategoryData.map((item) => (
          <AllCategoriesCard click={nextPage} item={item} />
        ))}
      </AllItemBox>
    </>
  );
}
