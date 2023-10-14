import axios from "axios";
import ManageCookies from "./Cookies";

const token = ManageCookies.getCookie("authorization_token");

const url = new window.URL(import.meta.env.VITE_BACK_END_API).href;

const axiosInstance = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
