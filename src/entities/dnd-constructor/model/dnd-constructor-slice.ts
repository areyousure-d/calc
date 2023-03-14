import { createSlice } from "@reduxjs/toolkit";

import {
  deleteBlockFromCanvas,
  moveBlockInCanvas,
  moveBlockToCanvas,
} from "./reducers";
import { DndConstructorState } from "./types";

const initialState: DndConstructorState = {
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
  },
});

export const dndConstructorActions = dndConstructorSlice.actions;
export const dndConstructorReducer = dndConstructorSlice.reducer;
