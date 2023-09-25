import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import UploadButton from "../../../PosComponents/UploadImage";
import DropDownTow from "../../../PosComponents/DropDownTow";
const NewCutomers = ({ onClose, dataline, isUpdating }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setphone] = useState("");
    const [address, setAddress] = useState("");
    const [branch, setBranch] = useState("");
    useEffect(() => {
        if (isUpdating && dataline) {
            setName(dataline.name);
            setEmail(dataline.email);
            setAddress(dataline.address);
            setphone(dataline.phone);
            setBranch(dataline.branch);
        }
    }, [isUpdating, dataline]);

    const handleFormSubmit = () => {
        const newname = {
            name,
            email,
            address,
            phone,
            branch,
        };

        if (isUpdating) {
            // Call update payment type function and pass newPaymentType
            // For example: updatePaymentType(dataline.id, newPaymentType);
        } else {
            // Call add new payment type function and pass newPaymentType
            // For example: addPaymentType(newPaymentType);
        }

        onClose();
    };
    return (
        <div className="w-[800px] bg-white rounded  ">
            <div className="p-4 flex justify-between border-b-2">
                <div className="mt-6 mb-4 text-[0.9rem] font-bold">
                    {isUpdating ? "Update Customer" : "Add new Customer"}
                </div>
                <button onClick={onClose}>
                    <AiOutlineClose
                        className=" hover:text-gray-700 duration-300"
                        size={20}
                    />
                </button>
            </div>
            <div className="p-4">
                <div className=" flex flex-col">
                    <label className="mb-2">
                        Name<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. Mr.John"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Branch<span className="text-red-600">*</span>
                    </label>
                    <DropDownTow />
                </div>

                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Email<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. staff@exmple.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Phone number<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. 01xxx xxx xxx"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                    />
                </div>

                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Address<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 p rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="Type customer address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="mt-4 flex text-white gap-2 text-sm">
                    <button
                        onClick={handleFormSubmit}
                        className=" flex-1 bg-[#0dd19d] px-3 py-1 rounded-sm hover:bg-[#40b495] duration-300 "
                    >
                        {isUpdating ? "Update" : "Save"}
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 bg-[#f64e60]  rounded-sm hover:bg-[#dc4e5c] duration-300 "
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewCutomers;
