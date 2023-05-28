import { configureStore } from "@reduxjs/toolkit";
//RTK QUERY SLICE
import { apiSlice } from "./features/apiSlice";
// REACT TOOLKIT SLICE
import authReducer from "./features/authSlice";
import updateUserReducer from "../redux/features/updateUserSlice";
import rememberReducer from "../redux/features/rememberUserSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    updateUser: updateUserReducer,
    remember: rememberReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
