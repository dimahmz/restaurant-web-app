import React from "react";

const VariationsTable = ({ tableData }) => {
    return (
        <div className="p-2">
            <div>
                <div className="text-white bg-[#f64e60] px-4 py-2 flex justify-center font-bold border-2">
                    Variations
                </div>
                <table className="table-auto w-full">
                    <thead className="border">
                        <tr>
                            <td className="pl-2">Name</td>
                            <td className="pl-2 border-l-2">Price</td>
                        </tr>
                    </thead>
                    <tbody className="bg-[#f4f9fc] border-2">
                        {tableData.map((row, index) => (
                            <tr key={index} className="border-b-2">
                                <td className="p-2 ">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox mr-2"
                                        />
                                        {row.name}
                                    </label>
                                </td>
                                <td className="p-2 border-l-2">{row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VariationsTable;
