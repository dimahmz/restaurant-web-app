import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "manageFood",
  initialState: {
    userProfile: {
      name: "",
      email: "",
      id: null,
      isLoggedIn: false,
    },
    isLoading: false,
  },

  reducers: {},
});

export default userSlice.reducer;
