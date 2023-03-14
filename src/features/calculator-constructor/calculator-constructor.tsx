import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

import { dndConstructorActions } from "@/entities/dnd-constructor";
import { BlockId } from "@/entities/dnd-constructor/model/types";

import styles from "./calculator-constructor.module.css";
import { Canvas } from "./canvas";
import { Sidebar } from "./sidebar";

export const CalculatorConstructor = () => {
  const dispatch = useDispatch();

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      dispatch(
        dndConstructorActions.moveBlockInCanvas({
          fromIndex: source.index,
          toIndex: destination.index,
        })
      );

      return;
    }

    dispatch(
      dndConstructorActions.moveBlockToCanvas({
        blockId: draggableId as BlockId,
        index: destination.index,
      })
    );
  };

  return (
    <div className={styles.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Sidebar />
        <Canvas />
      </DragDropContext>
    </div>
  );
};
