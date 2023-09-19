import Products from "./Products";
import BasketComponent from "./BasketComponent";
import SelectSection from "./SelectSection";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import CommissionBar from "./CommissionBar";
import GroupsBar from "./GroupsBar";
import ProprtyTable from "./ProprtyTable";
import VariationsTable from "./VariationsTable";
import OrdersNavBar from "./OrdersNavbar";
import { FaTrash } from "react-icons/fa";
import "./index.css";

const PosPage = () => {
    const [branches, setBranches] = useState([]);
    const [tables, setTables] = useState([]);
    const [foodGroups, setFoodGroups] = useState([]);
    const [commissions, setCommissions] = useState([]);

    const [selectedFoodIndex, setSelectedFoodIndex] = useState(0);
    const [selectedFoodGroup, setSelectedFoodGroup] = useState([]);
    const [selectedFoodVariation, setSelectedFoodVariation] = useState([]);
    const [selectedFoodProperties, setSelectedFoodProperties] = useState([]);
    const [selectedCommission, setSelectedCommission] = useState([]);

    const [FoodToOrder, setFoodToOrder] = useState([]);
    const [orderVariation, setOrderVariation] = useState([]);
    const [selectedPropertyItems, setSelectedPropertyItems] = useState([]);

    useEffect(() => {
        async function fetchFoods() {
            let response = await axios.get("/foods");
            if (response.data.success) {
                setFoodGroups(response.data.payload);
            }
        }
        async function fetchCommissions() {
            let response = await axios.get("/department_tags");
            if (response.data.success) {
                setCommissions(response.data.payload);
            }
        }
        async function fetchBranches() {
            let response = await axios.get("/branches");
            if (response.data.success) {
                setBranches(response.data.payload);
            }
        }
        async function fetchTables() {
            let response = await axios.get("/tables");
            if (response.data.success) {
                setTables(response.data.payload);
            }
        }
        fetchCommissions();
        fetchFoods();
        fetchBranches();
        fetchTables();
    }, []);

    // ------ adding Items ----------

    // selected group
    function handleSelectedGroup(food) {
        setSelectedFoodGroup(food);
    }
    // selected food
    function handleFoodToOrder(newFood) {
        newFood.property_items = [];
        newFood.variation_item = [];
        setFoodToOrder((prevFoodToOrder) => [...prevFoodToOrder, newFood]);
        setSelectedFoodVariation(newFood.variations);
        setSelectedFoodProperties(newFood.properties);

        if (!FoodToOrder.length === 0) {
            const index = FoodToOrder.length - 1;
            setSelectedFoodIndex(index);
        }
    }
    // handle selected order
    function handleSelcetedOrder(food, i) {
        setSelectedFoodVariation(food.variations);
        setSelectedFoodProperties(food.properties);
        setSelectedFoodIndex(i);
    }

    // order variations
    function handleorderVariation(newVariation) {
        setOrderVariation((prevorderVariation) => [
            ...prevorderVariation,
            newVariation,
        ]);
    }

    // food order
    function addOrderPropertyItem(newItem) {
        setFoodToOrder((prevFoodToOrder) => {
            const updatedFoodToOrder = [...prevFoodToOrder];
            const prevPropertyItems =
                updatedFoodToOrder[selectedFoodIndex].property_items;

            updatedFoodToOrder[selectedFoodIndex].property_items = [
                ...prevPropertyItems,
                newItem,
            ];
            return updatedFoodToOrder;
        });
    }

    // -------changing items ----------

    function changeQuantity(quantity, i) {
        setFoodToOrder((prevFoodToOrder) => {
            const updatedFoodToOrder = [...prevFoodToOrder];
            updatedFoodToOrder[i].quantity = quantity;
            return updatedFoodToOrder;
        });
    }

    function changeBranch(id, i) {
        setFoodToOrder((prevFoodToOrder) => {
            const updatedFoodToOrder = [...prevFoodToOrder];
            updatedFoodToOrder[i].branch_id = i;
            return updatedFoodToOrder;
        });
    }

    // -------- deleting Items ---------------

    // delete a food
    function removeFood(i) {
        setFoodToOrder((prevFoodToOrder) => {
            return prevFoodToOrder.filter((item, index) => index !== i);
        });
    }

    // delete a  variation
    function removeVariation(i) {
        setOrderVariation((prevVariation) => {
            return prevVariation.filter((item, index) => index !== i);
        });
    }

    // delete a  variation
    function removePropertyItems(i) {
        setSelectedPropertyItems((prevItems) => {
            return prevItems.filter((item, index) => index !== i);
        });
    }

    return (
        <div className=" bg-gray-200 w-full">
            <div className="flex items-center">
                <div className="flex-col">
                    <OrdersNavBar />
                    <div className="mt-[10px] pl-2 flex mb-[10px] overflow-y-auto">
                        <div className="max-h-[563.2px] overflow-y-auto px-1 max-w-[200px]">
                            <CommissionBar
                                data={commissions}
                                onSelectCommission={(commission) => {
                                    setSelectedCommission(commission);
                                }}
                            />
                            <GroupsBar
                                foodGroups={foodGroups}
                                onSelectGroup={handleSelectedGroup}
                            />
                        </div>
                        <div className="maw-w-[420px] max-h-[450px] overflow-y-auto py-2">
                            <Products
                                foodGroups={[]}
                                selectedFoodGroup={selectedFoodGroup}
                                onSelectFood={(food) => {
                                    handleFoodToOrder(food);
                                }}
                            />
                        </div>
                        <div className="max-h-[550px] bg-white overflow-y-auto max-w-[300px]">
                            <VariationsTable
                                variations={selectedFoodVariation}
                                onSelectVariation={(variation) => {
                                    handleorderVariation(variation);
                                }}
                            />
                            <ProprtyTable
                                title="Spice level"
                                data={selectedFoodProperties}
                                onSelectPropertyItem={(item) =>
                                    addOrderPropertyItem(item)
                                }
                            />
                        </div>
                        <SelectSection branches={branches} tables={tables} />
                    </div>
                </div>
                <div className="flex">
                    <BasketComponent
                        Dept_tag={selectedCommission}
                        FoodToOrder={FoodToOrder}
                    >
                        <tbody className="py-4">
                            {!FoodToOrder || FoodToOrder?.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="text-center text-red-700 p-6 text-sm font-bold"
                                    >
                                        Select food item to add to the list
                                    </td>
                                </tr>
                            ) : (
                                FoodToOrder.map(($food, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            selectedFoodIndex == index
                                                ? "bg-[#f64e60] text-white basket-order"
                                                : "text-black basket-order"
                                        }
                                        onClick={() =>
                                            handleSelcetedOrder($food, index)
                                        }
                                    >
                                        <td className="border-r-2 py-[5px] text-center">
                                            {index + 1}
                                        </td>
                                        <td className="border-r-2 py-[5px] flex flex-col ml-2">
                                            <button
                                                className=" w-6 mr-2 flex  bg-[#158df7]  rounded p-1"
                                                onClick={() => {
                                                    removeFood(index);
                                                }}
                                            >
                                                <FaTrash size={15} />
                                            </button>
                                            <p>{$food.name}</p>
                                            <div className="flex flex-col mt-2">
                                                <div className="flex space-x-2 my-3">
                                                    <p>Variations</p>
                                                    <div className="flex max-x-w[50px]">
                                                        {orderVariation[index]
                                                            ?.name && (
                                                            <span className="text-black text-xs bg-[#f4bd0e] rounded-full px-2 py-[2px]">
                                                                {
                                                                    orderVariation[0]
                                                                        .name
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p>Properties</p>
                                                    {$food?.property_items &&
                                                        $food.property_items.map(
                                                            (item, i) => (
                                                                <span
                                                                    key={i}
                                                                    className="text-black text-xs bg-[#f4bd0e] rounded-full px-2 py-[2px]"
                                                                >
                                                                    {item.name}
                                                                </span>
                                                            )
                                                        )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-r-2 py-[5px]">
                                            <div className="grid place-items-center text-center">
                                                <input
                                                    className="max-w-[70px] text-black py-1 px-2"
                                                    type="number"
                                                    defaultValue={1}
                                                    min={1}
                                                    onChange={(e) =>
                                                        changeQuantity(
                                                            e.target.value,
                                                            index
                                                        )
                                                    }
                                                    id="quantity"
                                                />
                                            </div>
                                        </td>
                                        <td className="border-r-2 py-[5px] text-center">
                                            {$food.price} DH
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </BasketComponent>
                </div>
            </div>
        </div>
    );
};

export default PosPage;
