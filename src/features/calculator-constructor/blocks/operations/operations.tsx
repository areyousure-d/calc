import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { calculatorActions, Operation } from "@/entities/calculator";
import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { Button } from "@/shared/ui/button";

import disableEventsStyle from "../pointer-events-disabled.module.css";

const operations = {
  addition: "+",
  subtraction: "-",
  multiplication: "*",
  division: "/",
} as const;

export const Operations = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const createOnClick = (operation: Operation) => () =>
    dispatch(calculatorActions.clickOperation(operation));

  return (
    <div
      className={clsx(
        isRuntime ? "" : disableEventsStyle["pointer-events-disabled"]
      )}
    >
      {Object.entries(operations).map(([key, value]) => {
        return (
          <Button key={key} onClick={createOnClick(key as Operation)}>
            {value}
          </Button>
        );
      })}
    </div>
  );
};
