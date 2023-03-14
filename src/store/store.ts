import { configureStore } from "@reduxjs/toolkit";

import { calculatorReducer } from "@/entities/calculator";
import { dndConstructorReducer } from "@/entities/dnd-constructor";

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
    dndConstructor: dndConstructorReducer,
  },
  devTools: true,
});
