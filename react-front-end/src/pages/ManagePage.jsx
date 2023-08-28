import React from "react";
import NewGroup from "./ManagePages/AddNew/NewGroup";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useNavigate,
    Outlet,
} from "react-router-dom";
import NavBar from "../PosComponents/NavBar";
import MenuBar from "../PosComponents/MenuBar";
import AddNewItemPage from "./ManagePages/AddNewItemPage";
import ItemListePage from "./ManagePages/ItemListePage";
import GroupListPage from "./ManagePages/GroupListPage";
import PropertiesPage from "./ManagePages/PropertiesPage";
import VariationsPage from "./ManagePages/VariationsPage";
import AdminStaffPage from "./ManagePages/AdminStaffPage";
import CustomersPage from "./ManagePages/CustomersPage";
import WaitersPage from "./ManagePages/WaitersPage";
import DileveryUser from "./ManagePages/DileveryUser";
import RoleGroupsPage from "./ManagePages/RoleGroupsPage";
import DeptTagsPage from "./ManagePages/DeptTagsPage";
import TablesPage from "./ManagePages/TablesPage";
import PaymentTypesPage from "./ManagePages/PaymentTypesPage";
import BranchesPage from "./ManagePages/BranchesPage";
import Footer from "../PosComponents/Footer";
const ManagePage = () => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;
    return (
        <div className="h-screen bg-gray-200">
            <NavBar />
            <div className="mt-[10px] mb-1">
                <div className="max-w-[1320px] m-auto p-4 flex">
                    <MenuBar />
                    <div className="w-full">
                        {currentPath === "/dashboard/manage/food/add-new" && (
                            <AddNewItemPage />
                        )}
                        {currentPath === "/dashboard/manage/food/all-items" && (
                            <ItemListePage />
                        )}
                        {currentPath === "/dashboard/manage/food/groups" && (
                            <GroupListPage />
                        )}
                        {currentPath ===
                            "/dashboard/manage/food/properties" && (
                            <PropertiesPage />
                        )}
                        {currentPath ===
                            "/dashboard/manage/food/variations" && (
                            <VariationsPage />
                        )}
                        {currentPath ===
                            "/dashboard/manage/user/admin-staff" && (
                            <AdminStaffPage />
                        )}
                        {currentPath === "/dashboard/manage/user/customers" && (
                            <CustomersPage />
                        )}
                        {currentPath === "/dashboard/manage/user/waiters" && (
                            <WaitersPage />
                        )}
                        {currentPath ===
                            "/dashboard/manage/user/delivery-user" && (
                            <DileveryUser />
                        )}
                        {currentPath ===
                            "/dashboard/manage/user/role-groups" && (
                            <RoleGroupsPage />
                        )}
                        {currentPath ===
                            "/dashboard/manage/resturant/branches" && (
                            <BranchesPage />
                        )}
                        {currentPath ===
                            "/dashboard/manage/resturant/dept-tags" && (
                            <DeptTagsPage />
                        )}
                        {currentPath ===
                            "/dashboard/manage/resturant/tables" && (
                            <TablesPage />
                        )}
                        {currentPath ===
                            "/dashboard/manage/resturant/payment-types" && (
                            <PaymentTypesPage />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ManagePage;
