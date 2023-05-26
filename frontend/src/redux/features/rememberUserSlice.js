import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRemembered: false,
  isEmail: "",
};

const rememberMeSlice = createSlice({
  name: "remember",
  initialState,
  reducers: {
    setIsRemembered(state, action) {
      state.isRemembered = action.payload;
    },
    setIsEmail(state, action) {
      state.isEmail = action.payload;
    },
  },
});

export const { setIsRemembered, setIsEmail } = rememberMeSlice.actions;

export default rememberMeSlice.reducer;
