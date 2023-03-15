import "./styles/normalize.css";
import "./styles/css-variables.css";
import "./styles/index.css";

import { CalculatorConstructor } from "@/features/calculator-constructor";

import { ReduxProvider } from "./providers";

export const App = () => {
  return (
    <ReduxProvider>
      <CalculatorConstructor />
    </ReduxProvider>
  );
};
