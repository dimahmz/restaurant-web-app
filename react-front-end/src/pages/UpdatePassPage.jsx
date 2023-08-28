import React from "react";
import NavBar from "../PosComponents/NavBar";
import Footer from "../PosComponents/Footer";

const UpdatePassPage = () => {
    return (
        <div className="bg-gray-200 h-screen">
            <NavBar />
            <div className="mt-[10px] mb-[10px]">
                <div className="max-w-[1320px] m-auto">
                    <div className="bg-white">
                        <div className="p-4 text-[#121053] font-extrabold  text-lg shadow-lg">
                            Update Password
                        </div>
                        <div className="h-[545px]  flex justify-center items-center">
                            <div className="border-2 p-12 w-[850px]">
                                <div className="mb-4">
                                    <label>Password</label>
                                    <input
                                        className="w-full p-2 rounded-sm mt-2 border-2 focus:outline-none"
                                        type="Password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label>Confirm Password</label>
                                    <input
                                        className="w-full p-2 rounded-sm mt-2 border-2 focus:outline-none"
                                        type="Password"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                                <button className=" uppercase text-white text-xs bg-[#f64e60] px-5 py-2 hover:bg-[#e1505e] duration-300">
                                    update password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UpdatePassPage;
