import React from "react";
import LoginLayout from "@/layouts/LoginLayout";
import LoginScreen from "@/screen/LoginScreen";

function Login() {
  return (
    <>
      <LoginLayout pageTitle={"login"}>
          <LoginScreen/>
      </LoginLayout>
    </>
  );
}

export default Login;
