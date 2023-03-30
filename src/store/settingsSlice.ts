import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleMode: (state, action) => {
      state.theme = action.payload === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = settingsSlice.actions;

export default settingsSlice.reducer;
