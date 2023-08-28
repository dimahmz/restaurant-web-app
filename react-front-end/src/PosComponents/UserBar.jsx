import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserBar = ({ isOpen, onClick }) => {
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
            id: "admin-staff",
            label: "Admin / Staff",
            to: "/dashboard/manage/user/admin-staff",
        },
        {
            id: "customers",
            label: "Customers",
            to: "/dashboard/manage/user/customers",
        },
        {
            id: "waiters",
            label: "Waiters",
            to: "/dashboard/manage/user/waiters",
        },
        {
            id: "role-groups",
            label: "Role Groups",
            to: "/dashboard/manage/user/role-groups",
        },
        {
            id: "delivery-user",
            label: "Delivery User",
            to: "/dashboard/manage/user/delivery-user",
        },
    ];

    return (
        <div className="mb-[10px]">
            <ul>
                <li
                    className={`p-[10px] text-xl hover:text-white font-bold hover:bg-[#f64e60] bg-white border border-[#f64e60] ${
                        isOpen ? "active" : ""
                    }`}
                    onClick={() => handleHeaderClick("user")}
                >
                    USER MANAGEMENT
                </li>
                <ul className={`submenu ${isOpen ? "open" : ""}`}>
                    {submenuItems.map((item) => (
                        <Link to={item.to} key={item.id}>
                            <li
                                className={`p-[10px] border-b-[1px] text-sm font-bold border-solid bg-white ${
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
            </ul>
        </div>
    );
};

export default UserBar;
