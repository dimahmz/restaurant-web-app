/* eslint-disable react/prop-types */
import { useState } from "react";

const GroupsBar = ({ foodGroups, onSelectGroup }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index, food) => {
        setActiveIndex(index);
        onSelectGroup(food);
    };

    return (
        <div>
            <ul className="text-[16px]">
                {foodGroups.map((food, index) => (
                    <li
                        key={index}
                        className="mb-[10px]"
                        onClick={() => handleItemClick(index, food)}
                    >
                        <button
                            className={`w-full ${
                                activeIndex === index
                                    ? "bg-[#f64e60] text-white"
                                    : "bg-white text-black"
                            } border-[#f64e60] px-3 py-[0.375rem] duration-300 border font-bold`}
                        >
                            {food.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GroupsBar;
