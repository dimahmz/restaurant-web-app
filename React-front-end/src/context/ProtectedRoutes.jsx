import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoutes = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.user.userProfile.isLoggedIn
  );

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const ProtectedRoutesToUsers = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.user.userProfile.isLoggedIn
  );

  return isUserAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
