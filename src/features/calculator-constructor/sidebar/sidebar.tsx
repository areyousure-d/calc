import { Digits, Display, Operations, ResultButton } from "../components";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Display />
      <Operations />
      <Digits />
      <ResultButton />
    </div>
  );
};
