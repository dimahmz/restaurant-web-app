import React, { useState } from "react";

const DropDown3 = ({ options, defaultValue }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(
        defaultValue || ""
    );

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div className="">
            <select
                id="language"
                name="language"
                className="block w-full bg-white px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:border-blue-500"
                value={selectedLanguage}
                onChange={handleLanguageChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropDown3;
