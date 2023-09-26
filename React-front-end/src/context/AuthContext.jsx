/* eslint-disable react/prop-types */
import { useContext, createContext, useEffect } from "react";
import ManageCookies from "../utils/Cookies";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import User from "../APIs/User";
import { update_login_state } from "../stores/user";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fetch the user data when the component (page) is mounted
  useEffect(() => {
    fetchUser();
  }, []);

  // fetch the user if he is authenticated
  const fetchUser = async () => {
    if (!ManageCookies.getCookie("authorization_token")) {
      dispatch(update_login_state(false));
      return;
    }

    const response = await User.getUser();

    response.success
      ? dispatch(update_login_state(true))
      : resetAuthenticationState();
  };

  //to authenticate a user
  async function AuthenticateUser(userInfo, rememberUser) {
    const response = await User.authenticateUser(userInfo);

    if (!response.success) {
      resetAuthenticationState();
    } else {
      dispatch(update_login_state(true));

      // store the user token
      ManageCookies.setCookie(
        "authorization_token",
        response.payload.token,
        rememberUser ? 100 : 0
      );
    }

    return response;
  }

  // remove variables related to authentication state
  const resetAuthenticationState = () => {
    dispatch(update_login_state(false));
    ManageCookies.removeCookie("authorization_token");
  };

  // to log out the user
  async function LogoutUser() {
    const response = await User.logOut();
    if (response.success) resetAuthenticationState();
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
