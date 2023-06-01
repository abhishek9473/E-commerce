const { post, get, destroy, put } = require("./http-service");
const test = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = "http://localhost:3000";

export const userLogin = (data) => {
  return post(`${apiUrl}/login`, data);
};

export const userSignup = (data) => {
  return post(`${apiUrl}/signup`, data);
};

export const getAllCategoryFromDb = () => {
  return get(`${apiUrl}/category/all`);
};

export const getAllProductByCategoryFromDb = (categoryId) => {
  return get(`${apiUrl}/product/category/${categoryId}`);
};

export const getProductByIdFromDb = (productId) => {
  return get(`${apiUrl}/product/${productId}`);
};
