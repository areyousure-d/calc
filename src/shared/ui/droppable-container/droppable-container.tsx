import { ReactNode } from "react";
import { Droppable } from "react-beautiful-dnd";

type Props = {
  droppableId: string;
  children: ReactNode;
  className?: string;
};

export const DroppableContainer = ({
  droppableId,
  children,
  className,
}: Props) => {
  return (
    <Droppable droppableId={droppableId}>
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
