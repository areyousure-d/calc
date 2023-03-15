import clsx from "clsx";
import { ReactNode } from "react";
import { Draggable } from "react-beautiful-dnd";

import styles from "./draggable-container.module.css";

type Props = {
  children: ReactNode;
  draggableId: string;
  isDragDisabled: boolean;
  index: number;
  inSidebar?: boolean;
  isRuntime?: boolean;
};

export const DraggableContainer = ({
  children,
  draggableId,
  isDragDisabled,
  index,
  inSidebar = false,
  isRuntime = false,
}: Props) => {
  const shouldSetOpacity = inSidebar ? isDragDisabled : false;

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
            className={clsx({
              [styles.container]: true,
              [styles.dragging]: snapshot.isDragging,
              [styles["disabled-opacity"]]: shouldSetOpacity,
              [styles.runtime]: isRuntime,
            })}
          >
            {children}
          </div>

          {snapshot.isDragging && inSidebar && (
            <div
              className={clsx(
                styles.container,
                styles["disable-siblings-animation"]
              )}
            >
              {children}
            </div>
          )}
        </>
      )}
    </Draggable>
  );
};
