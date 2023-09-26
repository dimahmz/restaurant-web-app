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

    set_user_profile: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        if (state.userProfile.hasOwnProperty(key)) {
          state.userProfile[key] = action.payload[key];
        }
      });
    },

    update_login_state: (state, action) => {
      state.userProfile.isLoggedIn = action.payload;
    },

    update_loading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  register_user,
  update_login_state,
  set_user_profile,
  update_loading,
} = userSlice.actions;

export default userSlice.reducer;
