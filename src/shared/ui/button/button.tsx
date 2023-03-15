import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";

type Props = {
  variant?: "outlined" | "filled";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  className,
  variant = "outlined",
  ...props
}: Props) => {
  const isOutlined = variant === "outlined";

  return (
    <button
      {...props}
      className={clsx(className, styles.button, {
        [styles.outlined]: isOutlined,
        [styles.filled]: !isOutlined,
      })}
    />
  );
};
