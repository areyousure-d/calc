import { PayloadAction } from "@reduxjs/toolkit";

import { CalculatorState, Comma, Digit, Operation } from "./types";

const calculateResult = (
  result: number,
  numberOnDisplay: number,
  operation: Operation
) => {
  switch (operation) {
    case "addition":
      return result + numberOnDisplay;
    case "subtraction":
      return result - numberOnDisplay;
    case "multiplication":
      return result * numberOnDisplay;
    case "division":
      return result / numberOnDisplay;
    case "result":
      return numberOnDisplay;
    default:
      return result;
  }
};

export const clickDigit = (
  state: CalculatorState,
  action: PayloadAction<Digit | Comma>
) => {
  const symbol = action.payload;

  if (symbol === ",") {
    if (!state.numberOnDisplay.includes(".")) {
      state.numberOnDisplay += ".";
    }
  } else if (state.nextShouldBeNumber) {
    state.numberOnDisplay = symbol;
    state.nextShouldBeNumber = false;
  } else {
    state.numberOnDisplay =
      state.numberOnDisplay === "0" ? symbol : state.numberOnDisplay + symbol;
  }
};

export const clickOperation = (
  state: CalculatorState,
  action: PayloadAction<Operation>
) => {
  const operation = action.payload;

  const numberOnDisplay = Number.parseFloat(state.numberOnDisplay);

  if (state.result === null) {
    state.result = numberOnDisplay;
  } else if (state.operation) {
    const result = state.result || 0;
    const newResult = calculateResult(result, numberOnDisplay, state.operation);

    state.result = newResult;
    state.numberOnDisplay = String(newResult);
  }

  state.nextShouldBeNumber = true;
  state.operation = operation;
};
