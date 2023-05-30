import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { adminLogin } from "@/services/api-services";
import { setJwtInCookie, setNameInCookie, setValidUserInCookie } from "@/services/cookie-handler";

function Login() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  // send data to api => login and get Token
  const loginHandler = (formDetail) => {
    adminLogin(formDetail)
      .then((responce) => {
        // console.log("aaaa",responce)
        if (responce.status == true) {
          setJwtInCookie(responce.entity.token);
          setNameInCookie(responce.entity.name);
          setValidUserInCookie(true)
          router.push("/");
        } else {
          console.log(responce.entity);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-white">
        <div className="md:w-96 w-72 md:h-96 h-72 border border-gray-400 shadow-2xl">
          <div className=" bg-slate-200 border-b-gray-400 border text-center font-semibold text-2xl h-16  flex justify-center items-center">
            <span>Admin Login</span>
          </div>
          <div className="px-4 py-3">
            <form onSubmit={handleSubmit(loginHandler)}>
              <div className="flex flex-col gap-6">
                <input
                  id={"email"}
                  {...register("email")}
                  type="text"
                  name="email"
                  className="userFormInput"
                  placeholder="Email-id"
                />
                <input
                  id={"password"}
                  {...register("password")}
                  name="password"
                  type="password"
                  className="userFormInput"
                  placeholder="password"
                />
              </div>
              <div className="mt-6 flex flex-col justify-center">
                <button type="submit" className="login-button button-hover">
                  login
                </button>
              </div>
            </form>

            <div className="text-center">
              <a>
                <span className="text-center text-sm hover:text-blue-primary hover:underline cursor-pointer">
                  forgot password?
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
