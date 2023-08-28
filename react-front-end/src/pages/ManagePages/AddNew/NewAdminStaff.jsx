import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import UploadButton from "../../../PosComponents/UploadImage";
const NewAdminStaff = ({ onClose }) => {
    const handleFormClose = () => {
        onClose();
    };
    return (
        <div className="w-[1140px] bg-white rounded  ">
            <div className="p-4 flex justify-between border-b-2">
                <div className="mt-6 mb-4 text-[0.9rem] font-bold">
                    Add new admin / staff
                </div>
                <button onClick={handleFormClose}>
                    <AiOutlineClose
                        className=" hover:text-gray-700 duration-300"
                        size={20}
                    />
                </button>
            </div>
            <div className="p-4">
                <div className=" flex flex-col">
                    <label className="mb-2">
                        User Type<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. Burger,Chicken"
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Name<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. Mr.John"
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Email<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. staff@exmple.com"
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Phone number<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. 01xxx xxx xxx"
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Password<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. Password"
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Confirm Password<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. Confirm password"
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Select a permission group
                        <span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. Burger,Chicken"
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Image
                        <span className="text-blue-300">
                            (300x300 Preferable)
                        </span>
                    </label>
                    <UploadButton />
                </div>
                <div className="mt-4 flex text-white gap-2 text-sm">
                    <button className=" flex-1 bg-[#0dd19d] px-3 py-1 rounded-sm hover:bg-[#40b495] duration-300 ">
                        SAVE
                    </button>
                    <button
                        onClick={handleFormClose}
                        className="flex-1 bg-[#f64e60]  rounded-sm hover:bg-[#dc4e5c] duration-300 "
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewAdminStaff;
