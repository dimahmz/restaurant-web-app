import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const SubPages = [
    {
        category: "Foods",
        pages: [
            { name: "Add New Item", path: "food/add-food" },
            { name: "All items", path: "food" },
            { name: "Groups", path: "food/groups" },
            { name: "Properties", path: "food/propeties" },
            { name: "Variations", path: "food/variations" },
        ],
    },
    {
        category: "Restaurant",
        pages: [
            { name: "Branches", path: "restaurant/branches" },
            { name: "Dept Tags", path: "restaurant/dpt-tags" },
            { name: "Tables", path: "restaurant/tables" },
            { name: "Payment Types", path: "restaurant/payments" },
        ],
    },
];

const ManageSideBar = () => {
    const [selecteSubPagesIndex, setSelecteSubPagesIndex] = useState(0);
    return (
        <div className="py-2 flex-center w-full">
            <div className="w-full max-w-[1220px] flex space-x-3">
                <aside className="w-[206px] max-h-[410px] overflow-y-auto space-y-2">
                    {SubPages.map((subpage, i) => (
                        <div key={i} className="bg-white ">
                            <h1
                                className="cursor-pointer bg-[#f64e60] text-white py-2 px-3 uppercase text-base font-semibold "
                                onClick={() => setSelecteSubPagesIndex(i)}
                            >
                                {subpage.category}
                            </h1>

                            <ul
                                className={`pages-links ${
                                    selecteSubPagesIndex === i
                                        ? "show-links"
                                        : ""
                                }`}
                            >
                                {subpage.pages.map((page, i) => (
                                    <NavLink
                                        key={i}
                                        to={page.path}
                                        className={({ isActive }) =>
                                            isActive ? "active-link" : ""
                                        }
                                    >
                                        <li className="border-b-2 py-2 px-4">
                                            - {page.name}
                                        </li>
                                    </NavLink>
                                ))}
                            </ul>
                        </div>
                    ))}
                </aside>
                <section className="w-full">
                    <Outlet />
                </section>
            </div>
        </div>
    );
};

export default ManageSideBar;
