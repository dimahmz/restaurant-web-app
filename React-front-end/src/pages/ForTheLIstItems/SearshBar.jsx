import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ searchQuery, setSearchQuery, clearSearch }) => {
    return (
        <div className="flex">
            <input
                className="bg-[#f0f7fb] px-2 py-1 text-[#495057] text-sm w-[419px] focus:outline-none"
                type="text"
                placeholder="Search by name, group.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-[#f64e60] p-2" onClick={clearSearch}>
                <BiSearch size={20} className="text-white" />
            </button>
        </div>
    );
};

export default SearchBar;
