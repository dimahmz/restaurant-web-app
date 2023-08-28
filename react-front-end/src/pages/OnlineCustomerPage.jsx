import React, { useState } from "react";
import NavBar from "../PosComponents/NavBar";
import { BiSearch } from "react-icons/bi";
import data from "./datatestcustomer.json";
import Footer from "../PosComponents/Footer";
import Action from "../PosComponents/Action";

const OnlineCustomerPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 10;
    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = data.slice(
        indexOfFirstCustomer,
        indexOfLastCustomer
    );
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggleOptions = (index) => {
        if (index === openIndex) {
            setOpenIndex(null); // Close the currently open component
        } else {
            setOpenIndex(index); // Open the clicked component
        }
    };
    const pageCount = Math.ceil(data.length / customersPerPage);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCustomers = data.filter((customer) =>
        Object.values(customer).some((value) =>
            value.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < pageCount) {
            handlePageChange(currentPage + 1);
        }
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
        <div className="bg-gray-200 h-screen">
            <NavBar />
            <div>
                <div className="mt-[10px] flex justify-center">
                    <div className="max-w-[1304px]  m-auto px-4">
                        <div className="w-full bg-white mb-4">
                            <div className="p-[15px] shadow-lg ">
                                <div className="mb-[15px]">
                                    <h1 className="text-lg font-bold text-[#121053]">
                                        Customers
                                    </h1>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex ">
                                        <button className="bg-[#f64e60] p-3">
                                            <BiSearch
                                                size={20}
                                                className="text-white"
                                            />
                                        </button>
                                        <input
                                            className="bg-[#f0f7fb] px-2 py-[0.375rem] text-[#49505] text-sm w-[304px] focus:outline-none"
                                            type="text"
                                            placeholder="Search.."
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                        />
                                        <a href="/dashboard/customers">
                                            <button className=" ml-2 text-sm rounded-sm  uppercase px-3 py-[0.75rem] text-[#f5364a] bg-[#fde0e3] duration-300 hover:text-white hover:bg-[#f5364a]">
                                                pos customers
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {searchQuery ? (
                                // Show search results
                                <div className="pl-[15px]">
                                    <div className=" mt-6">
                                        <div className="w-[1240px] h-[407.2px] overflow-scroll">
                                            <table className="w-full table-auto ">
                                                <thead className="border ">
                                                    <tr>
                                                        <th className=" p-2  border-r-2 text-sm text-center">
                                                            S/L
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Name
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center ">
                                                            Email
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Phone No
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Adresse
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Branch
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredCustomers.map(
                                                        (d, i) => (
                                                            <tr
                                                                className="border hover:bg-gray-200 duration-150"
                                                                key={i}
                                                            >
                                                                <td className="text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                                                                    {d.id}
                                                                </td>
                                                                <td className="px-2 py-4 text-blue-500 border-r-2 text-xs text-center">
                                                                    {d.name}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.email}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.phone}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.adresse}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.branch}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    <Action
                                                                        key={i}
                                                                        isOpen={
                                                                            i ===
                                                                            openIndex
                                                                        }
                                                                        toggleOptions={() =>
                                                                            handleToggleOptions(
                                                                                i
                                                                            )
                                                                        }
                                                                    />
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                        {searchQuery && (
                                            <div className="flex justify-between">
                                                {" "}
                                                <button
                                                    onClick={clearSearch}
                                                    className="  mb-2 text-sm rounded-sm uppercase px-3 py-[0.75rem] text-[#f5364a] bg-[#fde0e3] duration-300 hover:text-white hover:bg-[#f5364a]"
                                                >
                                                    Clear Search
                                                </button>
                                                <div className="mr-4 p-4">
                                                    Total Customers:
                                                    {filteredCustomers.length}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                // Show pending customers and pagination
                                <div className="pl-[15px]">
                                    <div className=" mt-6">
                                        <div className="w-[1240px] h-[407.2px] overflow-scroll">
                                            <table className="w-full table-auto ">
                                                {/* Table header */}
                                                <thead className="border ">
                                                    <tr>
                                                        <th className=" p-2  border-r-2 text-sm text-center">
                                                            S/L
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Name
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center ">
                                                            Email
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Phone No
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Adresse
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Branch
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                {/* Table body */}
                                                <tbody>
                                                    {currentCustomers.map(
                                                        (d, i) => (
                                                            <tr
                                                                className="border hover:bg-gray-200 duration-150"
                                                                key={i}
                                                            >
                                                                <td className="text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                                                                    {d.id}
                                                                </td>
                                                                <td className="px-2 py-4 text-blue-500 border-r-2 text-xs text-center">
                                                                    {d.name}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.email}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.phone}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.adresse}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.branch}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    <Action
                                                                        key={i}
                                                                        isOpen={
                                                                            i ===
                                                                            openIndex
                                                                        }
                                                                        toggleOptions={() =>
                                                                            handleToggleOptions(
                                                                                i
                                                                            )
                                                                        }
                                                                    />
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <div>
                                            <button
                                                onClick={goToPrevPage}
                                                className="mx-2 px-3 py-1 rounded bg-white"
                                            >
                                                Previous
                                            </button>
                                            {Array.from(
                                                { length: pageCount },
                                                (_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() =>
                                                            handlePageChange(
                                                                i + 1
                                                            )
                                                        }
                                                        className={`mx-2 px-3 py-1 rounded ${
                                                            currentPage ===
                                                            i + 1
                                                                ? "bg-blue-500 text-white"
                                                                : "bg-white"
                                                        }`}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                )
                                            )}
                                            <button
                                                onClick={goToNextPage}
                                                className="mx-2 px-3 py-1 rounded bg-white"
                                            >
                                                Next
                                            </button>
                                        </div>
                                        <div className="mr-4">
                                            <p>
                                                Total Customers: {data.length}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OnlineCustomerPage;
