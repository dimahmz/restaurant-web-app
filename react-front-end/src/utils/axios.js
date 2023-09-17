import axios from "axios";
import ManageCookies from "./Cookies";

let token = ManageCookies.getCookie("authorization_token");
console.log(token);
const axiosInstance = axios.create({
    baseURL: "/serverip",
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default axiosInstance;
