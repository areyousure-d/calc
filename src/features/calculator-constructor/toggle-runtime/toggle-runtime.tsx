import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import {
  dndConstructorActions,
  dndConstructorSelectors,
} from "@/entities/dnd-constructor";
import { ReactComponent as Eye } from "@/shared/images/eye.svg";
import { ReactComponent as Selector } from "@/shared/images/selector.svg";

import styles from "./toggle-runtime.module.css";

export const ToggleRuntime = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const onClick = () => dispatch(dndConstructorActions.toggleRuntime());

  return (
    <div className={styles.container}>
      <button
        onClick={onClick}
        className={clsx({
          [styles.button]: true,
          [styles.disabled]: isRuntime,
        })}
      >
        <Eye width={20} height={20} />
        <span className={styles.text}>Runtime</span>
      </button>

      <button
        onClick={onClick}
        className={clsx({
          [styles.button]: true,
          [styles.disabled]: !isRuntime,
        })}
      >
        <Selector width={20} height={20} />
        <span className={styles.text}>Constructor</span>
      </button>
    </div>
  );
};
