import React, { useState } from "react";

const UserNavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex items-center justify-between  p-2">
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    className="text-black hover:text-gray-300"
                    onClick={toggleDropdown}
                >
                    Admin
                </button>
                <div
                    className={`absolute  z-50 right-0 text-xs font-bold mt-2 px-4 py-2 w-36 bg-white rounded-lg shadow-lg ${
                        isDropdownOpen ? "" : "hidden"
                    }`}
                >
                    <a
                        href="/update-user-profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Change Password
                    </a>
                    <a
                        href="/dashboard/"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                        Dashboard
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-gray-800 border-t-2 hover:bg-gray-100"
                    >
                        LogOut
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserNavBar;
