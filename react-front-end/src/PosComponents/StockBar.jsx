import React, { useState } from "react";
import { Link } from "react-router-dom";

const StockBar = ({ isOpen, onClick }) => {
    const [activeListItem, setActiveListItem] = useState("");
    const [activeHeader, setActiveHeader] = useState("user");

    const handleListItemClick = (item) => {
        setActiveListItem(item);
        onClick(activeHeader); // Notify the MenuBar that a dropdown was clicked
    };

    const handleHeaderClick = (header) => {
        setActiveHeader(header);
        setActiveListItem(""); // Reset active list item when header changes
        onClick(header);
    };

    const submenuItems = [
        {
            id: "food-purchase",
            label: "Food Purchase",
            to: "/dashboard/manage/stock/food-purchase",
        },
        {
            id: "purchase-history",
            label: "Purchase History",
            to: "/dashboard/manage/stock/purchase-history-food",
        },
        {
            id: "ingredient-group",
            label: "Ingredient Group",
            to: "/dashboard/manage/stock/ingredient-group",
        },
        {
            id: "ingredient-item",
            label: "Ingredient Item",
            to: "/dashboard/manage/stock/ingredient-item",
        },
        {
            id: "ingredient-purchase",
            label: "Ingredient Purchase ",
            to: "/dashboard/manage/stock/purchase-ingredient",
        },
        {
            id: "ingredient-purchase-history",
            label: "Ingredient Purchase History",
            to: "/dashboard/manage/stock/purchase-history-ingredient",
        },
        {
            id: "manage-supplier",
            label: "Manage Supplier",
            to: "/dashboard/manage/stock/manage-supplier",
        },
        {
            id: "supplier-history",
            label: "Supplier History",
            to: "/dashboard/manage/stock/supplier-history",
        },
    ];

    return (
        <div className="mb-[10px]">
            <div
                className={`p-[10px] text-xl hover:text-white font-bold hover:bg-[#f64e60] bg-white border border-[#f64e60] ${
                    isOpen ? "active" : ""
                }`}
                onClick={() => handleHeaderClick("user")}
            >
                MANAGE STOCK
            </div>
            <ul className={`submenu ${isOpen ? "open" : ""}`}>
                {submenuItems.map((item) => (
                    <Link to={item.to} key={item.id}>
                        <li
                            className={`p-[10px] border-b-[1px] text-sm font-bold border-solid bg-white ${
                                activeListItem === item.id ? "text-red-600" : ""
                            }`}
                            onClick={() => handleListItemClick(item.id)}
                        >
                            - {item.label}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default StockBar;
