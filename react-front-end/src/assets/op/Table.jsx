import React from "react";
import { MdLocalPrintshop } from "react-icons/md";

const Table = ({ customers }) => {
    return (
        <table className="w-full table-auto ">
            {/* Table header */}
            <thead className="border">
                <tr>
                    <th className="p-2 border-r-2 text-sm text-center">S/L</th>
                    <th className="p-2 border-r-2 text-sm text-center">
                        Token
                    </th>
                    <th className="p-2 border-r-2 text-sm text-center">Date</th>
                    <th className="p-2 border-r-2 text-sm text-center">
                        Customer
                    </th>
                    <th className="p-2 border-r-2 text-sm text-center">
                        Total Bill
                    </th>
                    <th className="p-2 border-r-2 text-sm text-center">
                        Branch
                    </th>
                    <th className="p-2 border-r-2 text-sm text-center">
                        Status
                    </th>
                    <th className="p-2 border-r-2 text-sm text-center">
                        Print
                    </th>
                    <th className="p-2 border-r-2 text-sm text-center">
                        Action
                    </th>
                </tr>
            </thead>
            {/* Table body */}
            <tbody>
                {customers.map((d, i) => (
                    <tr
                        className="border hover:bg-gray-200 duration-150"
                        key={i}
                    >
                        <td className="text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                            {d.id}
                        </td>
                        <td className="px-2 py-4 text-blue-500 border-r-2 text-xs text-center">
                            {d.token}
                        </td>
                        <td className="p-2 border-r-2 text-xs text-center">
                            {d.datetime}
                        </td>
                        <td className="p-2 border-r-2 text-xs text-center">
                            {d.customer}
                        </td>
                        <td className="p-2 border-r-2 text-xs text-center">
                            {d.totalBill}
                        </td>
                        <td className="p-2 border-r-2 text-xs text-center">
                            {d.branch}
                        </td>
                        <td className="p-2 border-r-2 text-xs text-center">
                            <button className="text-xs rounded-sm px-3 py-[0.375rem] text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea]">
                                <span className="p-2">{d.status}</span>
                            </button>
                        </td>
                        <td className="p-2 border-r-2 text-xs text-center">
                            <button className="p-2 bg-blue-500 text-white rounded">
                                <MdLocalPrintshop />
                            </button>
                        </td>
                        <td className="p-2 border-r-2 text-xs text-center">
                            <button className="px-2 py-1 bg-red-500 text-white rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
