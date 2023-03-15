import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  BlockId,
  dndConstructorActions,
  dndConstructorSelectors,
} from "@/entities/dnd-constructor";

type Props = {
  blockId: BlockId;
  children: ReactNode;
};

export const DeleteOnDoubleClick = ({ blockId, children }: Props) => {
  const dispatch = useDispatch();
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const onDoubleClick = () => {
    if (isRuntime) {
      return;
    }

    dispatch(dndConstructorActions.deleteBlockFromCanvas(blockId));
  };

  return <div onDoubleClick={onDoubleClick}>{children}</div>;
};
