import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ViewVariantion = ({ name, variations, onClose }) => {
    return (
        <div className="w-[800px] bg-white rounded">
            <div className="p-4 flex justify-between border-b-2">
                <div className="mt-6 mb-4 text-[0.9rem] font-bold">title</div>
                <button>
                    <AiOutlineClose
                        onClick={onClose}
                        className="hover:text-gray-700 duration-300"
                        size={20}
                    />
                </button>
            </div>
            <div className="p-4">
                <div className="flex justify-end">
                    <button className="px-4 rounded-sm py-2 text-white bg-[#f64e60]">
                        Edit
                    </button>
                </div>
                <div className="mt-4">
                    <table className=" table w-full">
                        <thead>
                            <tr className="border-2 font-bold ">
                                <td className="border-r-2 p-2 text-center">
                                    S/L
                                </td>
                                <td className="border-r-2 p-2 text-center ">
                                    Variation name
                                </td>
                                <td className="border-r-2 p-2  text-center">
                                    Price
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ViewVariantion;
