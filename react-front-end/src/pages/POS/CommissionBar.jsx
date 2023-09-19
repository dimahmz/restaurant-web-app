/* eslint-disable react/prop-types */
import { useState } from "react";

const CommissionBar = ({ data, onSelectCommission }) => {
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

    const handleButtonClick = (department_tag, index) => {
        console.log(department_tag);
        setSelectedButtonIndex(index);
        onSelectCommission(department_tag);
    };

    return (
        <div>
            <ul className="text-white text-sm">
                {data.map((department_tag, index) => (
                    <li key={index} className="mb-[10px] flex justify-center">
                        <button
                            className={`w-full text-white uppercase ${
                                selectedButtonIndex === index
                                    ? "bg-green-500" // Apply green background and white text when clicked
                                    : "bg-[#09c2de]" // Apply the default background and text color
                            } pr-[4.7em] pl-[1.4em] py-[0.8em]`}
                            onClick={() =>
                                handleButtonClick(department_tag, index)
                            }
                        >
                            {department_tag.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommissionBar;
