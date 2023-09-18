import { storageSet } from "@/utils/localstorage";
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";

const Store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  },
});

Store.subscribe(() => {
  const { auth } = Store.getState();
  storageSet("auth", auth);
});

export default Store;
