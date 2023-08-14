import React, { useState } from "react";
import NavBar from "../PosComponents/NavBar";
import { BiSearch } from "react-icons/bi";
import data from "./datatestcustomer.json";
import Footer from "../PosComponents/Footer";
const CustomerPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 10;

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = data.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const pageCount = Math.ceil(data.length / customersPerPage);

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

  return (
    <div className="bg-gray-200 h-screen">
      <NavBar />
      <div className=" container">
        <div className="mt-[10px]">
          <div className="max-w-[1304px] m-auto px-4">
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
                      <BiSearch size={20} className="text-white" />
                    </button>
                    <input
                      className="bg-[#f0f7fb] px-2 py-[0.375rem] text-[#49505] text-sm w-[304px] focus:outline-none"
                      type="text"
                      placeholder="Search.."
                    />
                    <button className=" ml-2 text-sm rounded-sm  uppercase px-3 py-[0.375rem] text-[#f5364a] bg-[#fde0e3] duration-300 hover:text-white hover:bg-[#f5364a]">
                      online customers
                    </button>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-white bg-[#0880ea] rounded-sm px-3 py-[0.375rem] w-[300px] hover:bg-blue-400">
                      ADD NEW
                    </button>{" "}
                  </div>
                </div>
              </div>
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
                        {currentCustomers.map((d, i) => (
                          <tr
                            className="border hover:bg-gray-200 duration-150"
                            key={i}
                          >
                            <td className=" text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                              {d.id}
                            </td>
                            <td className="px-2 py-4 text-blue-500  border-r-2 text-xs text-center">
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
                              {d.Action}
                            </td>
                          </tr>
                        ))}
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
                    {Array.from({ length: pageCount }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        className={`mx-2 px-3 py-1 rounded ${
                          currentPage === i + 1
                            ? "bg-blue-500 text-white"
                            : "bg-white"
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                    <button
                      onClick={goToNextPage}
                      className="mx-2 px-3 py-1 rounded bg-white"
                    >
                      Next
                    </button>
                  </div>
                  <div>
                    <p>Total Customers: {data.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerPage;
