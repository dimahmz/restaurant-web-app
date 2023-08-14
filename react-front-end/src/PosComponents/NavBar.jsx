import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
const NavBar = () => {
  return (
    <div className=" sticky h-[50px] bg-white flex justify-between">
      <div className="px-4">
        <img
          className="h-[50px]"
          src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
          alt=""
        />
      </div>
      <div className="flex px-4">
        <div className="p-2 mr-4">
          <AiTwotoneHome size={25} className="text-[#cc3333]" />
        </div>
        <div className="mr-4 flex p-2">
          <img
            className=" h-8 rounded-full"
            src="https://khadyo.softtechdemo.com/public//images/flags/default.png"
            alt=""
          />
        </div>
        <div className="p-2">
          <div className=" w-[10px] h-[10px] rounded-full bg-purple-950 text-white p-4 flex justify-center items-center ">
            DH
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
