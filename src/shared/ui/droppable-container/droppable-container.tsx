import clsx from "clsx";
import { ReactNode } from "react";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  droppableId: string;
  children: ReactNode;
  isDropDisabled: boolean;
  className?: string;
  draggingOverClassName?: string;
};

export const DroppableContainer = ({
  droppableId,
  children,
  isDropDisabled,
  className,
  draggingOverClassName,
}: Props) => {
  return (
    <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
      {(provided, snapshot) => {
        return (
          <>
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={clsx(className, {
                [draggingOverClassName ?? ""]: snapshot.isDraggingOver,
              })}
            >
              {children}
            </div>

            {provided.placeholder}
          </>
        );
      }}
    </Droppable>
  );
};
