export type BlockId = "display" | "operations" | "digits" | "resultButton";

export type Block = {
  id: BlockId;
  moved: boolean;
};

export type DndConstructorState = {
  isRuntime: boolean;
  blocks: Block[];
  blocksInCanvas: BlockId[];
};
