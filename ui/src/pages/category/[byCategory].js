import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllProductByCategoryFromDb } from "@/services/api-services";
import BaseLayout from "@/layouts/BaseLayout";
import ProductDisplayLayout from "@/layouts/ProductDisplayLayout";
import ProductCardWithPrice from "@/components/cards/ProductCardWithPrice";

function allProductsByCategory() {
  const [productData, setProductData] = useState([]);
  const [value, setValue] = useState(false);
  const router = useRouter();

  const query = router.query;

  const categoryName = query.categoryName;
  const categoryId = query.id;
  const productType = categoryName;

  const productDetailPage = (productId) => {
    const queryParams = {
      productType: productType,
      pid: productId,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/products?${queryString}`);
  };

  //  api call
  useEffect(() => {
    getAllProductByCategoryFromDb(categoryId)
      .then((responce) => {
        // console.log({ responce });
        if (responce.status == true) {
          setProductData(responce.entity);
          setValue(true);
        } else {
          console.log("error to find data", responce);
        }
      })
      .catch((error) => console.log("error", error));
  }, [categoryId]);

  return (
    <>
      <BaseLayout pageTitle={productType}>
        <ProductDisplayLayout caption={productType}>
          {value && productData.length > 0
            ? productData.map((item, i) => (
                <ProductCardWithPrice
                  click={productDetailPage}
                  key={i}
                  item={item}
                />
              ))
            : null}
        </ProductDisplayLayout>
      </BaseLayout>
    </>
  );
}

export default allProductsByCategory;

// export async function getStaticProps(context){
//   console.log("context",context)
//   // const responce = getProductFromDb(id)
// }
