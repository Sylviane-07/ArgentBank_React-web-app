import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setIsUpdateUser } = updateUserSlice.actions;

export default updateUserSlice.reducer;
