import { createSlice } from "@reduxjs/toolkit";

import { clickDigit, clickOperation } from "./reducers";
import { CalculatorState } from "./types";

const initialState: CalculatorState = {
  result: null,
  numberOnDisplay: "0",
  operation: null,
  nextShouldBeNumber: false,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    clickDigit,
    clickOperation,
    reset() {
      return initialState;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export const calculatorReducer = calculatorSlice.reducer;
