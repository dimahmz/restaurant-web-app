import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const SubPages = [
  {
    category: "Foods",
    pages: [
      { name: "Add New Item", path: "food/add-food" },
      { name: "All items", path: "food/" },
      { name: "Groups", path: "food/groups" },
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
  {
    category: "Manage stock",
    pages: [
      { name: "Food Purchase", path: "restaurant/purchases" },
      { name: "Purchase History", path: "restaurant/food-purchase" },
      { name: "Manange Supplier", path: "restaurant/suppliers" },
    ],
  },
];

const ManageSideBar = () => {
  const [selecteSubPagesIndex, setSelecteSubPagesIndex] = useState(0);
  return (
    <div className="py-1 flex justify-center w-full space-x-4">
      <aside className="w-[246px] max-h-[75vh] overflow-y-auto space-y-2">
        {SubPages.map((subpage, i) => (
          <div key={i} className="bg-white ">
            <h1
              className={`${
                selecteSubPagesIndex == i ? "selected-sub-pages" : ""
              }
              cursor-pointer border border-[#f64e60] text-black py-2 px-3 uppercase text-base font-semibold hover:bg-red-600 hover:text-white`}
              onClick={() => setSelecteSubPagesIndex(i)}
            >
              {subpage.category}
            </h1>

            <ul
              className={`pages-links ${
                selecteSubPagesIndex === i ? "show-links" : ""
              }`}
            >
              {subpage.pages.map((page, i) => (
                <NavLink
                  key={i}
                  to={page.path}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  <li className="border-b-2 py-2 px-4">- {page.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <section className="w-full max-w-[800px] h-[75vh] overflow-y-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default ManageSideBar;
