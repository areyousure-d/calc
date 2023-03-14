import { ReactNode } from "react";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  droppableId: string;
  children: ReactNode;
  isDropDisabled: boolean;
  className?: string;
};

export const DroppableContainer = ({
  droppableId,
  children,
  isDropDisabled,
  className,
}: Props) => {
  return (
    <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
      {(provided) => {
        return (
          <>
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={className}
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
