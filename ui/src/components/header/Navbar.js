import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Modal from "../elements/Modal";
import LoginForm from "../form/LoginForm";
import SignupForm from "../form/SignupForm";
import { getAuth, getUserName } from "@/services/identity";
import PopoverComponent from "../elements/Popover";
import ProfileContent from "../childrens/ProfileContent";

function Navbar() {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [loginOrSignupValue, setLoginOrSignupValue] = useState(true);
  const [userLoginValue, setUserLoginValue] = useState(null);

  const router = useRouter();

  // check user login or not
  useEffect(() => {
    const LoginValue = getAuth() && getUserName() ? true : false;
    setUserLoginValue(LoginValue);
  }, []);

  console.log("login", userLoginValue);
  // const userNameOriginal = userLoginValue ? getUserName() : "Login";
  // const userName = userLoginValue ? getUserName() : "Login";

  const userNameForDisplay = () => {
    const name = getUserName();
    const capitalName = name.charAt(0).toUpperCase() + name.slice(1);
    return capitalName;
  };

  const modalDataChanger = () => {
    setLoginOrSignupValue(!loginOrSignupValue);
  };

  const loginFormHandler = () => {
    setLoginFormOpen(true);
  };
  const modalCloseHandler = () => {
    setLoginFormOpen(false);
    setTimeout(() => {
      setLoginOrSignupValue(true);
    }, 200);
  };

  return (
    <>
      <div className=" px-1 py-1 bg-blue-primary sticky top-0">
        <div className=" lg:px-24 px-12 flex items-center justify-between ">
          {/* logo pic and name handler start */}
          {/* <div className="pr-8" onClick={() => router.push("/")}> */}
          <div className="pr-8">
            <a href={"/"}>
              <Image src={"/navbar/navbar_logo.png"} height={45} width={100} />
            </a>
          </div>
          {/* logo pic and name handler end */}

          {/* search menu start */}

          <div class="relative basis-1/2  w-full ">
            <div className="flex items-center  ">
              <input
                type="text"
                placeholder="Search a product,brand and more"
                class="w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none"
              />
              <div
                class="absolute right-0 mr-6"
                onClick={() => alert("icon clicked")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* search menu end */}
          {/* user name , info and more + cart menu start here */}
          <div className="flex basis-1/2 justify-around  text-white font-semibold">
            {!userLoginValue ? (
              <>
                {/* div for login and signup handler /// (before login)  */}
                <div className="cursor-pointer">
                  <div
                    onClick={loginFormHandler}
                    className="border border-white px-4"
                  >
                    Login
                  </div>
                  <Modal isOpen={loginFormOpen} onClose={modalCloseHandler}>
                    {loginOrSignupValue ? (
                      <LoginForm change={modalDataChanger} />
                    ) : (
                      <SignupForm change={modalDataChanger} />
                    )}
                  </Modal>
                </div>
              </>
            ) : (
              <>
                {/* profile content // (after login) */}
                <div className="cursor-pointer">
                  <PopoverComponent buttonlevel={userNameForDisplay()}>
                    <ProfileContent />
                  </PopoverComponent>
                </div>
              </>
            )}

            <div className="cursor-pointer">
              <div>About us</div>
            </div>
            <div className="flex cursor-pointer">
              <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>

              <div>Cart</div>
            </div>
          </div>

          {/* user name , info and more + cart menu end here */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
