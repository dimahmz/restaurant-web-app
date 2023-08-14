import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DashboardPage from "./pages/DashboardPage";
import PosPage from "./pages/PosPage";
import HistoriquePage from "./pages/HistoriquePage";
import OnlineHistoryPage from "./pages/OnlineHistoryPage";
import CustomerPage from "./pages/CustomerPage";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/pos" element={<PosPage />} />
            <Route path="/dashboard/orders" element={<HistoriquePage />} />
            <Route path="/dashboard/customers" element={<CustomerPage />} />
            <Route
              path="/dashboard/online-orders"
              element={<OnlineHistoryPage />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
