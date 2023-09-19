import { NavLink, Outlet } from "react-router-dom";
import "./index.css";

const SubPages = [
    {
        category: "Foods",
        pages: [
            { name: "Add New Item", path: "add-food" },
            { name: "All items", path: "food" },
            { name: "Groups", path: "groups" },
            { name: "Properties", path: "propeties" },
            { name: "Variations", path: "variations" },
        ],
    },
];

const ManageSideBar = () => {
    return (
        <div className="py-2 flex-center w-full">
            <div className="w-full max-w-[1220px] flex ">
                <aside className="w-[190px]">
                    {SubPages.map((subpage, i) => (
                        <div key={i}>
                            <h1>{subpage.category}</h1>
                            <ul>
                                {subpage.pages.map((page, i) => (
                                    <li key={i}>
                                        <NavLink
                                            to={page.path}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "link-box active-link"
                                                    : "link-box"
                                            }
                                        >
                                            {page.name}
                                        </NavLink>
                                    </li>
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
