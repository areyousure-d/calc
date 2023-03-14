import { Digits } from "./digits";
import { Display } from "./display";
import { Operations } from "./operations";
import { ResultButton } from "./result-button";

export const blocksMap = {
  display: <Display />,
  digits: <Digits />,
  operations: <Operations />,
  resultButton: <ResultButton />,
} as const;
