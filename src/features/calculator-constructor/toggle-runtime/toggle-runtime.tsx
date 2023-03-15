import { useDispatch, useSelector } from "react-redux";

import {
  dndConstructorActions,
  dndConstructorSelectors,
} from "@/entities/dnd-constructor";

export const ToggleRuntime = () => {
  const dispatch = useDispatch();
  const isRuntime = useSelector(dndConstructorSelectors.isRuntime);

  const onClick = () => dispatch(dndConstructorActions.toggleRuntime());

  return (
    <div>
      <button disabled={isRuntime} onClick={onClick}>
        runtime
      </button>

      <button disabled={!isRuntime} onClick={onClick}>
        constructor
      </button>
    </div>
  );
};
