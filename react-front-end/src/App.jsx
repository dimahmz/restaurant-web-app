import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import DashboardPage from "./pages/Dashboard";
import PosPage from "./pages/POS";
import OnlineOrders from "./pages/Orders/Online";
import CustomerPage from "./pages/CustomerPage";
import OnlineCustomerPage from "./pages/OnlineCustomerPage";
import KitchenOrdersPage from "./pages/KitchenOrdersPage";
import KitchenOnlineOrdesPage from "./pages/KitchenOnlineOrdesPage";
import ManagePage from "./pages/Manage";
import Food from "./pages/Manage/Food";
import AddFood from "./pages/Manage/Food/addFood";
import UpdatePassPage from "./pages/Auth/UpdatePassPage";
import {
    ProtectedRoutes,
    ProtectedRoutesToUsers,
} from "./hooks/ProtectedRoutes";
import AuthProvider from "./hooks/AuthContext";
import Layout from "./pages/Layout";
// Restaurant
import Branches from "./pages/Manage/Restaurant/branches";
import DepTags from "./pages/Manage/Restaurant/depTags";
import Payments from "./pages/Manage/Restaurant/payments";
import Tables from "./pages/Manage/Restaurant/tables";

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<ProtectedRoutesToUsers />}>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route
                        path="/reset-password"
                        element={<ResetPasswordPage />}
                    />
                </Route>
                {/* protected routes */}
                <Route element={<ProtectedRoutes />}>
                    <Route element={<Layout />}>
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/dashboard/pos" element={<PosPage />} />
                        <Route
                            path="/dashboard/pos-orders"
                            element={<OnlineOrders />}
                        />
                        <Route
                            path="/dashboard/customers"
                            element={<CustomerPage />}
                        />
                        <Route
                            path="/dashboard/online-orders"
                            element={<OnlineOrders />}
                        />
                        <Route
                            path="/dashboard/online-customers"
                            element={<OnlineCustomerPage />}
                        />
                        <Route
                            path="/dashboard/kitchen"
                            element={<KitchenOrdersPage />}
                        />
                        <Route
                            path="/dashboard/kitchen/online"
                            element={<KitchenOnlineOrdesPage />}
                        />

                        <Route
                            path="/dashboard/manage"
                            element={<ManagePage />}
                        >
                            <Route path="food">
                                <Route index element={<Food />} />
                                <Route path="add-food" element={<AddFood />} />
                            </Route>
                            <Route path="restaurant">
                                <Route path="branches" element={<Branches />} />
                                <Route path="dpt-tags" element={<DepTags />} />
                                <Route path="tables" element={<Tables />} />
                                <Route path="payments" element={<Payments />} />
                            </Route>
                        </Route>

                        <Route
                            path="/update-user-profile"
                            element={<UpdatePassPage />}
                        />
                    </Route>
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
