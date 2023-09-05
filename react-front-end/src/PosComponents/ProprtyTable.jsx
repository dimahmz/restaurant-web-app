import React, { useState } from "react";

const ProprtyTable = ({ data, title }) => {
    const initialQuantities = data.map(() => 1);
    const [quantities, setQuantities] = useState(initialQuantities);

    const handleIncrement = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newQuantities[index] + 1;
        setQuantities(newQuantities);
    };

    const handleDecrement = (index) => {
        if (quantities[index] > 1) {
            const newQuantities = [...quantities];
            newQuantities[index] = newQuantities[index] - 1;
            setQuantities(newQuantities);
        }
    };

    return (
        <div>
            <div className="p-2">
                <div>
                    <div className="text-white bg-[#f64e60] px-4 py-2 flex justify-center font-bold border-2">
                        {title}
                    </div>
                    <table className="table-auto w-full">
                        <thead className="border">
                            <tr className="text-sm">
                                <td className="pl-2">Name</td>
                                <td className="pl-2 border-l-2">QTY</td>
                                <td className="pl-2 border-l-2">Unit Price</td>
                            </tr>
                        </thead>
                        <tbody className="bg-[#f4f9fc]">
                            {data.map((item, index) => (
                                <tr key={index} className="border-b-2">
                                    <td className="p-2">{item.name}</td>
                                    <td className="p-2 border-l-2">
                                        <div className="flex justify-center">
                                            <button
                                                className="px-2 py-1 bg-[#f64e60] text-white"
                                                onClick={() =>
                                                    handleDecrement(index)
                                                }
                                            >
                                                -
                                            </button>
                                            <span className="px-2">
                                                {quantities[index]}
                                            </span>
                                            <button
                                                className="px-2 py-1 bg-[#09c2de] text-white"
                                                onClick={() =>
                                                    handleIncrement(index)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="p-2  border-l-2">
                                        {item.unitPrice}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProprtyTable;
