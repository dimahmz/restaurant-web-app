import React, { useState } from "react";
import FoodBar from "./FoodBar";
import UserBar from "./UserBar";
import ResturantBar from "./ResturantBar";
import StockBar from "./StockBar";

const MenuBar = () => {
    const [openDropdown, setOpenDropdown] = useState("food");

    return (
        <div className="pr-[20px]">
            <div className="w-[209.33px] h-[563.2px] pb-5 overflow-scroll">
                <FoodBar
                    isOpen={openDropdown === "food"}
                    onClick={() => setOpenDropdown("food")}
                />
                <UserBar
                    isOpen={openDropdown === "user"}
                    onClick={() => setOpenDropdown("user")}
                />
                <ResturantBar
                    isOpen={openDropdown === "resturant"}
                    onClick={() => setOpenDropdown("resturant")}
                />
                <StockBar
                    isOpen={openDropdown === "stock"}
                    onClick={() => setOpenDropdown("stock")}
                />
            </div>
        </div>
    );
};

export default MenuBar;
