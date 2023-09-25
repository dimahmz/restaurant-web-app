import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import DropDown from "../../Home/DropDown";
import DropDownTow from "../../../PosComponents/DropDownTow";

const NewTable = ({ onClose, dataline, isUpdating }) => {
    const [name, setName] = useState("");
    const [capacity, setCpacity] = useState("");
    const [branch, setBranch] = useState("");
    useEffect(() => {
        if (isUpdating && dataline) {
            setName(dataline.name);
            setCpacity(dataline.capacity);
            setBranch(dataline.branch);
        }
    }, [isUpdating, dataline]);

    const handleFormSubmit = () => {
        const newPaymentType = {
            name,
            capacity,
            branch,
        };

        if (isUpdating) {
            // Call update payment type function and pass newPaymentType
            // For example: updatePaymentType(paymentType.id, newPaymentType);
        } else {
            // Call add new payment type function and pass newPaymentType
            // For example: addPaymentType(newPaymentType);
        }

        onClose();
    };
    const liste = ["br", "grrf", "fdfg"];
    return (
        <div className="w-[800px] bg-white rounded">
            <div className="p-4 flex justify-between border-b-2">
                <div className="mt-6 mb-4 text-[0.9rem] font-bold">
                    {isUpdating ? "Edit Table" : "Add New Table"}
                </div>
                <button onClick={onClose}>
                    <AiOutlineClose
                        className="hover:text-gray-700 duration-300"
                        size={20}
                    />
                </button>
            </div>
            <div className="p-4">
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <label className="mb-2">
                            Name <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="border-2 rounded px-3 py-[0.375rem]"
                            type="text"
                            placeholder="e.g. Cach"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="mb-2">
                            Select a branch{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <DropDownTow options={liste} title="Select Branch " />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="mb-2">
                            Guest capacity{" "}
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="border-2 rounded px-3 py-[0.375rem]"
                            type="text"
                            placeholder="e.g. 5"
                            value={capacity}
                            onChange={(e) => setCpacity(e.target.value)}
                        />
                    </div>

                    <div className="mt-4 flex text-white gap-2 text-sm">
                        <button
                            className="flex-1 bg-[#0dd19d] px-3 py-1 rounded-sm hover:bg-[#40b495] duration-300"
                            onClick={handleFormSubmit}
                        >
                            {isUpdating ? "Update" : "Save"}
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 bg-[#f64e60] rounded-sm hover:bg-[#dc4e5c] duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTable;
