import { RootState } from "@/store";

import { formatNumString } from "./utils";

const calculatorState = (state: RootState) => state.calculator;

export const numberOnDisplay = (state: RootState) => {
  const numberOnDisplay = calculatorState(state).numberOnDisplay;

  if (Number.isFinite(Number(numberOnDisplay))) {
    return formatNumString(numberOnDisplay);
  }

  return "Не определено";
};
