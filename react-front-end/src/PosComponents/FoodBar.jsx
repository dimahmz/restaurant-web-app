import React, { useState } from "react";
import { Link } from "react-router-dom";

const FoodBar = ({ isOpen, onClick }) => {
    const [activeListItem, setActiveListItem] = useState("add-new");
    const [activeHeader, setActiveHeader] = useState("food");

    const handleListItemClick = (item) => {
        setActiveListItem(item);
        onClick(activeHeader); // Notify the MenuBar that a dropdown was clicked
    };

    const handleHeaderClick = (header) => {
        setActiveHeader(header);
        setActiveListItem("add-new"); // Reset active list item when header changes
        onClick(header);
    };

    const submenuItems = [
        {
            id: "add-new",
            label: "Add Item",
            to: "/dashboard/manage/food/add-new",
        },
        {
            id: "all-items",
            label: "All Items",
            to: "/dashboard/manage/food/all-items",
        },
        { id: "groups", label: "Groups", to: "/dashboard/manage/food/groups" },
        {
            id: "properties",
            label: "Properties",
            to: "/dashboard/manage/food/properties",
        },
        {
            id: "variations",
            label: "Variations",
            to: "/dashboard/manage/food/variations",
        },
        {
            id: "variations2",
            label: "Variations2",
            to: "/dashboard/manage/food/variations2",
        },
    ];

    return (
        <div className="mb-[10px]">
            <ul>
                <li
                    className={`p-[10px] text-xl hover:text-white font-bold hover:bg-[#f64e60] bg-white border border-[#f64e60] ${
                        isOpen ? "active" : ""
                    }`}
                    onClick={() => handleHeaderClick("food")}
                >
                    FOODS
                </li>
                <li className={`submenu ${isOpen ? "open" : ""}`}>
                    <ul>
                        {submenuItems.map((item) => (
                            <Link to={item.to}>
                                <li
                                    key={item.id}
                                    className={`p-[10px] cursor-pointer text-sm font-bold border-solid border-b-[1px] bg-white ${
                                        activeListItem === item.id
                                            ? "text-red-600"
                                            : ""
                                    }`}
                                    onClick={() => handleListItemClick(item.id)}
                                >
                                    - {item.label}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default FoodBar;
