import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

import Action from "../../PosComponents/Action";
import Delete from "./AddNew/Delete";

const TestTable = ({ title, data = [], headers, EditComponent }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const [openIndex, setOpenIndex] = useState(null);
    const [add, setAdd] = useState(false);
    const handleFormClose = () => {
        setAdd(false);
    };
    const [showEditPayment, setShowEditPayment] = useState(false);
    const [selectedPaymentType, setSelectedPaymentType] = useState(null);

    const handleEditPaymentClick = (dataline) => {
        setSelectedPaymentType(dataline);
        setOpenIndex(null);
        setShowEditPayment(true);
    };

    const handleAdd = () => {
        setAdd(!add);
        setOpenIndex(null);
    };
    const handleEditPaymentClose = () => {
        setSelectedPaymentType(null);
        setShowEditPayment(false);
    };
    const [confirmdelete, setConfirmDelete] = useState(false);
    const handleDelete = () => {
        setConfirmDelete(!confirmdelete);
        setOpenIndex(null);
    };

    // Function to handle opening/closing of Action2 components
    const handleToggleOptions = (index) => {
        if (index === openIndex) {
            setOpenIndex(null); // Close the currently open component
        } else {
            setOpenIndex(index); // Open the clicked component
        }
    };
    const [searchQuery, setSearchQuery] = useState("");
    const filteredItems = data.filter((item) =>
        Object.values(item).some((value) =>
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
        <div>
            <div className="pl-[15px] text-[#121053] text-sm bg-white">
                <div className="py-[15px] flex justify-between">
                    <span className="text-[#121053] text-lg font-extrabold">
                        {title}
                    </span>
                    <div className="flex">
                        <input
                            className="bg-[#f0f7fb] px-2 py-1 text-[#495057] text-sm w-[419px] focus:outline-none"
                            type="text"
                            placeholder="Search...."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="bg-[#f64e60] p-2">
                            <BiSearch size={20} className="text-white" />
                        </button>
                        <div className="ml-3">
                            <button
                                onClick={handleAdd}
                                className="bg-[#f64e60] text-xs text-white px-6 py-3 rounded-sm"
                            >
                                ADD NEW
                            </button>
                            {add && (
                                <div className="fixed  bg-black/80 overflow-scroll w-full h-screen z-10 left-0 top-0  ">
                                    <div className="mt-20 flex justify-center">
                                        <EditComponent
                                            onClose={handleFormClose}
                                            isUpdating={false}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Table section */}
                <div className="h-[450px] overflow-scroll">
                    <table className="w-full table-auto">
                        <thead className="border">
                            <tr>
                                {headers.map((header, index) => (
                                    <th
                                        key={index}
                                        className={`p-2 border-r-2 text-sm text-center ${
                                            index === headers.length - 1
                                                ? ""
                                                : "border-r-2"
                                        }`}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        {data.length > 0 ? (
                            <tbody>
                                {searchQuery
                                    ? filteredItems.map((item, index) => (
                                          <tr
                                              className="border hover:bg-gray-200 duration-150"
                                              key={index}
                                          >
                                              <td className="px-2 py-4 border-r-2 text-xs text-center">
                                                  {index + 1}
                                              </td>
                                              {Object.values(item).map(
                                                  (value, idx) => (
                                                      <td
                                                          key={idx}
                                                          className={`px-2 py-4 border-r-2 text-xs text-center ${
                                                              idx ===
                                                              headers.length - 1
                                                                  ? ""
                                                                  : "border-r-2"
                                                          }`}
                                                      >
                                                          {value}
                                                      </td>
                                                  )
                                              )}
                                              <td className="px-2 py-4 border-r-2 text-xs text-center">
                                                  <Action
                                                      key={index}
                                                      isOpen={
                                                          index === openIndex
                                                      }
                                                      toggleOptions={() =>
                                                          handleToggleOptions(
                                                              index
                                                          )
                                                      }
                                                      onEdit={() =>
                                                          handleEditPaymentClick(
                                                              item
                                                          )
                                                      }
                                                      onDelete={handleDelete}
                                                  />
                                              </td>
                                          </tr>
                                      ))
                                    : data
                                          .slice(
                                              indexOfFirstItem,
                                              indexOfLastItem
                                          )
                                          .map((item, index) => (
                                              <tr
                                                  className="border hover:bg-gray-200 duration-150"
                                                  key={index}
                                              >
                                                  <td className="px-2 py-4 border-r-2 text-xs text-center">
                                                      {index + 1}
                                                  </td>
                                                  {Object.values(item).map(
                                                      (value, idx) => (
                                                          <td
                                                              key={idx}
                                                              className={`px-2 py-4 border-r-2 text-xs text-center ${
                                                                  idx ===
                                                                  headers.length -
                                                                      1
                                                                      ? ""
                                                                      : "border-r-2"
                                                              }`}
                                                          >
                                                              {value}
                                                          </td>
                                                      )
                                                  )}
                                                  <td className="px-2 py-4 border-r-2 text-xs text-center">
                                                      <Action
                                                          key={index}
                                                          isOpen={
                                                              index ===
                                                              openIndex
                                                          }
                                                          toggleOptions={() =>
                                                              handleToggleOptions(
                                                                  index
                                                              )
                                                          }
                                                          onEdit={() =>
                                                              handleEditPaymentClick(
                                                                  item
                                                              )
                                                          }
                                                          onDelete={
                                                              handleDelete
                                                          }
                                                      />
                                                  </td>
                                              </tr>
                                          ))}
                                {showEditPayment && (
                                    <div className="fixed bg-black/80 overflow-scroll w-full h-screen z-10 left-0 top-0">
                                        <div className="mt-20 flex justify-center">
                                            <EditComponent
                                                onClose={handleEditPaymentClose}
                                                dataline={selectedPaymentType} // Pass the selected payment type
                                                isUpdating={true} // Set to true for update mode
                                            />
                                        </div>
                                    </div>
                                )}
                                {confirmdelete && (
                                    <div className="fixed bg-white/80 overflow-scroll w-screen h-screen z-10 left-0 top-0  ">
                                        <div className="flex mt-48 justify-center items-center">
                                            <Delete onClose={handleDelete} />
                                        </div>
                                    </div>
                                )}
                            </tbody>
                        ) : (
                            <tbody>
                                <tr>
                                    <td
                                        colSpan={headers.length + 1}
                                        className="p-4 text-center"
                                    >
                                        No data available.
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
                {/* Pagination or search results info */}
                {searchQuery && (
                    <div className="flex justify-between">
                        <button
                            onClick={clearSearch}
                            className="mb-2 text-sm rounded-sm uppercase px-3 py-[0.75rem] text-[#f5364a] bg-[#fde0e3] duration-300 hover:text-white hover:bg-[#f5364a]"
                        >
                            Clear Search
                        </button>
                        <div className="mr-4 p-4">
                            Total Customers: {filteredItems.length}
                        </div>
                    </div>
                )}
                <div className="flex justify-between mt-4">
                    <div>
                        {!searchQuery && (
                            <>
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
                            </>
                        )}
                    </div>
                    <div className="mr-4">
                        {!searchQuery && <p>Total Items: {data.length}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestTable;
