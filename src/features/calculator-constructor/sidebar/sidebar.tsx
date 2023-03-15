import { useSelector } from "react-redux";

import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { DraggableContainer } from "@/shared/ui/draggable-container";
import { DroppableContainer } from "@/shared/ui/droppable-container";

import { blocksMap } from "../blocks";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  const blocks = useSelector(dndConstructorSelectors.blocks);
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  return (
    <>
      {isRuntime ? (
        <div className={styles.container} />
      ) : (
        <div className={styles.container}>
          <DroppableContainer droppableId="sidebar" isDropDisabled={true}>
            {blocks.map((block, index) => (
              <DraggableContainer
                key={block.id}
                draggableId={block.id}
                index={index}
                isDragDisabled={block.moved}
                inSidebar={true}
              >
                {blocksMap[block.id]}
              </DraggableContainer>
            ))}
          </DroppableContainer>
        </div>
      )}
    </>
  );
};
