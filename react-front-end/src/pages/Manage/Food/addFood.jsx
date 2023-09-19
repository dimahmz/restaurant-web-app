import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Checkbox } from "@material-tailwind/react";
import SelectOption from "../../../components/SelectOption";
import MultipleSelectChip from "../../../components/MultipleSelect";
import { Food, Group, Property, Variation } from "../../../APIs/Food";
import VariationPrice from "../../../components/VariationPrice";
import SnackBar from "../../../components/snackBar";
import getResponseMessage from "../../../utils/getResponse";

const AddNewItemPage = () => {
    const [hasVariations, setHasVariations] = useState(false);
    const [hasProprties, setHasProprties] = useState(false);

    const [foodGroups, setFoodGroups] = useState([]);

    const [foodProperties, setFoodProperties] = useState([]);
    const [foodVariations, setFoodVariations] = useState([]);

    const [selectedVariations, setSelectedVariations] = useState([]);

    const [selectedProperties, setSelectedProperties] = useState([]);

    const [food_group_id, setFoodGroupID] = useState(null);

    const [selectedVariationsPrices, setSelectedVariationsPrices] = useState(
        []
    );

    const [message, setMessage] = useState("Food item has been added");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState("success");

    useEffect(() => {
        async function fetchFoodGroups() {
            const response = await Group.get();
            if (response.success) {
                setFoodGroups(response.payload);
            }
        }
        async function fetchFoodProperties() {
            const response = await Property.get();
            if (response.success) {
                setFoodProperties(response.payload);
            }
        }
        async function fetchVariations() {
            const response = await Variation.get();
            if (response.success) {
                setFoodVariations(response.payload);
            }
        }

        fetchFoodGroups();
        fetchFoodProperties();
        fetchVariations();
    }, []);

    function onSelectVariation(selectedVariations) {
        setSelectedVariations(selectedVariations);
    }

    async function AddNewFoodItem(e) {
        e.preventDefault();
        const name = e.target["food_name"].value;
        const image = e.target["image"].files[0];
        const price = e.target["price"].value;
        const is_special = e.target["is_special"].value ? 1 : 0;
        const properties_IDs = selectedProperties.map((property) => {
            return property.id;
        });
        const newFood = {
            name,
            image,
            price,
            properties_IDs,
            food_group_id,
            is_special,
        };
        const response = await Food.create(newFood);
        if (!response.success) {
            const msg = getResponseMessage(response);

            setMessage(msg);
            setSeverity("error");
        } else {
            setMessage("Food item has been added");
            setSeverity("success");
        }

        setOpen(true);
    }

    return (
        <>
            <SnackBar
                message={message}
                open={open}
                severity={severity}
                handleClose={() => {
                    setOpen(false);
                }}
            />

            <div className="w-fulltext-[#121053] text-sm bg-white h-[580px] overflow-scroll ">
                <p className="py-[15px] text-[#121053] text-lg font-bold">
                    Add New Item
                </p>
                <form
                    encType="multipart/form-data"
                    onSubmit={AddNewFoodItem}
                    className=" p-2 mx-2 mb-12 rounded-lg border-[1px] border-solid"
                >
                    <div className="mt-2">
                        <div className="mb-2">
                            <label className=" font-semibold ">
                                Food Group
                                <span className="text-red-600">*</span>
                            </label>
                        </div>
                        <div>
                            <SelectOption
                                options={foodGroups}
                                onSelectOption={(id) => {
                                    setFoodGroupID(id);
                                }}
                            />
                        </div>
                    </div>
                    <div className=" mt-4">
                        <label className=" font-semibold mb-2">
                            Name
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            className="w-full border rounded-sm px-3 mb-2 py-[0.375rem]"
                            type="text"
                            placeholder="e.g Spicy chicken burger.."
                            name="food_name"
                            required
                        />
                    </div>
                    <div className="flex">
                        <Checkbox
                            className="h-4 w-4"
                            color="pink"
                            defaultChecked={hasVariations}
                            onChange={() => setHasProprties(!hasProprties)}
                        />
                        <label className="py-2 cursor-pointer">
                            Has properties?
                        </label>
                    </div>
                    {hasProprties && (
                        <div className="">
                            <label>Add Proprties</label>
                            <div className="w-full mt-2">
                                <MultipleSelectChip
                                    options={foodProperties}
                                    onSelectOption={(IDs) => {
                                        setSelectedProperties(IDs);
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    <div className="flex">
                        <Checkbox
                            className="h-4 w-4"
                            color="pink"
                            defaultChecked={hasVariations}
                            onChange={() => setHasVariations(!hasVariations)}
                        />
                        <label className="py-2 cursor-pointer">
                            Has variations?
                        </label>
                    </div>
                    {hasVariations && (
                        <div className="">
                            <label>Add Variations</label>
                            <div className="w-full">
                                <MultipleSelectChip
                                    options={foodVariations}
                                    onSelectOption={onSelectVariation}
                                />
                            </div>
                            {selectedVariations.length > 0 && (
                                <section className="bg-[#ebeef6] px-3 py-4">
                                    <h1>
                                        Please enter price for each variation
                                    </h1>
                                    <VariationPrice
                                        variations={selectedVariations}
                                    />
                                </section>
                            )}
                        </div>
                    )}
                    <div className="">
                        <label className="font-semibold ">
                            Price
                            <span className="text-red-600">
                                *
                                <span className="text-[#158df7] font-normal">
                                    (Enter price in USD)
                                </span>
                            </span>
                        </label>
                        <div>
                            <TextField
                                sx={{ width: "100%" }}
                                label="Number"
                                type="number"
                                min={1}
                                name="price"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex">
                        <Checkbox
                            className="h-4 w-4"
                            color="pink"
                            defaultChecked
                            name="is_special"
                        />
                        <label className="py-2 cursor-pointer">
                            {" "}
                            Is Special?
                        </label>
                    </div>
                    <div className="">
                        <label className=" font-semibold ">
                            Image
                            <span className="text-[#158df7] font-normal">
                                (300x300)
                            </span>
                        </label>
                        <div>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                required
                            />
                        </div>
                    </div>
                    <button className="text-white bg-[#f64e60] rounded-sm px-12 py-[0.375rem] mt-12 mb-2 hover:bg-[#f96674] duration-300">
                        SAVE
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddNewItemPage;
