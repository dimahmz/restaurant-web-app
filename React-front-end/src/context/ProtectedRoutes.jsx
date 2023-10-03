import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoutes = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.user.userProfile.isLoggedIn
  );
  const userRole = useSelector((state) => state.user.userProfile.role_id);

  return isUserAuthenticated && userRole == 1 ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export const ProtectedRoutesToUsers = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.user.userProfile.isLoggedIn
  );

  return isUserAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
