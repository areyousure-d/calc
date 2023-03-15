import { useDispatch, useSelector } from "react-redux";

import { calculatorActions } from "@/entities/calculator";
import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { Button } from "@/shared/ui/button";

import styles from "../pointer-events-disabled.module.css";

export const ResultButton = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const onClick = () => dispatch(calculatorActions.clickOperation("result"));

  return (
    <Button
      onClick={onClick}
      className={isRuntime ? "" : styles["pointer-events-disabled"]}
    >
      result button
    </Button>
  );
};
