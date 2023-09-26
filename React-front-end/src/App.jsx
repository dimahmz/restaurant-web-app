import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
import DashboardPage from "./pages/Dashboard";
import PosDashboard from "./pages/POS";
import PosOnlineOrders from "./pages/Orders/Pos_Online";
import ManagePage from "./pages/Manage";
import Food from "./pages/Manage/Food";
import AddFood from "./pages/Manage/Food/addFood";
import UpdatePassPage from "./pages/Auth/UpdatePassPage";

// Contexes
import {
  ProtectedRoutes,
  ProtectedRoutesToUsers,
} from "./context/ProtectedRoutes";
import AuthProvider from "./context/AuthContext";
import Layout from "./pages/Layout";
// Restaurant
import Branches from "./pages/Manage/Restaurant/branches";
import DepTags from "./pages/Manage/Restaurant/depTags";
import Payments from "./pages/Manage/Restaurant/payments";
import Tables from "./pages/Manage/Restaurant/tables";

// stores
import { Provider } from "react-redux";
import store from "./stores/index";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<ProtectedRoutesToUsers />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>
          {/* protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              <Route path="/dashboard">
                <Route index element={<DashboardPage />} />
                <Route path="pos" element={<PosDashboard />} />
                <Route path="pos-orders" element={<PosOnlineOrders />} />

                <Route path="online-orders" element={<PosOnlineOrders />} />
                <Route path="manage" element={<ManagePage />}>
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
              </Route>
            </Route>

            <Route path="/update-user-profile" element={<UpdatePassPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Provider>
  );
}

export default App;
