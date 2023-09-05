import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const NewBranches = ({ onClose, dataline, isUpdating }) => {
    const [name, setName] = useState("");
    const [deliverycharge, setDeliveryCharge] = useState("");
    const [phone, setphone] = useState("");
    const [address, setAddress] = useState("");
    useEffect(() => {
        if (isUpdating && dataline) {
            setName(dataline.name);
            setDeliveryCharge(dataline.delivery_charge);
            setAddress(dataline.address);
            setphone(dataline.phone);
        }
    }, [isUpdating, dataline]);

    const handleFormSubmit = () => {
        const newname = {
            name,
            deliverycharge,
            address,
            phone,
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
                    {isUpdating ? "Update Branch" : "Add new Branch"}
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
                        placeholder="e.g. Uttara Branch"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="Type branch address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="mb-2">
                        Delivery free<span className="text-red-600">*</span>
                    </label>
                    <input
                        className="border-2 rounded px-3 py-[0.375rem]"
                        type="text"
                        placeholder="e.g. $12"
                        value={deliverycharge}
                        onChange={(e) => setDeliveryCharge(e.target.value)}
                    />
                    <span className=" text-yellow-400">
                        Default Value Is Dollar
                    </span>
                </div>
                <div className="mt-4 flex">
                    <label className="mb-2 p-2 mt-2">
                        Show/Hide
                        <span className="text-red-600">*</span>
                    </label>
                    <input className="mr-2" type="checkbox" />
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

export default NewBranches;
