import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const ShopBasketHome = () => {
    const [nav, setNav] = useState(false);
    return (
        <div
            onClick={() => setNav(!nav)}
            className=" fixed z-50 cursor-pointer top-[40%] right-0 bg-[#cc3333] h-28 w-28 rounded-l-lg"
        >
            <div className=" px-5 py-6 ">
                <span className="flex  text-white">
                    <HiShoppingCart size={18} className="mt-1" />0 item
                </span>
                <div className="py-2">
                    <span className="py-2 px-1 rounded-md text-[#cc3333] bg-white">
                        0.00 DH
                    </span>
                </div>
                
            </div>

            <div
                className={
                    nav
                        ? "bg-gray-100 fixed h-screen z-60 top-0 right-0 w-full lg:w-[350px] duration-300"
                        : "bg-gray-100 fixed  h-screen z-60 top-0 right-[-100%] w-[350px] duration-300"
                }
            >
                <div className="px-4">
                    <div className="bg-white flex px-4 mb-4 mt-4  p-2 relative ">
                        <h1 className=" text-xl  text-[#2a435d]">jcris</h1>
                        <AiOutlineClose
                            onClick={() => setNav(!nav)}
                            size={25}
                            className="text-[#cc3333] absolute right-0"
                        />
                    </div>
                    <div className="bg-white px-4 h-[400px]   ">
                        <div className="flex justify-center items-center pt-20">
                            <h2>No item added</h2>
                        </div>
                    </div>
                    <div className="bg-white mb-4 mt-4">
                        <div className=" mt-2 mb-2 flex justify-between text-lg px-2 ">
                            <h3>Subtotal </h3>
                            <h3>0.00DH</h3>
                        </div>
                        <div className=" mt-2 mb-2 flex justify-between text-lg px-2">
                            <h3>Cgst+sgst(5%+5%)</h3>
                            <h3>0.00DH</h3>
                        </div>
                        <div className=" mt-2 mb-2 flex justify-between text-lg px-2">
                            <h3>Delivery charge </h3>
                            <h3>0.00DH</h3>
                        </div>
                        <div className=" mt-2 mb-2 flex justify-between text-lg px-2">
                            <h3>Total</h3>
                            <h3>0.00DH</h3>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-white bg-[#cc3333] p-4 mb-4 px-16 text-xl rounded-md">
                                GO TO CHECKOUT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopBasketHome;
