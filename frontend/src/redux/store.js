import { configureStore, combineReducers } from "@reduxjs/toolkit";
//RTK QUERY SLICE
import { apiSlice } from "./features/apiSlice";
// REACT TOOLKIT SLICE
import authReducer from "./features/authSlice";
import updateUserReducer from "../redux/features/updateUserSlice";
import rememberReducer from "../redux/features/rememberUserSlice";
//Redux-Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  version: 1,
  storage: sessionStorage,
  blacklist: [apiSlice.reducerPath],
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  updateUser: updateUserReducer,
  remember: rememberReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

//Persist store
export let persistor = persistStore(store);
