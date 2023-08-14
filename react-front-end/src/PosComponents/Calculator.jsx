import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="w-[350px] h-[500] absolute right-32  bg-white">
      <div className="calculator-container">
        <div className="calculator p-4 rounded-lg border shadow-lg">
          <div className="input bg-gray-100 text-right text-3xl p-2 mb-2 rounded-lg">
            {input}
          </div>
          <div className="buttons grid grid-cols-4 gap-2">
            {["7", "8", "9", "/"].map((value) => (
              <button
                key={value}
                onClick={() => handleButtonClick(value)}
                className="button bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800"
              >
                {value}
              </button>
            ))}
            {["4", "5", "6", "*"].map((value) => (
              <button
                key={value}
                onClick={() => handleButtonClick(value)}
                className="button bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800"
              >
                {value}
              </button>
            ))}
            {["1", "2", "3", "-"].map((value) => (
              <button
                key={value}
                onClick={() => handleButtonClick(value)}
                className="button bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800"
              >
                {value}
              </button>
            ))}
            <button
              onClick={handleClear}
              className="button bg-gray-400 text-gray-700 hover:bg-gray-500 hover:text-gray-800 col-span-2"
            >
              Clear
            </button>
            <button
              onClick={() => handleButtonClick("0")}
              className="button bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800"
            >
              0
            </button>
            <button
              onClick={() => handleButtonClick(".")}
              className="button bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800"
            >
              .
            </button>
            <button
              onClick={handleDelete}
              className="button bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800"
            >
              DEL
            </button>
            <button
              onClick={handleCalculate}
              className="button bg-blue-500 text-white hover:bg-blue-600 col-span-2"
            >
              =
            </button>
            <button
              onClick={() => handleButtonClick("+")}
              className="button bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800"
            >
              +
            </button>
          </div>
          <div className="result bg-gray-100 text-right text-3xl p-2 mt-2 rounded-lg">
            {result}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
