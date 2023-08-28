import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import PosPage from "./pages/PosPage";
import HistoriquePage from "./pages/HistoriquePage";
import OnlineHistoryPage from "./pages/OnlineHistoryPage";
import CustomerPage from "./pages/CustomerPage";
import OnlineCustomerPage from "./pages/OnlineCustomerPage";
import KitchenOrdersPage from "./pages/KitchenOrdersPage";
import KitchenOnlineOrdesPage from "./pages/KitchenOnlineOrdesPage";
import ManagePage from "./pages/ManagePage";
import UpdatePassPage from "./pages/UpdatePassPage";
import {
    ProtectedRoutes,
    ProtectedRoutesToUsers,
} from "./hooks/ProtectedRoutes";
import AuthProvider from "./hooks/AuthContext";

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
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/dashboard/pos" element={<PosPage />} />
                    <Route
                        path="/dashboard/orders"
                        element={<HistoriquePage />}
                    />
                    <Route
                        path="/dashboard/customers"
                        element={<CustomerPage />}
                    />
                    <Route
                        path="/online-orders"
                        element={<OnlineHistoryPage />}
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
                        path="/dashboard/manage/*"
                        element={<ManagePage />}
                    />
                    <Route
                        path="/update-user-profile"
                        element={<UpdatePassPage />}
                    />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
