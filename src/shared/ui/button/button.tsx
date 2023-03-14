import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: Props) => {
  return <button {...props} />;
};
