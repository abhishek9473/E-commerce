import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";

function ProfileContent() {
  const router = useRouter();

  const logoutHandler = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("authorisation");
    router.reload();
  };

  return (
    <>
      <div className="border font-normal">
        <div className=" py-3 pl-5 hover:bg-secondry">My Profile</div>
        <div className=" py-3 pl-5 hover:bg-secondry">Orders</div>
        <div className=" py-3 pl-5 hover:bg-secondry">Activity log</div>
        <div className=" py-3 pl-5 hover:bg-secondry" onClick={logoutHandler}>
          Logout
        </div>
      </div>
    </>
  );
}

export default ProfileContent;
