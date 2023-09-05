import React, { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const CountDiscountTow = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = count + 1; // Round to 2 decimal places
        setCount(parseFloat(newCount));
    };

    const handleDecrement = () => {
        if (count >= 1) {
            const newCount = count - 1; // Round to 2 decimal places
            setCount(parseFloat(newCount));
        }
    };

    const handleInputChange = (event) => {
        const newValue = parseFloat(event.target.value);
        if (!isNaN(newValue)) {
            setCount(newValue);
        }
    };

    return (
        <div className="flex justify-between bg-white text-sm h-[38px] border-2 border-gray-300 rounded-sm">
            <input
                placeholder="e.g. Type price of this items in US dollar"
                className="bg-white w-full  p-3 focus:outline-none"
                value={count}
                onChange={handleInputChange}
            />
            <div className="mt-1">
                <div className="flex flex-col ">
                    <button
                        onClick={handleIncrement}
                        className="bg-gray-400 px-3 hover:bg-gray-200 duration-200"
                    >
                        <BiChevronUp size={13} className="text-gray-700" />
                    </button>
                    <button
                        onClick={handleDecrement}
                        className="bg-gray-400 px-3 hover:bg-gray-200 duration-200"
                    >
                        <BiChevronDown size={13} className="text-gray-700" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CountDiscountTow;
