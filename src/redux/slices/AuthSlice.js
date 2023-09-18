import { storageGet } from "@/utils/localstorage";
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  return {
    isLoggedIn: false,
    userId: null,
  };
};

const getHydratedState = () => {
  const persistedState = storageGet("auth");

  if (persistedState) {
    return persistedState;
  }

  return getInitialState();
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: getHydratedState(),
  reducers: {
    signIn(state, action) {
      state.isLoggedIn = true;
      state.userId = action.payload;
    },
    signOut(state) {
      state.isLoggedIn = false;
      state.userId = null;
    },
  },
});

export const { signIn, signOut } = AuthSlice.actions;

export default AuthSlice;
