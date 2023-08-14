import React from "react";

const ResetPasswordPage = () => {
  return (
    <div className="bg-[#d4d4d8] h-screen">
      <div className="max-w-[1320px] m-auto  px-4 flex flex-col">
        <div className="px-2  justify-between w-[50%] ">
          <div className="relative max-w-[130px] h-[50px] ml-4 md:mt-20 mt-0">
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
              Reset Password
            </h3>
            <div className=" row-auto">
              <div className="flex flex-col">
                <div className=" mb-4">
                  <input
                    className="rounded focus:outline-none text-gray-800 px-4 py-2 w-full"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex items-center">
                  <div className=" mr-2">
                    <button className=" cursor-pointer py-2 px-4 rounded-sm text-white bg-[#0dd19d] hover:bg-[#0e735b]">
                      RESET PASSWORD
                    </button>
                  </div>
                  <div className=" justify-end">
                    <a href="/login">
                      <button className="cursor-pointer py-2 px-4 rounded-sm text-white bg-[#f64e60] hover:bg-[#96353f]">
                        SIGN IN
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex relative ">
            <img
              className=" w-[90%] ml-20"
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

export default ResetPasswordPage;
