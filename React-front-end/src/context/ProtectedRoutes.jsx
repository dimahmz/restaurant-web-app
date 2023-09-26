import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingPage from "../pages/Loading";

export const ProtectedRoutes = () => {
  const isLoading = useSelector((state) => state.user.isLoading);

  const isUserAuthenticated = useSelector(
    (state) => state.user.userProfile.isLoggedIn
  );

  if (isLoading) return <LoadingPage />;

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const ProtectedRoutesToUsers = () => {
  const isUserAuthenticated = useSelector(
    (state) => state.user.userProfile.isLoggedIn
  );

  return isUserAuthenticated ? <Navigate to="/" /> : <Outlet />;
};
