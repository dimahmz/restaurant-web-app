import makeRequest from ".";

export default class User {
  static async getUser() {
    const response = await makeRequest(`/user`, "get", null);
    return response;
  }
  static async authenticateUser(credentials) {
    const response = await makeRequest(`/login`, "post", { ...credentials });
    return response;
  }
  static async registerUser(info) {
    const response = await makeRequest(`/signup`, "post", {
      ...info,
    });
    return response;
  }

  static async logOut() {
    const response = await makeRequest(`/user/logout`, "post", null);
    return response;
  }
}
