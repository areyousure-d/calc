import clsx from "clsx";
import { useSelector } from "react-redux";

import { calculatorSelectors } from "@/entities/calculator";

import disableEventsStyles from "../pointer-events-disabled.module.css";
import styles from "./display.module.css";

export const Display = () => {
  const numberOnDisplay = useSelector(calculatorSelectors.numberOnDisplay);

  return (
    <div
      className={clsx(
        styles.display,
        disableEventsStyles["pointer-events-disabled"]
      )}
    >
      {numberOnDisplay}
    </div>
  );
};
