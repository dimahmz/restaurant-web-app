import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    dispalyError: false,
    error: {
      title: "",
      details: "",
    },
  },

  reducers: {
    open_error: (state, action) => {
      state.error.title = action.payload.message;
      state.error.details = action.payload.details;
      state.dispalyError = true;
    },
    close_error: (state) => {
      state.dispalyError = false;
    },
  },
});

export const { open_error, close_error } = appSlice.actions;

export default appSlice.reducer;
