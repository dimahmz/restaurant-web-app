/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import SnackBar from "../../../components/snackBar";

const SelectedOrderOption = ({ OrderselectedFood, branches, changePhase }) => {
    const [foodOrder, setFoodOrder] = useState({});
    const [disbaleBtn, setDisbaleBtn] = useState(false);
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setFoodOrder(() => {
            const addFoodOrder = { ...OrderselectedFood };
            addFoodOrder.order_branch_id = null;
            addFoodOrder.order_variation = null;
            addFoodOrder.order_property_items = [];
            addFoodOrder.order_quantity = 1;
            addFoodOrder.order_delivery_address = "";
            addFoodOrder.order_note_to_rider = "";
            return addFoodOrder;
        });
    }, [OrderselectedFood]);

    function addVariation(variation) {
        setFoodOrder((prevOrder) => {
            const updatedOrder = prevOrder;
            updatedOrder.order_variation = variation;
            return updatedOrder;
        });
    }
    function addPropertyItems(addIt, item) {
        setFoodOrder((prevOrder) => {
            if (addIt) {
                const updatedOrder = prevOrder;
                updatedOrder.order_property_items.push(item);
                return updatedOrder;
            }
        });
    }

    function addBranch(id) {
        setFoodOrder((prevOrder) => {
            const updatedOrder = prevOrder;
            updatedOrder.order_branch_id = id;
            return updatedOrder;
        });
    }

    function addToCart() {
        if (!foodOrder.id) {
            setMessage("Select a food");
            setOpen(true);
            return;
        }
        if (!foodOrder.order_branch_id) {
            setMessage("Select a branch");
            setOpen(true);
            return;
        }
        if (
            OrderselectedFood.variations.length > 0 &&
            !foodOrder.order_variation
        ) {
            setMessage("You must select a variation");
            setOpen(true);
            return;
        }

        changePhase(1, foodOrder);
    }

    return (
        <>
            <SnackBar
                message={message}
                open={open}
                handleClose={() => {
                    setOpen(false);
                }}
            />
            <div className="relative overflow-y-auto p-4 h-full max-h-[75vh]">
                {Object.entries(OrderselectedFood).length === 0 ? (
                    <div className="bg-white  h-1/2 text-center">
                        <h2>No item added</h2>
                    </div>
                ) : (
                    <form className="flex-column py-5 space-y-5">
                        <div className="flex-column space-y-3">
                            <label>Select a branch</label>
                            <select
                                onChange={(e) => {
                                    addBranch(e.target.value);
                                }}
                            >
                                <option value={null}>
                                    Please select a branch
                                </option>

                                {branches.map((branch, i) => (
                                    <option key={i} value={branch.id}>
                                        {branch.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex justify-between">
                            <p>Base Price</p>
                            <p>{OrderselectedFood.price} DH </p>
                        </div>
                        <div className="flex-column space-y-2">
                            {/* Loop throughout the variations */}
                            <p>Variations</p>
                            {!OrderselectedFood.variations?.length ? (
                                <p className="text-center">
                                    Food doesn&apos;t have any variations
                                </p>
                            ) : (
                                OrderselectedFood.variations.map(
                                    (variation, i) => (
                                        <div
                                            className="flex justify-between px-2"
                                            key={i}
                                        >
                                            <div className="flex space-x-3">
                                                <input
                                                    type="checkbox"
                                                    name={variation.name}
                                                    onChange={() => {
                                                        addVariation(variation);
                                                    }}
                                                />
                                                <label htmlFor={variation.name}>
                                                    {variation.name}
                                                </label>
                                            </div>
                                            <p>{variation.pivot.price} DH</p>
                                        </div>
                                    )
                                )
                            )}
                        </div>

                        {/* Loop throughout the propeties */}
                        {OrderselectedFood.hasOwnProperty("properties") &&
                            OrderselectedFood.properties.map((property, i) => (
                                <div className="flex-column space-y-3" key={i}>
                                    <hr className="h-0.5 bg-black my-1" />
                                    <p>{property.name}</p>
                                    <div className="flex-column space-y-3">
                                        {property.property_items.map(
                                            (item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between px-2"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name={item.name}
                                                        onChange={(e) => {
                                                            addPropertyItems(
                                                                e.target
                                                                    .checked,
                                                                item
                                                            );
                                                        }}
                                                    />
                                                    <label htmlFor={item.name}>
                                                        {item.name}
                                                    </label>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                    </form>
                )}
            </div>
            <div className="absolute bottom-0 py-4 w-full flex-center bg-white ">
                <button
                    onClick={addToCart}
                    className={`sidebar-btn ${
                        disbaleBtn ? "bg-red-300 cursor-not-allowed" : ""
                    }`}
                    disabled={disbaleBtn}
                >
                    ADD TO CART
                </button>
            </div>
        </>
    );
};

export default SelectedOrderOption;
