import React, { useEffect } from "react";
import { useRouter } from "next/router";
import PopoverComponent from "./element/Popover";
import ProfileContent from "./user/ProfileContent";
import { testData } from "@/services/api-services";
import { getUserName } from "@/services/identity";

function Navbar() {
  const router = useRouter();
  const searchIconClick = () => {
    // alert("icon clicked");
  };

  const userName = getUserName() || "User";
  const newName = userName.charAt(0).toUpperCase() + userName.slice(1);

  return (
    <>
      <div className=" px-1 py-1 bg-primary sticky top-0">
        <div
          className=" px-24 md:gap-12 lg:w-3/4
         flex items-center justify-between "
        >
          {/* logo pic and name handler start */}
          <div onClick={() => router.push("/")}>
            <img
              src={"/navbar/navbar_logo.png"}
              className="h-[40px] w-[100px]"
              alt="logo"
            />
          </div>
          {/* logo pic and name handler end */}

          {/* search menu start */}

          <div class="relative w-full ">
            <div className="flex items-center  ">
              <input
                readOnly
                type="text"
                placeholder="Search a product,brand and more"
                class="w-full px-4 py-1 border border-gray-300 shadow-sm focus:outline-none"
              />
              <div class="absolute right-0 mr-6" onClick={searchIconClick}>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-primary"
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
          <div className="cursor-pointer focus:outline-none text-navbarTextLight font-semibold">

            

            <PopoverComponent buttonlevel={newName}>
              <ProfileContent />
            </PopoverComponent>
          </div>
          {/* user name , info and more + cart menu end here */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
