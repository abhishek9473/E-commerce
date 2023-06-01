import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { userLogin } from "@/services/api-services";
import {
  setJwtInCookie,
  setNameInCookie,
  setValidUserInCookie,
} from "@/services/cookie-handler";
import { useRouter } from "next/router";

function LoginForm({ change }) {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  //   post api call
  const loginHadler = (data) => {
    userLogin(data)
      .then((responce) => {
        if (responce.status) {
          sucessHandler(responce.entity);
        } else if (!responce.status) {
          errorHandler(responce.entity);
        }
      })
      .catch((error) => console.log("login component error", error));
  };

  const sucessHandler = (responceData) => {
    setNameInCookie(responceData.name);
    setJwtInCookie(responceData.token);
    setValidUserInCookie(true);
    router.reload();
  };

  const errorHandler = (responceData) => {
    switch (responceData) {
      case "user not found":
        setEmailError("invalid email-id");
        setPasswordError(" ");
        break;
      case "password inncorrect":
        setPasswordError("wrong password");
        setEmailError(" ");
        break;
      default:
        console.log(responceData);
    }
  };

  const formHeader = "Login";
  return (
    <>
      <div className="h-96 w-[30rem] border">
        <div className="h-full bg-blue-light">
          <div className="bg-blue-dark text-center text-2xl font-semibold">
            {formHeader}
          </div>
          <div className="bg-blue-light px-10">
            <form onSubmit={handleSubmit(loginHadler)}>
              {/* input section start */}
              <div className="flex flex-col py-4 gap-8">
                <div className="flex ">
                  <div className="basis-2/5">
                    <label htmlFor="email">Email-id :</label>
                  </div>
                  <div className="flex-grow">
                    <input
                      id={"email"}
                      {...register("email")}
                      type="email"
                      required
                      name="email"
                      autoFocus
                      className="userFormInput"
                      placeholder="Email-id"
                    />
                    <p className="absolute text-red-primary text-sm">
                      {emailError}
                    </p>
                  </div>
                </div>
                <div className="flex ">
                  <div className="basis-2/5">
                    <label htmlFor="password">Password :</label>
                  </div>
                  <div className="flex-grow">
                    <input
                      id={"password"}
                      {...register("password")}
                      name="password"
                      type="password"
                      required
                      className="userFormInput"
                      placeholder="password"
                    />
                    <p className="absolute text-red-primary text-sm">
                      {passwordError}
                    </p>
                  </div>
                </div>
              </div>
              {/* input section end here */}

              {/*login button */}
              <div className="flex justify-center py-4">
                <button className="button blue-effect px-36">login</button>
              </div>
              {/* login button end */}
            </form>

            {/* other text here */}
            <div>
              <p className="text-sm">
                Don't have account?{" "}
                <span
                  onClick={() => change()}
                  className="hover:underline cursor-pointer text-blue-primary"
                >
                  Create an account.
                </span>
              </p>
            </div>

            {/* other text end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
