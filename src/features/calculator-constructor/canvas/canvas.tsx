import { useSelector } from "react-redux";

import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { DraggableContainer } from "@/shared/ui/draggable-container";
import { DroppableContainer } from "@/shared/ui/droppable-container";

import { blocksMap } from "../blocks";
import { DeleteOnDoubleClick } from "../delete-on-double-click";
import styles from "./canvas.module.css";

export const Canvas = () => {
  const blocksInCanvas = useSelector(dndConstructorSelectors.blocksInCanvas);

  return (
    <DroppableContainer
      droppableId="canvas"
      className={styles.container}
      isDropDisabled={false}
    >
      {blocksInCanvas.map((blockId, index) => (
        <DeleteOnDoubleClick key={blockId} blockId={blockId}>
          <DraggableContainer
            draggableId={"canvas" + blockId}
            index={index}
            isDragDisabled={false}
          >
            {blocksMap[blockId]}
          </DraggableContainer>
        </DeleteOnDoubleClick>
      ))}
    </DroppableContainer>
  );
};
