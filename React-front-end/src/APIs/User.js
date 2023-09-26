import axios from "../utils/axios";

export default class User {
  static async getUser() {
    try {
      const response = await axios.get("/user");
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async authenticateUser(credentials) {
    try {
      const response = await axios.post("/login", {
        ...credentials,
      });
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
  static async registerUser(info) {
    try {
      const response = await axios.post("/signup", {
        ...info,
      });
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }

  static async logOut() {
    try {
      const response = await axios.post("/user/logout");
      return response.data;
    } catch (e) {
      return e.response.data;
    }
  }
}
