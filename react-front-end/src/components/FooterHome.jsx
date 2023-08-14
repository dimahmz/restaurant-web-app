import React from "react";
import DropDown from "../components/DropDown";
const FooterHome = () => {
  const languageList = ["English", "Arabic", "French"];
  const coinList = ["DH", "Euro", "US Dollar"];

  return (
    <div id="language" className="bg-white relative pb-10 pt-32 ">
      <div className="max-w-[1140px] px-4 m-auto">
        <div className=" flex pb-4 ">
          <div className=" px-2 w-[50%] ">
            <h1 className=" font-bold lg:text-4xl text-xl text-[#2a435d]">
              Set Your <span className="text-[#cc3333]"> Local Language</span>
            </h1>
          </div>
          <div>
            <DropDown items={languageList} defaultValue="English" />
          </div>
        </div>
        <div className=" flex  pb-11 ">
          <div className="px-2 w-[50%] ">
            <h1 className=" font-bold lg:text-4xl text-xl text-[#2a435d]">
              Set your <span className="text-[#5db535] "> local currency</span>
            </h1>
          </div>
          <div>
            <DropDown items={coinList} defaultValue="DH" />
          </div>
        </div>
        <div className="border-dotted border-[1px] border-gray-500 mt-4 mb-4 "></div>
      </div>
      <div className="max-w-[1140px] px-4 m-auto">
        <div className="flex flex-col justify-center items-center px-2">
          <div>
            <img
              className="w-[150px]"
              src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
              alt=""
            />
          </div>
          <div>
            <ul className=" flex  text-[#2a435d] px-4  text-sm">
              <a href="#home">
                <li className="p-4 font-bold hover:text-[#cc3333]">HOME</li>
              </a>
              <a href="#popular">
                <li className="p-4 font-bold hover:text-[#cc3333]">POPULAR</li>
              </a>
              <a href="#special">
                <li className="p-4 font-bold hover:text-[#cc3333]">SPECIAL</li>
              </a>
              <a href="#language">
                <li className="p-4 font-bold hover:text-[#cc3333]">LANGUAGE</li>
              </a>
            </ul>
          </div>
          <div className=" pb-4">© Copyright</div>
        </div>
      </div>
      <img
        className="hidden lg:flex  absolute left-0 top-[49%]"
        src="https://khadyo.softtechdemo.com/website/images/shapes/fshape1.png"
        alt=""
      />
      <img
        className=" hidden lg:flex  absolute right-0 top-[33%]"
        src="https://khadyo.softtechdemo.com/website/images/shapes/41.png"
        alt=""
      />
      <img
        className="hidden lg:flex  absolute left-10 top-[20%]"
        src="https://khadyo.softtechdemo.com/website/images/shapes/capsicam.png"
        alt=""
      />
      <img
        className=" hidden lg:flex  absolute left-[25%] top-[70%]"
        src="https://khadyo.softtechdemo.com/website/images/shapes/scatter.png"
        alt=""
      />
      <img
        className=" hidden lg:flex absolute top-[80%] right-[20%]"
        src="https://khadyo.softtechdemo.com/website/images/shapes/layer.png"
        alt=""
      />
      <img
        className=" hidden lg:flex  absolute top-[20%] right-[8%]"
        src="https://khadyo.softtechdemo.com/website/images/shapes/sauce.png"
        alt=""
      />
    </div>
  );
};

export default FooterHome;
