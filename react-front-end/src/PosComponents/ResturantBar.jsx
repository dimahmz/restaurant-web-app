import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResturantBar = ({ isOpen, onClick }) => {
    const [activeListItem, setActiveListItem] = useState("");
    const [activeHeader, setActiveHeader] = useState("resturant");

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
            id: "branches",
            label: "Branches",
            to: "/dashboard/manage/resturant/branches",
        },
        {
            id: "dept-tags",
            label: "Dept Tags",
            to: "/dashboard/manage/resturant/dept-tags",
        },
        {
            id: "tables",
            label: "Tables",
            to: "/dashboard/manage/resturant/tables",
        },
        {
            id: "payment-types",
            label: "Payment Types",
            to: "/dashboard/manage/resturant/payment-types",
        },
    ];

    return (
        <div className="mb-[10px]">
            <ul>
                <li
                    className={`p-[10px] text-xl hover:text-white font-bold hover:bg-[#f64e60] bg-white border border-[#f64e60] ${
                        isOpen ? "active" : ""
                    }`}
                    onClick={() => handleHeaderClick("resturant")}
                >
                    RESTURANT
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

export default ResturantBar;
