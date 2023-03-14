import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {},
});

export const calculatorActions = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
