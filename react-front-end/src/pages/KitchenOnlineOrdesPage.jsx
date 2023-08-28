import React from "react";
import NavBar from "../PosComponents/NavBar";
import Footer from "../PosComponents/Footer";
import { BiSearch } from "react-icons/bi";
import DropDownTow from "../PosComponents/DropDownTow";
const KitchenOnlineOrdesPage = () => {
    return (
        <div className="bg-gray-200 h-screen">
            <NavBar />
            <div>
                <div className="mt-[15px]">
                    <div className="pl-2">
                        <div className="bg-white">
                            <div className="px-[15px] py-[10px] flex ">
                                <ul className="flex px-1 ">
                                    <li className="flex justify-center">
                                        <img
                                            className="h-[40px] w-[40px]"
                                            src="https://khadyo.softtechdemo.com/assets/img/cooking.png"
                                            alt="kitchen"
                                        />
                                    </li>

                                    <li className="flex justify-center">
                                        <span className=" uppercase mx-4 font-bold text-lg py-1 text-[#121053]">
                                            ONLINE ORDERS
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    className="px-1 ml-3"
                                    href="/dashboard/kitchen"
                                >
                                    <button
                                        className=" w-[245.6px] uppercase
                                     text-white bg-[#deac0a]
                                      px-3 py-[0.375rem] hover:bg-[#dbba4d] duration-300 rounded-sm"
                                    >
                                        pos orders
                                    </button>
                                </a>
                                <a
                                    className="px-1 "
                                    href="/dashboard/kitchen/online"
                                >
                                    <button
                                        className=" w-[245.6px] uppercase
                                     text-white bg-[#f64e60]
                                      px-3 py-[0.375rem] hover:bg-[#dd4e5d] duration-300 rounded-sm"
                                    >
                                        refresh
                                    </button>
                                </a>
                                <div className="px-1">
                                    <DropDownTow />
                                </div>
                                <div className="px-1">
                                    <DropDownTow />
                                </div>
                                <div className="flex px-1  ">
                                    <input
                                        className="bg-[#f0f7fb] text-sm px-2 py-1 focus:outline-none"
                                        type="text"
                                        placeholder="Search by token.."
                                    />

                                    <button className="bg-[#f64e60] p-3">
                                        <BiSearch className="text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KitchenOnlineOrdesPage;
