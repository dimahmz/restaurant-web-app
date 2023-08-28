import React, { useState } from "react";
import DropDownTow from "../../PosComponents/DropDownTow";
import { Checkbox } from "@material-tailwind/react";
import CountDiscout from "../../PosComponents/CountDiscout";
import CountDiscountTow from "../../PosComponents/CountDiscountTow";
import UploadImage from "../../PosComponents/UploadImage";
import NewGroup from "./AddNew/NewGroup";
import SelectMultiple from "../../PosComponents/SelectMultiple";
const AddNewItemPage = () => {
    const [hasVariations, setHasVariations] = useState(false);
    const [hasProprties, setHasProprties] = useState(false);
    const options = [
        "Apple",
        "Banana",
        "Cherry",
        "Date",
        "Fig",
        "Grape",
        "Kiwi",
    ];
    return (
        <div className="pl-[15px] text-[#121053] text-sm bg-white h-[580px] overflow-scroll ">
            <div className="py-[15px]">
                <span className="text-[#121053] text-lg font-bold">
                    Add New Item
                </span>
            </div>
            <div className=" p-2 mx-4 mb-12 rounded-lg border-[1px] border-solid ">
                <div className="mx-3">
                    <div className="mt-2">
                        <div className="mb-2">
                            <span className=" font-semibold ">
                                Food Group
                                <span className="text-red-600">*</span>
                            </span>
                        </div>
                        <div>
                            <DropDownTow />
                        </div>
                    </div>
                    <div className=" mt-4">
                        <div className="mb-2">
                            <span className=" font-semibold ">
                                Name
                                <span className="text-red-600">*</span>
                            </span>
                        </div>

                        <input
                            className="w-full border rounded-sm px-3 mb-2 py-[0.375rem]"
                            type="text"
                            placeholder="e.g Spicy chicken burger.."
                        />
                    </div>
                    <div className="flex mt-6 ">
                        <Checkbox
                            className="h-4 w-4"
                            color="pink"
                            defaultChecked={hasVariations}
                            onChange={() => setHasProprties(!hasProprties)}
                        />
                        <label className="py-2 cursor-pointer">
                            {" "}
                            Has properties?
                        </label>
                    </div>
                    {hasProprties && (
                        <div className="mt-4 ml-6">
                            <label>Add Proprties</label>
                            <div className="w-full mt-2">
                                <SelectMultiple options={options} />
                            </div>
                        </div>
                    )}
                    <div className="flex mt-4 ">
                        <Checkbox
                            className="h-4 w-4"
                            color="pink"
                            defaultChecked={hasVariations}
                            onChange={() => setHasVariations(!hasVariations)}
                        />
                        <label className="py-2 cursor-pointer">
                            {" "}
                            Has variations?
                        </label>
                    </div>
                    {hasVariations && (
                        <div className="mt-4 ml-6">
                            <label>Add Variations</label>
                            <div className="w-full mt-2">
                                <SelectMultiple options={options} />
                            </div>
                        </div>
                    )}
                    <div className=" mt-4 ">
                        <div className="mb-2">
                            <span className=" font-semibold ">
                                Price
                                <span className="text-red-600">
                                    *
                                    <span className="text-[#158df7] font-normal">
                                        (Enter price in USD)
                                    </span>
                                </span>
                            </span>
                        </div>
                        <CountDiscountTow />
                    </div>
                    <div className="flex mt-4 ">
                        <Checkbox
                            className="h-4 w-4"
                            color="pink"
                            defaultChecked
                        />
                        <label className="py-2 cursor-pointer">
                            {" "}
                            Is Special?
                        </label>
                    </div>
                    <div className=" mt-4">
                        <div className="mb-2">
                            <span className=" font-semibold ">
                                Image
                                <span className="text-red-600">
                                    *
                                    <span className="text-[#158df7] font-normal">
                                        (300x300)
                                    </span>
                                </span>
                            </span>
                        </div>
                        <UploadImage />
                    </div>
                    <button className="text-white bg-[#f64e60] rounded-sm px-12 py-[0.375rem] mt-12 mb-2 hover:bg-[#f96674] duration-300">
                        SAVE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddNewItemPage;
