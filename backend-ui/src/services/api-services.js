const { post, get, destroy, put } = require("./http-service");
const test = process.env.NEXT_PUBLIC_API_URL;
const apiUrl = "http://localhost:3000";

export const adminLogin = (data) => {
  return post(`${apiUrl}/loginAdmin`, data);
};

// all for category handling
export const addNewCategoryInDb = (data) => {
  return post(`${apiUrl}/category/add`, data);
};
export const getAllCategoryFromDb = () => {
  return get(`${apiUrl}/category/all`);
};
export const updateCategoryFromDb = (id, data) => {
  return put(`${apiUrl}/category/update/${id}`, data);
};
export const deleteCategoryFromDb = (id) => {
  return destroy(`${apiUrl}/category/delete/${id}`);
};

// all for products handling
export const addNewProductInDb = (data) => {
  return post(`${apiUrl}/product/add`, data);
};

export const allProductInDb = () => {
  return get(`${apiUrl}/product/all`);
};
export const updatedProductInDb = (id, data) => {
  return put(`${apiUrl}/product/update/${id}`, data);
};
