import { createSlice } from "@reduxjs/toolkit";
const userProfile = {
  name: "",
  email: "",
  id: null,
  isLoggedIn: false,
  role_id: 0,
};
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userProfile,
    isLoading: true,
  },

  reducers: {
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
    log_out_user: (state) => {
      Object.keys(state.userProfile).forEach((key) => {
        if (userProfile[key]) state[key] = userProfile[key];
      });
    },
  },
});

export const {
  register_user,
  update_login_state,
  set_user_profile,
  update_loading,
  log_out_user,
} = userSlice.actions;

export default userSlice.reducer;
