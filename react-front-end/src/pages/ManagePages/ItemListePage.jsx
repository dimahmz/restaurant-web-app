import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import data from "./dataitems.json";
import { Link } from "react-router-dom";
import Action2 from "../../PosComponents/Action2";
import AddVariantes from "./AddNew/AddVariantes";
import ViewVariantion from "./AddNew/ViewVariantion";
const ItemListePage = () => {
    const [showAddVariations, setShowAddVariations] = useState(false);
    const [addVariantesStates, setAddVariantesStates] = useState(
        data.map(() => false)
    );
    const handleClose = () => {
        setShowVariation(false);
    };

    const [openIndex, setOpenIndex] = useState(null);
    const handleVariationsClick = () => {
        setShowAddVariations(!showAddVariations);
    };
    const handleCloseOptions = () => {
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
    const [showVariation, setShowVariation] = useState(false);

    const handleCheckVariation = () => {
        setShowVariation(true);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const customersPerPage = 10;
    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = data.slice(
        indexOfFirstCustomer,
        indexOfLastCustomer
    );

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
        <div>
            <div className="pl-[15px] text-[#121053] text-sm bg-white">
                <div className="py-[15px] flex justify-between">
                    <span className="text-[#121053] text-lg font-extrabold">
                        Food Items List
                    </span>
                    <div className="flex ">
                        <input
                            className="bg-[#f0f7fb] px-2 py-1 text-[#495057] text-sm  w-[419px] focus:outline-none"
                            type="text"
                            placeholder="Search by name ,group.."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />{" "}
                        <button className="bg-[#f64e60] p-2">
                            <BiSearch size={20} className="text-white" />
                        </button>
                        <div className="ml-3">
                            <Link to="/dashboard/manage/food/add-new">
                                <button className="bg-[#f64e60] text-xs text-white px-6 py-3 rounded-sm">
                                    ADD NEW
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                {searchQuery ? (
                    // Show search results

                    <div className="h-[450px] overflow-scroll">
                        <table className="w-full table-auto ">
                            <thead className="border ">
                                <tr>
                                    <th className=" p-2  border-r-2 text-sm text-center">
                                        S/L
                                    </th>
                                    <th className="p-2 border-r-2 text-sm text-center">
                                        Image
                                    </th>
                                    <th className="p-2 border-r-2 text-sm text-center ">
                                        Name
                                    </th>
                                    <th className="p-2 border-r-2 text-sm text-center">
                                        Group
                                    </th>
                                    <th className="p-2 border-r-2 text-sm text-center">
                                        Price
                                    </th>
                                    <th className="p-2 border-r-2 text-sm text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCustomers.map((d, i) => (
                                    <tr
                                        className="border hover:bg-gray-200 duration-150"
                                        key={i}
                                    >
                                        <td className="text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                                            {i + 1}
                                        </td>
                                        <td className="px-2 py-4 text-blue-500 border-r-2 text-xs flex justify-center">
                                            <img
                                                className="rounded-full w-[60px] h-[60px] "
                                                src={d.image}
                                                alt=""
                                            />
                                        </td>
                                        <td className="p-2 border-r-2 text-xs text-center">
                                            {d.name}
                                        </td>
                                        <td className="p-2 border-r-2 text-xs text-center">
                                            {d.group}
                                        </td>
                                        <td className="p-2 border-r-2 text-xs text-center">
                                            {d.prices ? (
                                                <button
                                                    onClick={
                                                        handleCheckVariation
                                                    }
                                                    className="text-white bg-[#f64e60] px-2 py-1 text-sm"
                                                >
                                                    Check Variations
                                                </button>
                                            ) : (
                                                <p>Price: ${d.price}</p>
                                            )}
                                        </td>
                                        <td className="p-2 border-r-2 text-xs text-center">
                                            <Action2
                                                key={i}
                                                isOpen={i === openIndex}
                                                toggleOptions={() =>
                                                    handleToggleOptions(i)
                                                }
                                                onVariationsClick={() => {
                                                    handleVariationsClick();
                                                    handleCloseOptions();
                                                    setAddVariantesStates(
                                                        (prevStates) => {
                                                            const newStates = [
                                                                ...prevStates,
                                                            ];
                                                            newStates[i] = true;
                                                            return newStates;
                                                        }
                                                    );
                                                }}
                                            />

                                            {addVariantesStates[i] && (
                                                <div className="fixed  bg-black/80 overflow-scroll w-full h-screen z-10 left-0 top-0">
                                                    <div className="mt-20 flex justify-center">
                                                        <AddVariantes
                                                            data={d}
                                                            onClose={() => {
                                                                setAddVariantesStates(
                                                                    (
                                                                        prevStates
                                                                    ) => {
                                                                        const newStates =
                                                                            [
                                                                                ...prevStates,
                                                                            ];
                                                                        newStates[
                                                                            i
                                                                        ] = false;
                                                                        return newStates;
                                                                    }
                                                                );
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {showVariation && (
                                    <div className="fixed bg-black/80 overflow-scroll w-full h-screen z-10 left-0 top-0">
                                        <div className="mt-20 flex justify-center">
                                            <ViewVariantion
                                                onClose={handleClose}
                                            />
                                        </div>
                                    </div>
                                )}
                            </tbody>
                        </table>

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
                ) : (
                    // Show pending customers and pagination
                    <div>
                        <div>
                            <div className="h-[450px] overflow-scroll">
                                <table className="w-full table-auto ">
                                    {/* Table header */}
                                    <thead className="border ">
                                        <tr>
                                            <th className=" p-2  border-r-2 text-sm text-center">
                                                S/L
                                            </th>
                                            <th className="p-2 border-r-2 text-sm text-center">
                                                Image
                                            </th>
                                            <th className="p-2 border-r-2 text-sm text-center ">
                                                Name
                                            </th>
                                            <th className="p-2 border-r-2 text-sm text-center">
                                                Group
                                            </th>
                                            <th className="p-2 border-r-2 text-sm text-center">
                                                Price
                                            </th>
                                            <th className="p-2 border-r-2 text-sm text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* Table body */}
                                    <tbody>
                                        {currentCustomers.map((d, i) => (
                                            <tr
                                                className="border hover:bg-gray-200 duration-150"
                                                key={i}
                                            >
                                                <td className="text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                                                    {i + 1}
                                                </td>
                                                <td className="px-2 py-4 text-blue-500 border-r-2 text-xs flex justify-center">
                                                    <img
                                                        className="rounded-full w-[60px] h-[60px] "
                                                        src={d.image}
                                                        alt=""
                                                    />
                                                </td>
                                                <td className="p-2 border-r-2 text-xs text-center">
                                                    {d.name}
                                                </td>
                                                <td className="p-2 border-r-2 text-xs text-center">
                                                    {d.group}
                                                </td>
                                                <td className="p-2 border-r-2 text-xs text-center">
                                                    {d.prices ? (
                                                        <button
                                                            onClick={
                                                                handleCheckVariation
                                                            }
                                                            className="text-white bg-[#f64e60] px-2 py-1 text-sm"
                                                        >
                                                            Check Variations
                                                        </button>
                                                    ) : (
                                                        <p>Price: ${d.price}</p>
                                                    )}
                                                </td>
                                                <td className="p-2 border-r-2 text-xs text-center">
                                                    <Action2
                                                        key={i}
                                                        isOpen={i === openIndex}
                                                        toggleOptions={() =>
                                                            handleToggleOptions(
                                                                i
                                                            )
                                                        }
                                                        onVariationsClick={() => {
                                                            handleVariationsClick();
                                                            handleCloseOptions();
                                                            setAddVariantesStates(
                                                                (
                                                                    prevStates
                                                                ) => {
                                                                    const newStates =
                                                                        [
                                                                            ...prevStates,
                                                                        ];
                                                                    newStates[
                                                                        i
                                                                    ] = true;
                                                                    return newStates;
                                                                }
                                                            );
                                                        }}
                                                    />

                                                    {addVariantesStates[i] && (
                                                        <div className="fixed  bg-black/80 overflow-scroll w-full h-screen z-10 left-0 top-0">
                                                            <div className="mt-20 flex justify-center">
                                                                <AddVariantes
                                                                    data={d}
                                                                    onClose={() => {
                                                                        setAddVariantesStates(
                                                                            (
                                                                                prevStates
                                                                            ) => {
                                                                                const newStates =
                                                                                    [
                                                                                        ...prevStates,
                                                                                    ];
                                                                                newStates[
                                                                                    i
                                                                                ] = false;
                                                                                return newStates;
                                                                            }
                                                                        );
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                        {showVariation && (
                                            <div className="fixed bg-black/80 overflow-scroll w-full h-screen z-10 left-0 top-0">
                                                <div className="mt-20 flex justify-center">
                                                    <ViewVariantion
                                                        onClose={handleClose}
                                                    />
                                                </div>
                                            </div>
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
                            <div className="mr-4">
                                <p>Total Customers: {data.length}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ItemListePage;
