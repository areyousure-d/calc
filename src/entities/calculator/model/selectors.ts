import { RootState } from "@/store";

import { roundNumberString } from "./utils";

const calculatorState = (state: RootState) => state.calculator;

export const numberOnDisplay = (state: RootState) => {
  const numberOnDisplay = calculatorState(state).numberOnDisplay;

  if (Number.isFinite(Number(numberOnDisplay))) {
    const includesDot = numberOnDisplay.includes(".");

    return includesDot
      ? roundNumberString(numberOnDisplay)
      : numberOnDisplay.slice(0, 11);
  }

  return "Не определено";
};
