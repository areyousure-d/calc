import { useSelector } from "react-redux";

import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { DraggableContainer } from "@/shared/ui/draggable-container";
import { DroppableContainer } from "@/shared/ui/droppable-container";

import { blocksMap } from "../blocks";
import styles from "./canvas.module.css";

export const Canvas = () => {
  const blocksInCanvas = useSelector(dndConstructorSelectors.blocksInCanvas);

  return (
    <DroppableContainer droppableId="canvas" className={styles.container}>
      {blocksInCanvas.map((blockId, index) => (
        <DraggableContainer
          key={blockId}
          draggableId={"canvas" + blockId}
          index={index}
        >
          {blocksMap[blockId]}
        </DraggableContainer>
      ))}
    </DroppableContainer>
  );
};
