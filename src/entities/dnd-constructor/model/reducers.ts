import { PayloadAction } from "@reduxjs/toolkit";

import { BlockId, DndConstructorState } from "./types";

export const moveBlockToCanvas = (
  state: DndConstructorState,
  action: PayloadAction<{ blockId: BlockId; index: number }>
) => {
  const { blockId, index } = action.payload;
  const block = state.blocks.find((block) => block.id === blockId);

  if (block) {
    block.moved = true;
  }

  if (index === 0) {
    state.blocksInCanvas.splice(1, 0, blockId);
  } else if (blockId === "display") {
    state.blocksInCanvas.splice(0, 0, blockId);
  } else {
    state.blocksInCanvas.splice(index, 0, blockId);
  }
};

export const deleteBlockFromCanvas = (
  state: DndConstructorState,
  action: PayloadAction<BlockId>
) => {
  const blockId = action.payload;
  const blockIndex = state.blocksInCanvas.findIndex((id) => id === blockId);

  if (blockIndex !== -1) {
    state.blocksInCanvas.splice(blockIndex, 1);
  }

  const block = state.blocks.find((block) => block.id === blockId);

  if (block) {
    block.moved = false;
  }
};

export const moveBlockInCanvas = (
  state: DndConstructorState,
  action: PayloadAction<{ fromIndex: number; toIndex: number }>
) => {
  const { fromIndex, toIndex } = action.payload;
  const blockId = state.blocksInCanvas.splice(fromIndex, 1)[0];

  if (blockId === "display") {
    state.blocksInCanvas.splice(0, 0, blockId);
  } else if (toIndex === 0 && state.blocksInCanvas[toIndex] === "display") {
    state.blocksInCanvas.splice(1, 0, blockId);
  } else {
    state.blocksInCanvas.splice(toIndex, 0, blockId);
  }
};

export const toggleRuntime = (state: DndConstructorState) => {
  state.isRuntime = !state.isRuntime;
};
