import Cookies from "js-cookie";

export const setJwtInCookie = (token) => {
  Cookies.set("token", token);
};

export const setNameInCookie = (userName) => {
  Cookies.set("name", userName);
};
export const setValidUserInCookie = (value) => {
  Cookies.set("authorisation", value);
};
