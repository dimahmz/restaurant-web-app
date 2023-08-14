import React, { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const CountDiscout = () => {
  const [count, setCount] = useState(0.0);

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

  return (
    <div className=" flex p-[5px] text-[12px]">
      <input
        className="bg-white w-[60px] pr-4 text-center focus:outline-none"
        value={count.toFixed(2)}
      />
      <div className="flex flex-col">
        <button
          onClick={handleIncrement}
          className="bg-gray-100  hover:bg-gray-200 duration-200"
        >
          {" "}
          <BiChevronUp size={10} className="text-gray-400" />
        </button>
        <button
          onClick={handleDecrement}
          className="bg-gray-100 hover:bg-gray-200 duration-200"
        >
          {" "}
          <BiChevronDown size={10} className="text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default CountDiscout;
