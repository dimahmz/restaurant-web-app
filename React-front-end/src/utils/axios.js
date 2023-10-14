import axios from "axios";
import ManageCookies from "./Cookies";

const token = ManageCookies.getCookie("authorization_token");

const url = import.meta.env.VITE_BACK_END_API;

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
