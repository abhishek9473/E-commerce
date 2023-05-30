import React from "react";
import Login from "../components/forms/Login";

function LoginScreen() {
  return (
    <>
      <div className="pt-24 min-h-screen home-background">
        <div className="flex justify-between px-24 md:px-32 ">
          <div>
            <div>
              <span className="font-bold text-9xl">Zeytech</span>
            </div>
            <div className="pt-6 pl-4">
              <span>Everything is here,</span>
              <span>Welcome</span>
            </div>
          </div>
          <div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginScreen;
