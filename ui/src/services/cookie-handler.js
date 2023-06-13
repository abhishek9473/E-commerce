import Cookies from "js-cookie";

// Set the expiration time in seconds
const expirationTime = 24 * 2 * 60 * 60; // 2 days

export const setJwtInCookie = (token) => {
  Cookies.set("token", token, {
    expires: new Date(Date.now() + expirationTime * 1000),
    path: "/",
    secure: true,
    // httpOnly: true,
  });
};

export const setNameInCookie = (userName) => {
  Cookies.set("name", userName, {
    expires: new Date(Date.now() + expirationTime * 1000),
    path: "/",
  });
};
export const setValidUserInCookie = (value) => {
  Cookies.set("authorisation", value, {
    expires: new Date(Date.now() + expirationTime * 1000),
    path: "/",
  });
};
