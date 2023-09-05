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
                <div className="mt-[10px]">
                    <div className="max-w-[1520px] mx-auto px-4">
                        <div className=" bg-white mb-4">
                            <div className="p-[15px] shadow-lg ">
                                <div className="mb-[15px]">
                                    <h1 className="text-lg font-bold uppercase text-[#121053]">
                                        Order history
                                    </h1>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex ">
                                        <button className="bg-[#f64e60] p-2">
                                            <BiSearch
                                                size={15}
                                                className="text-white"
                                            />
                                        </button>
                                        <input
                                            className="bg-[#f0f7fb] px-2  text-[#49505] text-xs w-[304px] focus:outline-none"
                                            type="text"
                                            placeholder="Search.."
                                            value={searchQuery}
                                            onChange={(e) =>
                                                setSearchQuery(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div>
                                        <ul className="flex">
                                            <li className="mr-[10px]">
                                                <a href="/dashboard/online-orders">
                                                    {" "}
                                                    <button className=" text-xs rounded-sm  uppercase px-2 py-3 text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea]">
                                                        online orders
                                                    </button>
                                                </a>
                                            </li>
                                            <li className="mr-[10px]">
                                                <DropDownTow
                                                    options={data.branch}
                                                    onFilterChange={
                                                        handleBranchFilterChange
                                                    }
                                                />
                                            </li>
                                            <li className="mr-[10px]">
                                                <div className="container ">
                                                    <DatePicker
                                                        selected={fromDate}
                                                        onChange={
                                                            handleFromDateChange
                                                        }
                                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        placeholderText="From date"
                                                    />
                                                </div>
                                            </li>
                                            <li className="mr-[10px]">
                                                <AiOutlineArrowRight
                                                    size={28}
                                                />
                                            </li>
                                            <li className="mr-[10px]">
                                                <div className="container ">
                                                    <DatePicker
                                                        selected={toDate}
                                                        onChange={
                                                            handleToDateChange
                                                        }
                                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        placeholderText="To date"
                                                    />
                                                </div>
                                            </li>
                                            <li className="mr-[10px]">
                                                <button className=" text-xs rounded-sm  uppercase px-2 py-3 text-[#f5364a] bg-[#fde0e3] duration-300 hover:text-white hover:bg-[#f5364a]">
                                                    filter
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {searchQuery ? (
                                // Show search results
                                <div className="pl-[15px]">
                                    <div className=" mt-6">
                                        <div className="w-[1480px] h-[407.2px] overflow-scroll">
                                            <table className="w-full table-auto ">
                                                <thead className="border ">
                                                    <tr>
                                                        <th className=" p-2  border-r-2 text-sm text-center">
                                                            S/L
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Token
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center ">
                                                            Date
                                                        </th>
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
                                                <tbody>
                                                    {filteredCustomers.map(
                                                        (d, i) => (
                                                            <tr
                                                                className="border hover:bg-gray-200 duration-150"
                                                                key={i}
                                                            >
                                                                <td className=" text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                                                                    {i + 1}
                                                                </td>
                                                                <td className="px-2 py-4 text-blue-500  border-r-2 text-xs text-center">
                                                                    {d.token}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.datetime}
                                                                </td>

                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.customer}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {
                                                                        d.totalBill
                                                                    }
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.branch}
                                                                </td>
                                                                <td className="p-2  border-r-2 text-xs text-center">
                                                                    <button className="text-xs rounded-sm px-3 py-[0.375rem] text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea]">
                                                                        <span className="p-2">
                                                                            {
                                                                                d.status
                                                                            }
                                                                        </span>
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
                                <div className="pl-[15px] ">
                                    <div className=" mt-6">
                                        <div className="w-[1480px] h-[407.2px] overflow-scroll">
                                            <table className="w-full table-auto ">
                                                {/* Table header */}
                                                <thead className="border ">
                                                    <tr>
                                                        <th className=" p-2  border-r-2 text-sm text-center">
                                                            S/L
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center">
                                                            Token
                                                        </th>
                                                        <th className="p-2 border-r-2 text-sm text-center ">
                                                            Date
                                                        </th>
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
                                                    {currentCustomers.map(
                                                        (d, i) => (
                                                            <tr
                                                                className="border hover:bg-gray-200 duration-150"
                                                                key={i}
                                                            >
                                                                <td className=" text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                                                                    {i + 1}
                                                                </td>
                                                                <td className="px-2 py-4 text-blue-500  border-r-2 text-xs text-center">
                                                                    {d.token}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.datetime}
                                                                </td>

                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.customer}
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {
                                                                        d.totalBill
                                                                    }
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    {d.branch}
                                                                </td>
                                                                <td className="p-2  border-r-2 text-xs text-center">
                                                                    <button className="text-xs rounded-sm px-3 py-[0.375rem] text-[#0880ea] bg-[#daedfe] duration-300 hover:text-white hover:bg-[#0880ea]">
                                                                        <span className="p-2">
                                                                            {
                                                                                d.status
                                                                            }
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    <ReactToPrint
                                                                        trigger={() => (
                                                                            <button className="p-2 bg-blue-500 text-white rounded">
                                                                                <MdLocalPrintshop />
                                                                            </button>
                                                                        )}
                                                                        content={() =>
                                                                            ticketRef.current
                                                                        } // Use the ref here
                                                                    />
                                                                </td>
                                                                <td className="p-2 border-r-2 text-xs text-center">
                                                                    <button
                                                                        onClick={() => {
                                                                            setRowToDelete(
                                                                                i
                                                                            );
                                                                            setShowDeleteConfirm(
                                                                                true
                                                                            );
                                                                        }}
                                                                        className="px-2 py-1 bg-red-500 text-white rounded"
                                                                    >
                                                                        Delete
                                                                    </button>
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
                                                Total Customers:{" "}
                                                {data.customer.length}
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
