import React, { useState } from "react";

const CommissionBar = ({ data }) => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

    const handleButtonClick = (index) => {
        setSelectedButtonIndex(index);
    };

    return (
        <div>
            <ul className="text-white text-sm">
                {data.map((item, index) => (
                    <li key={index} className="mb-[10px] flex justify-center">
                        <button
                            className={`w-full uppercase ${
                                selectedButtonIndex === index
                                    ? "bg-green-500 text-white" // Apply green background and white text when clicked
                                    : "bg-[#09c2de] text-white" // Apply the default background and text color
                            } pr-[4.7em] pl-[1.4em] py-[0.8em]`}
                            onClick={() => handleButtonClick(index)}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommissionBar;
