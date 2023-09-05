import React from "react";
import DropDownTow from "./DropDownTow";
import CountDiscountTow from "./CountDiscountTow";

const Branch = () => {
    const Branch = ["branch1", "branch2", "branch3"];
    const table = ["table1", "table2", "table3"];
    return (
        <div className="px-2">
            <div className="w-[152px] h-[611.2px]  ">
                <div className="h-[70%]">
                    <ul>
                        <li className="mb-4">
                            <DropDownTow options={Branch} title="Branch..." />
                        </li>
                        <li className="mb-4 border-2 rounded  border-gray-300">
                            <input
                                type="text"
                                placeholder="Serch here"
                                className="py-2 w-full px-1 border-solid text-sm "
                            />
                        </li>
                        <li className="mb-4">
                            <DropDownTow options={table} title="Table..." />
                        </li>
                        <li className="mb-4">
                            {" "}
                            <CountDiscountTow />
                        </li>
                    </ul>
                </div>
                <div className=" mt-24 text-sm font-bold">
                    <button className="  uppercase w-full mb-2 bg-white text-[#f64e60] px-4 py-2 border border-[#f64e60] hover:bg-[#f64e60] hover:text-white duration-300">
                        Print BIll
                    </button>
                    <button className="uppercase w-full px-4 py-2  text-white bg-[#f64e60]">
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Branch;
