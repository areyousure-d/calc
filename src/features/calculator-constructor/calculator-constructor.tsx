import styles from "./calculator-constructor.module.css";
import { Canvas } from "./canvas";
import { Sidebar } from "./sidebar";

export const CalculatorConstructor = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Canvas />
    </div>
  );
};
