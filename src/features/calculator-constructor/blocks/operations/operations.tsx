import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { calculatorActions, Operation } from "@/entities/calculator";
import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { Button } from "@/shared/ui/button";

import disableEventsStyle from "../pointer-events-disabled.module.css";
import styles from "./operations.module.css";

const operations = {
  division: "/",
  multiplication: "x",
  subtraction: "-",
  addition: "+",
} as const;

export const Operations = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const createOnClick = (operation: Operation) => () =>
    dispatch(calculatorActions.clickOperation(operation));

  return (
    <div
      className={clsx({
        [styles.container]: true,
        [disableEventsStyle["pointer-events-disabled"]]: !isRuntime,
      })}
    >
      {Object.entries(operations).map(([key, value]) => {
        return (
          <Button
            key={key}
            onClick={createOnClick(key as Operation)}
            className={styles.button}
          >
            {value}
          </Button>
        );
      })}
    </div>
  );
};
