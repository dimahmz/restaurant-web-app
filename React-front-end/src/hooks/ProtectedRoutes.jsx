import { Outlet, Navigate } from "react-router-dom";
import { UseAuth } from "./AuthContext";

export const ProtectedRoutes = () => {
    const isUserAuthenticated = UseAuth().isUserAuthenticated();

    return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const ProtectedRoutesToUsers = () => {
    const isUserAuthenticated = UseAuth().isUserAuthenticated();

    return isUserAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
