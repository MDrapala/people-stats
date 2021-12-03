import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/type.user";

export const initialState: UserState = {
  isLoggingIn: false,
  isLoggingOut: true,
  user: {
    uid: "",
    email: "",
    first: "",
    last: "",
    status: 0,
  },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, payload) => {
      const load = payload.payload;
      state.isLoggingIn = load.isLoggingIn;
      state.isLoggingOut = load.isLoggingOut;
      state.user.uid = load.user.uid;
      state.user.email = load.user.email;
      state.user.first = load.user.first;
      state.user.last = load.user.last;
      state.user.status = load.user.status;
    },
    logout: (state) => {
      state.isLoggingIn = false;
      state.isLoggingOut = true;
      console.log("logout");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: any) => state;
export default authSlice.reducer;
