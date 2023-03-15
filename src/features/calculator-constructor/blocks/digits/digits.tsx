import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { calculatorActions, Comma, Digit } from "@/entities/calculator";
import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { Button } from "@/shared/ui/button";

import disableEventsStyle from "../pointer-events-disabled.module.css";
import styles from "./digits.module.css";

const buttons = [
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  ",",
] as const;

export const Digits = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const createOnClick = (symbol: Digit | Comma) => () =>
    dispatch(calculatorActions.clickDigit(symbol));

  return (
    <div
      className={clsx({
        [disableEventsStyle["pointer-events-disabled"]]: !isRuntime,
        [styles.container]: true,
      })}
    >
      {buttons.map((buttonSymbol) => (
        <Button
          key={buttonSymbol}
          className={buttonSymbol === "0" ? styles.wide : ""}
          onClick={createOnClick(buttonSymbol)}
        >
          {buttonSymbol}
        </Button>
      ))}
    </div>
  );
};
