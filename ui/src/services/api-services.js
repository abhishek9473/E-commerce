const { post, get, destroy, put } = require("./http-service");
const test = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = "http://localhost:3000";

// export const adminLogin = (data) => {
//   return post(`${apiUrl}/loginAdmin`, data);
// };

export const getAllCategoryFromDb = () => {
  return get(`${apiUrl}/category/all`);
};

export const getAllProductByCategoryFromDb = (categoryId) => {
  return get(`${apiUrl}/product/category/${categoryId}`);
};

export const getProductByIdFromDb = (productId) => {
  return get(`${apiUrl}/product/${productId}`);
};
