import { createSlice } from "@reduxjs/toolkit";

import {
  deleteBlockFromCanvas,
  moveBlockInCanvas,
  moveBlockToCanvas,
  toggleRuntime,
} from "./reducers";
import { DndConstructorState } from "./types";

const initialState: DndConstructorState = {
  isRuntime: false,
  blocks: [
    { id: "display", moved: false },
    { id: "operations", moved: false },
    { id: "digits", moved: false },
    { id: "resultButton", moved: false },
  ],
  blocksInCanvas: [],
};

const dndConstructorSlice = createSlice({
  name: "dndConstructor",
  initialState,
  reducers: {
    moveBlockToCanvas,
    moveBlockInCanvas,
    deleteBlockFromCanvas,
    toggleRuntime,
  },
});

export const dndConstructorActions = dndConstructorSlice.actions;
export const dndConstructorReducer = dndConstructorSlice.reducer;
