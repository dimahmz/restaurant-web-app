import React from "react";
import { AiTwotoneHome, AiOutlinePlus } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
const DashboardPage = () => {
  return (
    <div className=" bg-gray-200 h-screen">
      <header className="bg-white h-[50px] ">
        <div className="max-w-[1320px] m-auto px-4 flex justify-between">
          <img
            className="h-[50px] px-4"
            src="https://khadyo.softtechdemo.com/public/images/logo/1685847152-jcris-system-logopng.png"
            alt=""
          />

          <div className="flex">
            <AiTwotoneHome size={25} />
            <div>
              <img
                src="https://khadyo.softtechdemo.com/public//images/flags/default.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
      <section className=" mt-4 mb-4">
        <div className="max-w-[1320px] m-auto px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <a href="/dashboard/pos">
              {" "}
              <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                <div>
                  <div>
                    <img
                      src="https://khadyo.softtechdemo.com/assets/img/product-img-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" p-8 relative">
                    <div className="flex text-purple-700 font-bold text-sm">
                      <HiShoppingCart size={20} /> <span>POS</span>
                    </div>
                    <div className="text-3xl font-bold py-2">
                      Point Of Sales
                    </div>
                    <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                      <AiOutlinePlus size={40} className="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/orders">
              {" "}
              <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                <div>
                  <div>
                    <img
                      src="https://khadyo.softtechdemo.com/assets/img/product-img-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" p-8 relative">
                    <div className="flex text-purple-700 font-bold text-sm">
                      <HiShoppingCart size={20} /> <span>ORDERS</span>
                    </div>
                    <div className="text-3xl font-bold py-2">
                      Orders Histories
                    </div>
                    <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                      <AiOutlinePlus size={40} className="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="/dashboard/customers">
              {" "}
              <div className="mb-4 px-2 bg-white shadow-lg cursor-pointer">
                <div>
                  <div>
                    <img
                      src="https://khadyo.softtechdemo.com/assets/img/product-img-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className=" p-8 relative">
                    <div className="flex text-purple-700 font-bold text-sm">
                      <CgProfile size={20} /> <span>CUSTOMERS</span>
                    </div>
                    <div className="text-3xl font-bold py-2">Customers</div>
                    <div className="absolute bg-white  w-[70px] h-[70px] rounded-full right-[10%] top-[-35%] shadow-lg flex justify-center items-center hover:bg-[#cc3333] hover:text-white duration-300">
                      <AiOutlinePlus size={40} className="" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
