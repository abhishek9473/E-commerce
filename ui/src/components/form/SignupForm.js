import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { userSignup } from "@/services/api-services";
import {
  setJwtInCookie,
  setNameInCookie,
  setValidUserInCookie,
} from "@/services/cookie-handler";
import { useRouter } from "next/router";

function SignupForm({ change }) {
  const router = useRouter();
  const [emailError, setEmailError] = useState("");
  const { register, handleSubmit } = useForm();

  //   post api call
  const signupHandler = (data) => {
    userSignup(data)
      .then((responce) => {
        if (responce.status) {
          sucessHandler(responce.entity);
        } else if (!responce.status) {
          errorHandler(responce.entity);
        }
      })
      .catch((error) => console.log("add user error", error));
  };

  const sucessHandler = (responceData) => {
    setNameInCookie(responceData.name);
    setJwtInCookie(responceData.token);
    setValidUserInCookie(true);
    router.reload();
  };

  const errorHandler = (responceData) => {
    switch (responceData) {
      case "email already exist":
        setEmailError("this email alreay exists");
        break;
      default:
        console.log(responceData);
    }
  };

  const formHeader = "Create Account";
  return (
    <>
      <div className="h-96 w-[30rem] border">
        <div className="h-full bg-blue-light">
          <div className="bg-blue-dark text-center text-2xl font-semibold">
            {formHeader}
          </div>
          <div className="bg-blue-light px-10">
            <form onSubmit={handleSubmit(signupHandler)}>
              {/* input section start */}
              <div className="flex flex-col py-2 gap-8">
                <div className="flex ">
                  <div className="basis-2/5">
                    <label htmlFor="userName">Name :</label>
                  </div>
                  <div className="flex-grow">
                    <input
                      id={"userName"}
                      {...register("userName")}
                      type="text"
                      required
                      name="userName"
                      autoFocus
                      className="userFormInput"
                      placeholder="Your name"
                    />
                  </div>
                </div>

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
                    <label htmlFor="number">Number :</label>
                  </div>
                  <div className="flex-grow">
                    <input
                      id={"number"}
                      {...register("number")}
                      type="text"
                      required
                      name="number"
                      className="userFormInput"
                      placeholder="number"
                    />
                  </div>
                </div>

                <div className="flex ">
                  <div className="basis-2/5">Password : </div>
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
                  </div>
                </div>
              </div>
              {/* input section end here */}

              {/*login button */}
              <div className="flex justify-center py-4">
                <button className="button blue-effect px-36">Signup</button>
              </div>
              {/* login button end */}
            </form>

            {/* other text here */}
            <div>
              <p className="text-sm">
                Already have an account?{" "}
                <span
                  onClick={() => change()}
                  className="hover:underline cursor-pointer text-blue-primary"
                >
                  Login
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

export default SignupForm;
