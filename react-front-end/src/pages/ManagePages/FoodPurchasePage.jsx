import React from "react";
import DropDown from "../../components/DropDown";
import DropDownTow from "../../PosComponents/DropDownTow";

const FoodPurchasePage = () => {
    const option = ["branch1", "branch2", "branch3"];
    const Supplier = ["centrale", "Mr.Supplier"];
    return (
        <div className="pl-[15px] text-[#121053] text-sm bg-white h-[580px] overflow-scroll ">
            <div className="py-[15px]">
                <span className="text-[#121053] text-lg font-bold">
                    Add new purchase
                </span>
                <div className="m-4">
                    <div className="p-4 border-2 rounded ">
                        <div className="px-3">
                            <div>
                                <div className="mb-2">
                                    Branch{" "}
                                    <span className="text-red-600">*</span>
                                </div>
                                <DropDownTow
                                    options={option}
                                    title="Please Select Branch..."
                                />
                            </div>
                            <div className="mt-4">
                                <div className="mb-2">
                                    Supplier{" "}
                                    <span className="text-red-600">*</span>
                                </div>
                                <DropDownTow
                                    options={option}
                                    title="Please Select Supplier..."
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <div className="mb-2">
                                        Invoice{" "}
                                        <span className="text-red-600">*</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="e.g. 123"
                                        className="border-2 p-2 rounded w-[700px]"
                                    />
                                </div>
                                <div>
                                    <div className="mb-2">
                                        Purchase Date{" "}
                                        <span className="text-red-600">*</span>
                                    </div>
                                    <input
                                        className="border-2 p-2 rounded"
                                        type="text"
                                        placeholder="purchase date"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="mb-2">Description </div>
                                <input
                                    type="text"
                                    placeholder="Short Description"
                                    className="rounded p-2 w-full border-2"
                                />
                            </div>
                            <div className="mt-4">
                                <div className="mb-2">
                                    Payement Type{" "}
                                    <span className="text-red-600">*</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="e.g. Cash,Bank payement"
                                    className="rounded p-2 w-full border-2"
                                />
                            </div>
                            <div className="mt-4">
                                <div className="mb-2">
                                    Food Items{" "}
                                    <span className="text-red-600">*</span>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Please Select Items.."
                                    className="rounded p-2 w-full border-2"
                                />
                            </div>
                            <button className="py-2 px-6 text-white bg-[#dc3545] mt-4 mb-6">
                                SAVE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodPurchasePage;
