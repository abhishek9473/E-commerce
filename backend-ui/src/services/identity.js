import Cookies from "js-cookie";

export const getAuth = () => {
  return Cookies.get("token")
}

export const getUserName = () => {
  return Cookies.get("user");
};
