import clsx from "clsx";
import { useSelector } from "react-redux";

import { dndConstructorSelectors } from "@/entities/dnd-constructor";
import { ReactComponent as AddImage } from "@/shared/images/add-image.svg";
import { DraggableContainer } from "@/shared/ui/draggable-container";
import { DroppableContainer } from "@/shared/ui/droppable-container";

import { blocksMap } from "../blocks";
import { DeleteOnDoubleClick } from "../delete-on-double-click";
import styles from "./canvas.module.css";

export const Canvas = () => {
  const blocksInCanvas = useSelector(dndConstructorSelectors.blocksInCanvas);
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const isEmpty = blocksInCanvas.length === 0;
  const draggingOverClassName = isEmpty ? styles["dragging-over"] : "";

  return (
    <DroppableContainer
      droppableId="canvas"
      className={clsx({
        [styles.container]: true,
        [styles.empty]: isEmpty,
      })}
      isDropDisabled={false}
      draggingOverClassName={draggingOverClassName}
    >
      {blocksInCanvas.map((blockId, index) => (
        <DeleteOnDoubleClick key={blockId} blockId={blockId}>
          <DraggableContainer
            draggableId={"canvas" + blockId}
            index={index}
            isDragDisabled={isRuntime || blockId === "display"}
          >
            {blocksMap[blockId]}
          </DraggableContainer>
        </DeleteOnDoubleClick>
      ))}

      {isEmpty && (
        <div className={styles["empty-placeholder"]}>
          <AddImage width={20} height={20} />
          <div className={styles["colored-text"]}>Перетащите сюда</div>
          <div className={styles.text}>любой элемент{"\n"}из левой панели</div>
        </div>
      )}
    </DroppableContainer>
  );
};
