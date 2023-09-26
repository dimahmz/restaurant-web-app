import axios from "axios";
import ManageCookies from "./Cookies";

const token = ManageCookies.getCookie("authorization_token");
const axiosInstance = axios.create({
  baseURL: "/serverip",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
