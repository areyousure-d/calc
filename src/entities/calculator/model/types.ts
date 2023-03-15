export type Operation =
  | "addition"
  | "subtraction"
  | "multiplication"
  | "division"
  | "result";

export type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type Comma = ",";

export type CalculatorState = {
  result: number | null;
  numberOnDisplay: string;
  operation: Operation | null;
  nextShouldBeNumber: boolean;
};
