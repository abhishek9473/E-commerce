import Cookies from "js-cookie";

const setJwtInCookie = (token) => {
  Cookies.set("token", token);
};
const setNameInCookie = (userName) => {
  Cookies.set("user", userName);
};

const setValidUserInCookie = (data) => {
  Cookies.set("validUser", data);
};

export { setJwtInCookie, setNameInCookie, setValidUserInCookie };
