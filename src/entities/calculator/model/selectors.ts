import { RootState } from "@/store";

const calculatorState = (state: RootState) => state.calculator;

export const numberOnDisplay = (state: RootState) =>
  calculatorState(state).numberOnDisplay;
