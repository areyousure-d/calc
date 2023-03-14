import { ReactNode } from "react";
import { Draggable } from "react-beautiful-dnd";

import styles from "./draggable-container.module.css";

type Props = {
  children: ReactNode;
  draggableId: string;
  isDragDisabled: boolean;
  index: number;
  inSidebar?: boolean;
};

export const DraggableContainer = ({
  children,
  draggableId,
  isDragDisabled,
  index,
  inSidebar = false,
}: Props) => {
  return (
    <Draggable
      draggableId={draggableId}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <>
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {children}
          </div>

          {snapshot.isDragging && inSidebar && (
            <div className={styles["disable-siblings-animation"]}>
              {children}
            </div>
          )}
        </>
      )}
    </Draggable>
  );
};
