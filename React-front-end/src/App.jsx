import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Auth/LoginPage";
import SignUpPage from "./pages/Auth/SignUpPage";
import ResetPasswordPage from "./pages/Auth/ResetPasswordPage";
// Dashboard
import DashboardPage from "./pages/Dashboard";
import PosDashboard from "./pages/POS";
import PosOnlineOrders from "./pages/Orders/Pos_Online";
import Kichen from "./pages/Kitchen";
// manage
import ManagePage from "./pages/Manage";
// import Food from "./pages/Manage/Food";
import Groups from "./pages/Manage/Food/Goups";
// import AddFood from "./pages/Manage/Food/addFood";
import Variations from "./pages/Manage/Food/Variations";

import UpdatePassPage from "./pages/Auth/UpdatePassPage";

// Contexes
import {
  ProtectedRoutes,
  ProtectedRoutesToUsers,
} from "./context/ProtectedRoutes";
import AuthProvider from "./context/AuthContext";
import Layout from "./pages/Layout";
// Restaurant
import Branches from "./pages/Manage/Restaurant/Branches";
import DeptTags from "./pages/Manage/Restaurant/DeptTags";
import Payments from "./pages/Manage/Restaurant/PaymentsTypes";
import Tables from "./pages/Manage/Restaurant/Tables";

import LoadingContext from "./context/LoadingContext";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Auth loader */}
        <Route element={<LoadingContext />}>
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
                <Route path="kitchen" element={<Kichen />} />
                <Route path="manage" element={<ManagePage />}>
                  <Route path="food">
                    {/* <Route index element={<Food />} /> */}
                    {/* <Route path="add-food" element={<AddFood />} /> */}
                    <Route path="groups" element={<Groups />} />
                    <Route path="variations" element={<Variations />} />
                  </Route>
                  <Route path="restaurant">
                    <Route path="branches" element={<Branches />} />
                    <Route path="dpt-tags" element={<DeptTags />} />
                    <Route path="tables" element={<Tables />} />
                    <Route path="payments" element={<Payments />} />
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path="/update-user-profile" element={<UpdatePassPage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
