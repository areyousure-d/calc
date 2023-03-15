export const roundNumberString = (numberString: string) => {
  const rounded = (
    Math.round(Number.parseFloat(numberString) * 10000000000) / 10000000000
  ).toFixed(10);

  return rounded;
};
