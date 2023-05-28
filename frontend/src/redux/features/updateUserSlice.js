import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  isUpdateUser: false,
};

const updateUserSlice = createSlice({
  name: "updateUser",
  initialState,
  reducers: {
    setIsUpdateUser(state, action) {
      state.isUpdateUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { setIsUpdateUser, purgeIsUpdateUser } = updateUserSlice.actions;

export default updateUserSlice.reducer;
