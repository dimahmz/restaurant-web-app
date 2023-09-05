import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const DropDownTow = ({ options, title }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [selectedOption, setSelectedOption] = useState(""); // Changed variable name

    const handleChange = (option) => {
        // Changed parameter name
        setSelectedOption(option);
        onFilterChange(option);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const divStyles = {
        border: isFocused ? "2px solid blue" : "",
        cursor: "pointer",
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchEmpty, setIsSearchEmpty] = useState(true);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setSearchQuery(option);
        setIsDropdownOpen(false);
        handleChange(option); // Call the handleChange function
    };

    const handleSearchInputChange = (e) => {
        const newSearchQuery = e.target.value;
        setSearchQuery(newSearchQuery);
        setIsSearchEmpty(newSearchQuery === "");
        setIsDropdownOpen(true);
    };

    const handleInputClick = () => {
        if (!isDropdownOpen) {
            setIsSearchEmpty(true);
        }
        setIsDropdownOpen(!isDropdownOpen);
    };

    const filteredOptions = isSearchEmpty
        ? options
        : options.filter((option) =>
              option.toLowerCase().includes(searchQuery.toLowerCase())
          );

    return (
        <div
            style={divStyles}
            tabIndex={0}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="rounded border-gray-300 border-2 bg-white"
        >
            <div className="w-full flex relative ">
                <input
                    className="p-2 w-full text-left text-xs focus:outline-none"
                    placeholder={title}
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onClick={handleInputClick}
                />
                <button
                    className="p-1 px-2 border-l-2 text-gray-400"
                    onClick={handleInputClick}
                >
                    {isDropdownOpen ? (
                        <FiChevronUp size={15} />
                    ) : (
                        <FiChevronDown size={15} />
                    )}
                </button>
                {isDropdownOpen && (
                    <div className="absolute mt-10 bg-white border text-xs rounded shadow-md w-full max-h-32 overflow-scroll">
                        {filteredOptions.length === 0 ? (
                            <div className="px-4 py-2">No options</div>
                        ) : (
                            filteredOptions.map((option) => (
                                <div
                                    key={option}
                                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                                        selectedOption === option
                                            ? "text-white bg-blue-500"
                                            : ""
                                    }`}
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropDownTow;
