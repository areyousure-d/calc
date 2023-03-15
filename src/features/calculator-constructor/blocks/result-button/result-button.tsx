import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { calculatorActions } from "@/entities/calculator";
import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { Button } from "@/shared/ui/button";

import disableEventsStyle from "../pointer-events-disabled.module.css";
import styles from "./result-button.module.css";

export const ResultButton = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const onClick = () => dispatch(calculatorActions.clickOperation("result"));

  return (
    <div>
      <Button
        onClick={onClick}
        className={clsx({
          [styles["result-button"]]: true,
          [disableEventsStyle["pointer-events-disabled"]]: !isRuntime,
        })}
        variant="filled"
      >
        =
      </Button>
    </div>
  );
};
