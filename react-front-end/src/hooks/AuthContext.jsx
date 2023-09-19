/* eslint-disable react/prop-types */
import { useContext, createContext, useEffect } from "react";
import axios from "../utils/axios";
import ManageCookies from "../utils/Cookies";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const navigate = useNavigate();

    // const [isLoading, setLoading] = useState(false);
    let isLoading = false;
    const setIsLoading = (newValue) => {
        isLoading = newValue;
    };

    // const [userContext, setUserContext] = useState({
    //     user: {},
    //     isAuthenticated: false,
    //     AuthenticateUser,
    //     LogoutUser,
    // });
    const setUserContext = (newProp) => {
        const newUserContext = {
            ...userContext,
            ...newProp,
        };
        // console.log(newUserContext, "\n", newProp);
        userContext = { ...newUserContext };
    };

    // fech the user data when the compoenent (page) is mounted
    useEffect(() => {
        loaderHandler();
        fetchUser();
    }, []);

    const loaderHandler = () => {
        isLoading = !isLoading;
    };

    // fech the user if he is authenticated
    const fetchUser = async () => {
        if (!ManageCookies.getCookie("authorization_token")) {
            resetAuthenticationState();
            return null;
        }

        try {
            var response = await axios.get("/user");
            setIsLoading(false);
        } catch (e) {
            response = e.response;
        } finally {
            response = response.data;
            if (response.success) {
                localStorage.setItem("isAuthenticated", response.success);
                setUserContext({
                    isAuthenticated: response.success,
                    user: response.data,
                });
            }
        }
        return response;
    };

    //to authenticate a user
    async function AuthenticateUser(userInfo, rememberUser) {
        try {
            var response = await axios.post("/login", {
                email: userInfo.email,
                password: userInfo.password,
            });

            // updateUserContext(response.data);
            const responseData = response.data;
            storeUserState(rememberUser, responseData);
            return responseData;
        } catch (error) {
            return error.response.data;
        }
    }
    // to register a new user
    async function RgisterUser(userInfo) {
        try {
            var response = await axios.post("/signup", {
                name: userInfo.name,
                email: userInfo.email,
                password: userInfo.password,
                password_confirmation: userInfo.password_confirmation,
                phone: userInfo.phone,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }

    // remove vars related to authentication
    const resetAuthenticationState = () => {
        localStorage.removeItem("isAuthenticated");
        sessionStorage.removeItem("isAuthenticated");
        ManageCookies.removeCookie("authorization_token");
    };

    // get user authetiaction state
    const isUserAuthenticated = () => {
        return JSON.parse(
            sessionStorage.getItem("isAuthenticated") ||
                localStorage.getItem("isAuthenticated")
        );
    };

    const storeUserState = (rememberUser, response) => {
        if (rememberUser) {
            ManageCookies.setCookie(
                "authorization_token",
                response.payload.token,
                100
            );
            localStorage.setItem("isAuthenticated", JSON.stringify(true));
        } else {
            sessionStorage.setItem("isAuthenticated", JSON.stringify(true));
            ManageCookies.setCookie(
                "authorization_token",
                response.payload.token,
                0
            );
        }
    };
    // update the user context State
    // const updateUserContext = (responseData) => {
    //     setUserContext((prevContext) => ({
    //         ...prevContext,
    //         isAuthenticated: responseData.success,
    //         user: responseData.data,
    //     }));
    // };

    // to log out the user
    async function LogoutUser() {
        try {
            await axios.post("/user/logout");
            resetAuthenticationState();
            navigate("/");
        } catch (error) {
            const response = error.response;
            if (response?.data?.message) return response?.data?.message;
            return response?.data?.payload;
        }
    }

    let userContext = {
        user: {},
        AuthenticateUser,
        LogoutUser,
        fetchUser,
        isUserAuthenticated,
        RgisterUser,
    };

    return (
        <AuthContext.Provider value={userContext}>
            {children}
        </AuthContext.Provider>
    );
}

export const UseAuth = () => useContext(AuthContext);
