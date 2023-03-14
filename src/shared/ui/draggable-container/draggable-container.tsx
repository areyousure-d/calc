import { ReactNode } from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  children: ReactNode;
  draggableId: string;
  index: number;
};

export const DraggableContainer = ({ children, draggableId, index }: Props) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {children}
          </div>
        );
      }}
    </Draggable>
  );
};
