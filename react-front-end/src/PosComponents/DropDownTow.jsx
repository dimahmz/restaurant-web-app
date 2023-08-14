import React, { useState } from "react";

const DropDownTow = () => {
  const options = ["English", "Arabic", "Korean", "French", "Italian"];

  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSearchQuery(option);
    setIsDropdownOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="rounded-md border-2 bg-white">
      <div className="relative">
        <input
          className=" px-2 py-[6px] w-32 text-left text-sm focus:outline-none"
          placeholder="Select branch.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />
        <button
          className=" px-2 py-[6px] border-l-2"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {isDropdownOpen ? "▲" : "▼"}
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-1 bg-white border rounded shadow-md w-40">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-2">No options</div>
            ) : (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                    selectedOption === option ? "text-white bg-blue-500" : ""
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
