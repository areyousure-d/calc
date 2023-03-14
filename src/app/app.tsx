import { CalculatorConstructor } from "@/features/calculator-constructor";

import { ReduxProvider } from "./providers";

export const App = () => {
  return (
    <ReduxProvider>
      <CalculatorConstructor />
    </ReduxProvider>
  );
};
