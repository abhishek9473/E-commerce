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
// cart functions

export const getAllCartItemsFromDb = () => {
  return get(`${apiUrl}/viewCart/`);
};

export const checkProductInCartDb = (data) => {
  return post(`${apiUrl}/viewCart/checkProductInCart`,data)
}

export const updateProductQtyInCartDb = (cartId, productQty) => {
  return put(`${apiUrl}/viewCart/updateCart/${cartId}`, productQty);
};

export const addProductInCartDb = (newProductId) => {
  return post(`${apiUrl}/viewCart/addProduct`, newProductId);
};

export const deleteProductInCartDb = (cartId) => {
  return destroy(`${apiUrl}/viewCart/deleteItem/${cartId}`);
};
