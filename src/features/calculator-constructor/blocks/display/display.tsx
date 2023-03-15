import clsx from "clsx";
import { useSelector } from "react-redux";

import {
  calculatorSelectors,
  MAX_LENGTH_WITH_LG_FONT_SIZE,
} from "@/entities/calculator";

import disableEventsStyles from "../pointer-events-disabled.module.css";
import styles from "./display.module.css";

export const Display = () => {
  const numberOnDisplay = useSelector(calculatorSelectors.numberOnDisplay);

  const tooLong = numberOnDisplay.length > MAX_LENGTH_WITH_LG_FONT_SIZE;

  return (
    <div
      className={clsx({
        [styles.display]: true,
        [disableEventsStyles["pointer-events-disabled"]]: true,
        [styles["default-font-size"]]: !tooLong,
        [styles["too-long"]]: tooLong,
      })}
    >
      {numberOnDisplay}
    </div>
  );
};
