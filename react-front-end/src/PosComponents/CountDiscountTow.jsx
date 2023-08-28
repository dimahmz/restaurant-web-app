import React, { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const CountDiscountTow = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        const newCount = (count + 0.01).toFixed(2); // Round to 2 decimal places
        setCount(parseFloat(newCount));
    };

    const handleDecrement = () => {
        if (count >= 0.01) {
            const newCount = (count - 0.01).toFixed(2); // Round to 2 decimal places
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
        <div className="flex justify-between p-[5px] text-sm h-[38px] border-[2px] rounded-sm">
            <input
                placeholder="e.g. Type price of this items in US dollar"
                className="bg-white w-full pr-4 focus:outline-none"
                value={count.toFixed(2)}
                onChange={handleInputChange}
            />
            <div className="">
                <div className="flex flex-col">
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
