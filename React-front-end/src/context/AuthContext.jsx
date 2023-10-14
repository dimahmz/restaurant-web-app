/* eslint-disable react/prop-types */
import { useContext, createContext, useEffect } from "react";
import ManageCookies from "../utils/Cookies";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import User from "../APIs/User";
import {
  update_login_state,
  set_user_profile,
  update_loading,
} from "../stores/user";
import axiosInstance from "../utils/axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fetch the user if he is authenticated
  const fetchUser = async () => {
    if (!ManageCookies.getCookie("authorization_token")) {
      resetAuthState();
      return;
    }

    dispatch(update_loading(true));
    const response = await User.getUser();

    response.success ? setAuthState(response.payload) : resetAuthState();

    dispatch(update_loading(false));
  };

  // fetch the user data when the component (page) is mounted
  useEffect(() => {
    fetchUser();
  }, []);

  //to authenticate a user
  async function AuthenticateUser(userInfo, rememberUser) {
    const response = await User.authenticateUser(userInfo);

    if (!response.success) {
      resetAuthState();
    } else {
      setAuthState(response.payload.user);
      // store the user token
      ManageCookies.setCookie(
        "authorization_token",
        response.payload.token,
        rememberUser ? 100 : 0
      );
      axiosInstance.defaults.headers[
        "Authorization"
      ] = `Bearer ${response.payload.token}`;
    }

    return response;
  }

  // remove variables related to authentication state
  const resetAuthState = () => {
    dispatch(update_login_state(false));
    ManageCookies.removeCookie("authorization_token");
  };

  const setAuthState = (userData) => {
    dispatch(update_login_state(true));
    dispatch(set_user_profile(userData));
  };

  // to log out the user
  async function LogoutUser() {
    dispatch(update_loading(true));
    const response = await User.logOut();
    if (response.success) resetAuthState();
    dispatch(update_loading(false));

    navigate("/");
  }

  let userContext = {
    AuthenticateUser,
    LogoutUser,
    fetchUser,
  };

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
}

export const UseAuth = () => useContext(AuthContext);
