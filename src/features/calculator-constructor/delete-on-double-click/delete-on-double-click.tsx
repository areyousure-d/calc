import { ReactNode } from "react";
import { useDispatch } from "react-redux";

import { BlockId, dndConstructorActions } from "@/entities/dnd-constructor";

type Props = {
  blockId: BlockId;
  children: ReactNode;
};

export const DeleteOnDoubleClick = ({ blockId, children }: Props) => {
  const dispatch = useDispatch();

  const onDoubleClick = () =>
    dispatch(dndConstructorActions.deleteBlockFromCanvas(blockId));

  return <div onDoubleClick={onDoubleClick}>{children}</div>;
};
