import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import CheckboxWithLabel from "./CheckboxWithLabel";
import CommissionBar from "./CommissionBar";
import GroupsBar from "./GroupsBar";
import GridItems from "./GridItem";
import VariationsTable from "./VariationsTable";
import ProprtyTable from "./ProprtyTable";
const Products = () => {
    const commissions = [
        "DINE IN",
        "xxxxxxxxxxxxx",
        "FRNG FREE",
        "TESTING USER",
        "GOOD",
    ];
    const menuItems = [
        "SEASONAL FRUIT JUICES",
        "DRY FRUIT MILKSHAKES",
        "SEASONAL MILKSHAKES",
        "FRUIT CREAMM",
        "FRIES",
        "PIZZA",
        "BURGER",
        "MILK SHAKES GROUP",
        "COFFEE",
        "MOJITO",
        "TACOS",
        "SHARMA",
        "PUNJABI",
    ];
    const [items, setItems] = useState([]);

    const clearBasket = () => {
        setItems([]); // Function to clear the basket
    };
    const gridData = [
        {
            imageUrl:
                "https://khadyo.softtechdemo.com/public//images/food_item/1689458718-323409769-654366893131782-3517675748538205122-njpg.jpg",
            label: "Lemon squash",
            stock: 10,
        },
        {
            imageUrl:
                "https://khadyo.softtechdemo.com/public//images/food_item/1689458718-323409769-654366893131782-3517675748538205122-njpg.jpg",
            label: "Item 2",
            stock: 5,
        },
        {
            imageUrl:
                "https://khadyo.softtechdemo.com/public//images/food_item/1662249823-pizza-ridajpg.jpg",
            label: "Item 3",
            stock: 20,
        },
        {
            imageUrl:
                "https://khadyo.softtechdemo.com/public//images/food_item/1685053360-64494a90d3a26png.png",
            label: "Item 4",
            stock: 15,
        },
        {
            imageUrl:
                "https://khadyo.softtechdemo.com/public//images/food_item/1685017028-screenshot-2022-04-26-162843png.png",
            label: "Item 5",
            stock: 8,
        },
        {
            imageUrl:
                "https://khadyo.softtechdemo.com/public//images/food_item/1674842211-tehbotoljpg.jpg",
            label: "Item 6",
            stock: 12,
        },
        {
            imageUrl: "https://example.com/image7.jpg",
            label: "Item 7",
            stock: 3,
        },
        {
            imageUrl: "https://example.com/image8.jpg",
            label: "Item 8",
            stock: 7,
        },
        {
            imageUrl: "https://example.com/image9.jpg",
            label: "Item 9",
            stock: 18,
        },
        {
            imageUrl: "https://example.com/image10.jpg",
            label: "Item 10",
            stock: 14,
        },
    ];
    const tableData = [
        { name: "Large", price: "5.00DH" },
        { name: "Medium", price: "4.00DH" },
        { name: "Small", price: "3.00DH" },
        { name: "Extra Large", price: "6.00DH" },
        { name: "Super Size", price: "7.50DH" },
    ];
    const tableData1 = [
        { name: "Item 1", unitPrice: "10.00" },
        { name: "Item 2", unitPrice: "15.50" },
        { name: "Item 3", unitPrice: "8.75" },
        { name: "Item 4", unitPrice: "12.25" },
        { name: "Item 5", unitPrice: "9.99" },
    ];

    return (
        <div className="w-[58.3333333333%] ">
            <div className="flex ">
                <div className="px-1 flex justify-center w-[522.65px] ">
                    <button className=" px-3 py-2 text-[12px] hover:bg-[#f64e60] hover:text-white duration-300 uppercase bg-white w-full h-full text-[#f64e60] border border-[#f64e60]">
                        Online orders
                    </button>
                </div>
                <div className="flex justify-center text-[12px] text-white w-[373.33px] ">
                    <div className="pr-1 w-[50%]">
                        <button className="px-3 py-2 w-full rounded-sm uppercase  bg-[#0dd19d]">
                            settled
                        </button>
                    </div>
                    <div className="w-[50%]">
                        <button className="px-3 py-2 w-full rounded-sm uppercase  bg-[#f64e60]">
                            submitted
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-[10px] flex flex-row">
                <div className="w-[216px] h-[563.2px] overflow-scroll px-1">
                    <CommissionBar data={commissions} />
                    <div className="mt-6">
                        <GroupsBar items={menuItems} />
                    </div>
                </div>
                <div className="flex-row flex">
                    <div className="w-[389.667px] h-[563.2px] px-1 overflow-scroll">
                        <GridItems data={gridData} />
                    </div>
                    <div className=" pl-1">
                        <div className=" w-[280.333px] h-[563.2px] bg-white overflow-scroll">
                            <div className="mt-2">
                                <VariationsTable tableData={tableData} />
                            </div>
                            <div>
                                <ProprtyTable
                                    title="Spice level"
                                    data={tableData1}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
