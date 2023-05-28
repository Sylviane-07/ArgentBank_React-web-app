import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  isAuthenticated: false,
  userName: "",
  firstName: "",
  lastName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUserData: (state, action) => {
      const { userName, firstName, lastName } = action.payload;
      state.userName = userName;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setIsAuthenticated, setUserData } = authSlice.actions;

export default authSlice.reducer;
