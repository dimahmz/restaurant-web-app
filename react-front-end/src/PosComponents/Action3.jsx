import React from "react";
import { GrEdit } from "react-icons/gr";

import { AiOutlineCheck } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";

const Action3 = ({ isOpen, toggleOptions }) => {
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
                        <li className="px-4 py-1 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300">
                            <GrFormView size={15} className="mr-1" />
                            View
                        </li>
                        <li className="px-4 py-1 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300">
                            <GrEdit size={15} className="mr-1" />
                            Edit
                        </li>

                        <li className="px-4 py-1 font-bold text-[#212529] flex cursor-pointer hover:bg-blue-100 duration-300">
                            <AiOutlineCheck size={15} className="mr-1" />
                            Active
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Action3;
