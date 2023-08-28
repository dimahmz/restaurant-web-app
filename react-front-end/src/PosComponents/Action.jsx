import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
const Action = ({ isOpen, toggleOptions }) => {
    return (
        <div className="inline-block relative">
            <button
                onClick={toggleOptions}
                className=" font-bold text-sm  text-black  px-4 py-2 rounded"
            >
                ...
            </button>
            {isOpen && (
                <ul className="absolute right-0 z-50 mt-2 px-4 py-2 bg-white text-sm border border-gray-300 rounded shadow">
                    <li className="px-4 py-2 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300">
                        <GrEdit size={16} className="mr-1" />
                        Edit
                    </li>
                    <li className="px-4 py-2 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300">
                        <AiFillDelete size={18} className="mr-1" />
                        Delete
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Action;
