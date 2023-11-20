"use client";


import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  theme: false,
  font: "sans-serif",
};

export const useTheme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleFont: (state, action) => {
      state.font = action.payload.font;
    },
    toggleTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { toggleFont, toggleTheme } = useTheme.actions;
export default useTheme.reducer;
