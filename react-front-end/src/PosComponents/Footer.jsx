import React from "react";
import Clock from "./Clock";

const Footer = () => {
  return (
    <div className="pb-1">
      <div className="bg-white h-[50px] w-full flex ">
        <div className="w-[16.6666667%] px-3">
          <img
            className="h-[50px]"
            src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
            alt=""
          />
        </div>
        <div className="w-[58.33333%] flex justify-center items-center text-black">
          © copyright
        </div>
        <div className="px-4">
          {" "}
          <Clock />
        </div>
      </div>
    </div>
  );
};

export default Footer;
