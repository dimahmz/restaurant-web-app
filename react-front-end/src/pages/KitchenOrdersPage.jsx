import React from "react";
import NavBar from "../PosComponents/NavBar";
import DropDownTow from "../PosComponents/DropDownTow";
import { BiSearch } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import data from "./ordersdata.json";
import Footer from "../PosComponents/Footer";
const KitchenOrdersPage = () => {
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
                                        <span className="mr-1 text-sm font-bold p-2 text-[#121053]">
                                            KITCHEN
                                        </span>
                                    </li>
                                    <li className="flex justify-center">
                                        <span className=" uppercase font-bold text-lg py-1 text-[#121053]">
                                            dashboard
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    className="px-1 ml-3"
                                    href="/dashboard/kitchen/online"
                                >
                                    <button
                                        className=" w-[245.6px] uppercase
                                     text-white bg-[#158df7]
                                      px-3 py-[0.375rem] hover:bg-[#3c79ae] duration-300 rounded-sm"
                                    >
                                        onlin orders
                                    </button>
                                </a>
                                <a className="px-1 " href="/dashboard/kitchen">
                                    <button
                                        className=" w-[245.6px] uppercase
                                     text-white bg-[#f64e60]
                                      px-3 py-[0.375rem] hover:bg-[#dd4e5d] duration-300 rounded-sm"
                                    >
                                        refresh
                                    </button>
                                </a>
                                <div className="mr-1">
                                    <DropDownTow />
                                </div>
                                <div className="">
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

                        <div className="mt-1 grid grid-cols-3 gap-2 h-[520px] overflow-scroll mb-4">
                            {data.orders.map((order, index) => (
                                <div
                                    className="bg-white  mt-6 p-4"
                                    key={order.order_id}
                                >
                                    {" "}
                                    <div className="flex justify-end">
                                        <button className=" mr-2 uppercase text-xs px-4 py-2 text-white bg-[#0dd19d] hover:bg-[#41b797] duration-300 rounded-sm">
                                            order ready
                                        </button>
                                        <button className=" uppercase text-xs px-4 py-2 text-white bg-[#158df7] hover:bg-[#4489c5] duration-300 rounded-sm">
                                            accept order
                                        </button>
                                    </div>
                                    <div className="my-[10px]">
                                        <div className="text-white bg-[#f64e60] border-[#f41d34] py-[10px] px-4 flex justify-between">
                                            <span className="font-bold text-[1rem]">
                                                Order Token :{order.order_id}
                                            </span>
                                            <span className="font-bold text-[1rem]">
                                                Ordered At :
                                                {order.customer_name}
                                            </span>
                                        </div>
                                        <table className="w-full">
                                            <thead className="border">
                                                <tr>
                                                    <th className=" py-2  border-r-2 font-semibold text-sm text-center">
                                                        S/L
                                                    </th>
                                                    <th className=" py-2  border-r-2 font-semibold  text-sm text-center">
                                                        Food
                                                    </th>
                                                    <th className=" py-2  border-r-2 font-semibold  text-sm text-center">
                                                        Additional Info
                                                    </th>
                                                    <th className=" py-2  border-r-2 font-semibold  text-sm text-center">
                                                        QTY
                                                    </th>
                                                    <th className=" py-2  border-r-2  flex justify-center  text-sm text-center">
                                                        <MdDone size={20} />
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-[#f0f7fb]">
                                                {order.items.map(
                                                    (item, itemIndex) => (
                                                        <tr
                                                            className="border font-semibold text-sm "
                                                            key={item.item_id}
                                                        >
                                                            <th className=" py-2  border-r-2 font-semibold  text-sm text-center">
                                                                {itemIndex + 1}
                                                            </th>
                                                            <th className=" py-2  border-r-2 font-semibold  text-sm text-center">
                                                                {item.item_name}
                                                            </th>
                                                            <th className=" py-2  border-r-2 font-semibold  text-sm text-center">
                                                                {
                                                                    item.additional_info
                                                                }
                                                            </th>
                                                            <th className=" py-2  border-r-2 font-semibold  text-sm text-center">
                                                                1
                                                            </th>
                                                            <th className=" py-2  border-r-2 font-semibold  text-sm text-center">
                                                                <input
                                                                    className="border-[#cfd5db]  border-solid bg-white cursor-pointer "
                                                                    type="checkbox"
                                                                />
                                                            </th>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default KitchenOrdersPage;
