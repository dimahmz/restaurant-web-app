import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userProfile: {
      name: "",
      email: "",
      id: null,
      isLoggedIn: false,
    },
    isLoading: false,
  },

  reducers: {
    fetch_user: async () => {},

    register_user: async () => {},

    update_login_state: (state, action) => {
      state.userProfile.isLoggedIn = action.payload;
    },
  },
});

export const { register_user, update_login_state } = userSlice.actions;

export default userSlice.reducer;
