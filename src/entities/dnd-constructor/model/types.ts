export type BlockId = "display" | "operations" | "digits" | "resultButton";

export type Block = {
  id: BlockId;
  moved: boolean;
};

export type DndConstructorState = {
  blocks: Block[];
  blocksInCanvas: BlockId[];
};
