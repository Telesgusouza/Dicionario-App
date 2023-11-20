"use client";

import { configureStore } from "@reduxjs/toolkit";

import useTheme from "./useTheme/reducer";
// import useWord from './useWord/reducer'
// import useError from './useError/reducer'

export const store = configureStore({
  reducer: {
    useTheme: useTheme,
    // useWord: useWord,
    // useError: useError,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
