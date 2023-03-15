import { MAX_NUM_LENGTH, PRECISION_FACTOR } from "./constants";

const roundNumberString = (numberString: string) => {
  const rounded = (
    Math.round(Number.parseFloat(numberString) * PRECISION_FACTOR) /
    PRECISION_FACTOR
  ).toFixed(15);

  return rounded;
};

export const formatNumString = (numberString: string) => {
  const includesDot = numberString.includes(".");
  const exponential = numberString.includes("e");
  const tooLong = numberString.length > MAX_NUM_LENGTH;

  if (includesDot && tooLong) {
    if (exponential) {
      const number = Number(roundNumberString(numberString));
      return number.toPrecision(4);
    }

    return roundNumberString(numberString);
  }

  if (tooLong) {
    return numberString.slice(0, MAX_NUM_LENGTH);
  }

  return numberString;
};
