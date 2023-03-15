import { RootState } from "@/store";

const dndConstructorState = (state: RootState) => state.dndConstructor;

export const blocks = (state: RootState) => dndConstructorState(state).blocks;

export const blocksInCanvas = (state: RootState) =>
  dndConstructorState(state).blocksInCanvas;

export const isRuntime = (state: RootState) =>
  dndConstructorState(state).isRuntime;
