import React from "react";

const SignUpPage = () => {
  return (
    <div className="bg-[#d4d4d8] h-screen">
      <div className="max-w-[1320px] m-auto px-4 flex flex-col">
        <div className="px-2  justify-between w-[50%] ">
          <div className="relative max-w-[130px] h-[50px] ml-4 mt-0 md:mt-20">
            <span>
              <a href="/">
                <img
                  className="w-[90px]"
                  src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
                  alt=""
                />
              </a>
            </span>
          </div>
        </div>
        <div className="flex">
          <div className=" mt-12 md:w-[60%] lg:w-[38.333%]  w-full px-4">
            <h3 className="font-bold text-3xl mb-4 text-[#2a435d]  mt-0 ">
              Sign Up
            </h3>
            <div className=" row-auto">
              <div className="flex flex-col">
                <div className=" mb-4">
                  <input
                    className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                    type="name"
                    placeholder="Name"
                  />
                </div>
                <div className=" mb-4">
                  <input
                    className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className=" mb-4">
                  <input
                    className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                    type="telephone"
                    placeholder="ex:+16815223402"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                    type="confirm password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div>
                  <a href="/sign-up">
                    <button className="cursor-pointer py-2 px-4 rounded-sm text-white bg-[#0dd19d] hover:bg-[#0e735b]">
                      SIGN UP
                    </button>
                  </a>
                </div>
                <div className="mb-4 mt-4">
                  <span>
                    Already have an account?
                    <a
                      className=" cursor-pointer hover:text-[#96353f]"
                      href="/login"
                    >
                      <span className=" cursor-pointer hover:text-[#96353f]">
                        {" "}
                        Sing In
                      </span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex relative ">
            <img
              className="w-[90%] ml-20"
              src="https://khadyo.softtechdemo.com/assets/img/verifiy-img.png"
              alt=""
            />
            <img
              className="absolute top-0 left-28"
              src="https://khadyo.softtechdemo.com/assets/img/obj-1.png"
              alt=""
            />
            <img
              className="absolute left-[50%] top-0"
              src="https://khadyo.softtechdemo.com/assets/img/obj-8.png"
              alt=""
            />
            <img
              className="absolute top-[50%] left-[100px]"
              src="https://khadyo.softtechdemo.com/assets/img/obj-9.png"
              alt=""
            />
            <img
              className="absolute bottom-[100px] left-[50%]"
              src="https://khadyo.softtechdemo.com/assets/img/obj-7.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
