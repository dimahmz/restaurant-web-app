import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import CheckboxWithLabel from "./CheckboxWithLabel";
const Products = () => {
    return (
        <div className="w-[58.3333333333%] ">
            <div className="flex ">
                <div className="px-1 flex justify-center w-[522.65px] ">
                    <button className=" px-3 py-2 text-[12px] hover:bg-[#f64e60] hover:text-white duration-300 uppercase bg-white w-full h-full text-[#f64e60] border border-[#f64e60]">
                        Online orders
                    </button>
                </div>
                <div className="flex justify-center text-[12px] text-white w-[373.33px] ">
                    <div className="pr-1 w-[50%]">
                        <button className="px-3 py-2 w-full rounded-sm uppercase  bg-[#0dd19d]">
                            settled
                        </button>
                    </div>
                    <div className="w-[50%]">
                        <button className="px-3 py-2 w-full rounded-sm uppercase  bg-[#f64e60]">
                            submitted
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-[10px] flex flex-row">
                <div className="w-[216px] h-[563.2px] overflow-scroll px-1">
                    <ul className="text-white text-sm  ">
                        <li className="mb-[10px] flex justify-center">
                            {" "}
                            <button className="w-full bg-[#09c2de] pr-[4.7em] pl-[1.4em] py-[0.8em] uppercase">
                                DINE IN{" "}
                            </button>
                        </li>
                        <li className="mb-[10px] flex justify-center">
                            <button className="w-full bg-[#09c2de] pr-[4.7em] pl-[1.4em] py-[0.8em] uppercase">
                                xxxxxxxxxxxxx{" "}
                            </button>
                        </li>
                        <li className="mb-[10px] flex justify-center">
                            <button className="w-full bg-[#09c2de] pr-[4.7em] pl-[1.4em] py-[0.8em] uppercase">
                                FRNG FREE{" "}
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-[#09c2de] flex justify-center items-center uppercase">
                                <span className=" pl-[1.4em] py-[0.8em] text-center pr-2 ">
                                    TESTING USER
                                </span>
                                <div className=" bg-black/20 h-full py-4 px-2 ml-10 ">
                                    <AiOutlineRight
                                        size={20}
                                        className="text-white  "
                                    />
                                </div>
                            </button>
                        </li>
                        <li className="mb-[30px] flex justify-center">
                            <button className=" w-full bg-[#09c2de] pr-[4.7em] pl-[1.4em] py-[0.8em] uppercase">
                                GOOD
                            </button>
                        </li>
                    </ul>
                    <ul className="text-[16px]">
                        <li className="mb-[10px]">
                            <button className="w-full  border-[#f64e60] px-3 py-[0.375rem] bg-[#f64e60] duration-300 text-white border font-bold  ">
                                SEASONAL FRUIT JUICES
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60] px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                DRY FRUIT MILKSHAKES
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60] px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                SEASONAL MILKSHAKES
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60] px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                FRUIT CREAMM
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60] px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                FRIES
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60]  px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                PIZZA
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white  border-[#f64e60] px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                BURGER
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60]  px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                MILK SHAKES GROUP
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white  border-[#f64e60] px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                COFFEE
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60]  px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                MOJITO
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60]  px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                TACOS
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60] px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                SHARMA
                            </button>
                        </li>
                        <li className="mb-[10px]">
                            <button className="w-full bg-white border-[#f64e60] px-3 py-[0.375rem] hover:bg-[#f64e60] duration-300 hover:text-white border font-bold text-black ">
                                PUNJABI
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex-row flex">
                    <div className="w-[389.667px] h-[563.2px] px-1 overflow-scroll">
                        <div>
                            <div className="grid grid-cols-3 gap-x-6 ">
                                <div className="  mb-[10px] px-1  w-[136.55px] min-h-[190.55px] cursor-pointer ">
                                    <div className="bg-white shadow-lg h-full">
                                        <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                                            <img
                                                className="transition duration-300 ease-in-out hover:scale-110"
                                                src="https://khadyo.softtechdemo.com/public//images/food_item/1684657757-screenshot-2023-03-06-105253png.png"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <div className="p-[10px] text-sm flex  justify-center items-center text-center font-bold ">
                                                ARABIC
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" row-auto  mb-[10px] px-1  w-[136.55px] min-h-[190.55px] cursor-pointer ">
                                    <div className="bg-white shadow-lg h-full">
                                        <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                                            <img
                                                className="transition duration-300 ease-in-out hover:scale-110"
                                                src="https://khadyo.softtechdemo.com/public//images/food_item/1689458718-323409769-654366893131782-3517675748538205122-njpg.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div>
                                            <div className=" p-[10px] text-sm  flex  justify-center items-center text-center font-bold ">
                                                <span>ARABIC</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="  mb-[10px] px-1  w-[136.55px] min-h-[190.55px] cursor-pointer ">
                                    <div className="bg-white shadow-lg h-full">
                                        <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                                            <img
                                                className="transition duration-300 ease-in-out hover:scale-110"
                                                src="https://khadyo.softtechdemo.com/public//images/food_item/1674842211-tehbotoljpg.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-[10px] text-sm flex justify-center items-center text-center font-bold ">
                                            ARABIC
                                        </div>
                                    </div>
                                </div>
                                <div className="  mb-[10px] px-1  w-[136.55px] min-h-[190.55px] cursor-pointer ">
                                    <div className="bg-white shadow-lg h-full ">
                                        <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                                            <img
                                                className="transition duration-300 ease-in-out hover:scale-110"
                                                src="https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="p-[10px] text-sm flex flex-grow justify-center items-center text-center font-bold ">
                                            ARABIC
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" pl-1">
                        <div className=" w-[280.333px] h-[563.2px] bg-white overflow-scroll">
                            <div className="p-2">
                                <div>
                                    <div className="text-white bg-[#f64e60] px-4 py-2 flex justify-center font-bold border-2 ">
                                        Variations
                                    </div>
                                    <table className="table-auto w-full">
                                        <thead className="border">
                                            <tr>
                                                <td className="pl-2">Name</td>
                                                <td className="pl-2 border-l-2">
                                                    Price
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-[#f4f9fc] border-2">
                                            <tr>
                                                <td className="p-4 border-r-2">
                                                    <CheckboxWithLabel label="large" />
                                                </td>
                                                <td className="p-4">5.00DH</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
