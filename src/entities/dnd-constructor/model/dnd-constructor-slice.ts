import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const dndConstructorSlice = createSlice({
  name: "dndConstructor",
  initialState,
  reducers: {},
});

export const dndConstructorActions = dndConstructorSlice.actions;
export const dndConstructorReducer = dndConstructorSlice.reducer;
