import { useSelector } from "react-redux";

import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { DraggableContainer } from "@/shared/ui/draggable-container";
import { DroppableContainer } from "@/shared/ui/droppable-container";

import { blocksMap } from "../blocks";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  const blocks = useSelector(dndConstructorSelectors.blocks);

  return (
    <div className={styles.container}>
      <DroppableContainer droppableId="sidebar">
        {blocks.map((block, index) => (
          <DraggableContainer
            key={block.id}
            draggableId={block.id}
            index={index}
          >
            {blocksMap[block.id]}
          </DraggableContainer>
        ))}
      </DroppableContainer>
    </div>
  );
};
