import React from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { RiImageEditFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

const Action2 = ({ isOpen, toggleOptions, onVariationsClick }) => {
    return (
        <div className="relative">
            <button
                onClick={toggleOptions}
                className="font-bold text-sm text-[#212529] px-4 py-2 rounded"
            >
                ...
            </button>
            {isOpen && (
                <div className="bg-white px-4 py-2 absolute z-50 border border-gray-300 rounded shadow">
                    <ul className="text-sm">
                        <li
                            onClick={onVariationsClick}
                            className="px-4 py-1 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300"
                        >
                            <AiOutlinePlus size={15} className="mr-1" />
                            Variations {/* Added 'Add Variations' option */}
                        </li>
                        <li className="px-4 py-1 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300">
                            <GrEdit size={15} className="mr-1" />
                            Edit
                        </li>
                        <li className="px-4 py-1 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300">
                            <RiImageEditFill size={15} className="mr-1" />
                            {/* Change image icon */}
                            Image
                        </li>
                        <li className="px-4 py-1 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300">
                            <AiFillDelete size={15} className="mr-1" />
                            Delete
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Action2;
