import React, { useState } from "react";

const GroupsBar = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <ul className="text-[16px]">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="mb-[10px]"
                        onClick={() => handleItemClick(index)}
                    >
                        <button
                            className={`w-full ${
                                activeIndex === index
                                    ? "bg-[#f64e60] text-white"
                                    : "bg-white text-black"
                            } border-[#f64e60] px-3 py-[0.375rem] duration-300 border font-bold`}
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupsBar;
