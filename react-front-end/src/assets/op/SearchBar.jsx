import React from "react";
import { BiSearch } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import DropDownTow from "../PosComponents/DropDownTow";

const SearchBar = ({
    searchQuery,
    setSearchQuery,
    fromDate,
    toDate,
    selectedBranch,
    handleSearch,
    handleFromDateChange,
    handleToDateChange,
    handleFilter,
    handleBranchChange,
}) => {
    const br = ["branch 1", "branch 2"];
    return (
        <div className="p-[15px] shadow-lg">
            <div className="mb-[15px]">
                <h1 className="text-lg font-bold uppercase text-[#121053]">
                    Order history
                </h1>
            </div>
            <div className="flex justify-between">
                <div className="flex space-x-4 items-center">
                    <button className="bg-[#f64e60] p-2" onClick={handleSearch}>
                        <BiSearch size={15} className="text-white" />
                    </button>
                    <input
                        className="bg-[#f0f7fb] px-2 text-[#49505] text-xs w-[304px] focus:outline-none"
                        type="text"
                        placeholder="Search.."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="container">
                        <DatePicker
                            selected={fromDate}
                            onChange={handleFromDateChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholderText="From date"
                        />
                    </div>
                    <AiOutlineArrowRight size={28} />
                    <div className="container">
                        <DatePicker
                            selected={toDate}
                            onChange={handleToDateChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholderText="To date"
                        />
                    </div>
                    <button
                        className="text-xs rounded-sm uppercase px-2 py-3 text-[#f5364a] bg-[#fde0e3] duration-300 hover:text-white hover:bg-[#f5364a]"
                        onClick={handleFilter}
                    >
                        Filter
                    </button>
                </div>
                <div>
                    <ul className="flex">
                        <li className="mr-[10px]">
                            <a href="/dashboard/online-orders">
                                {" "}
                                <button className="text-xs rounded-sm  uppercase px-2 py-3 text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea]">
                                    online orders
                                </button>
                            </a>
                        </li>
                        <li className="mr-[10px]">
                            <DropDownTow />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
