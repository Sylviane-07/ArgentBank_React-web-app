import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import authReducer from "./features/authSlice";
import updateUserReducer from "../redux/features/updateUserSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    updateUser: updateUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
