import { IBacklogItem } from "../Models/Backlog.Model";
import { IDispatchAction } from "../Models/DispatchAction.Model";

export const TodoReducer = (
  state: IBacklogItem[] = [],
  action: IDispatchAction
) => {
  const { payload } = action;

  switch (action.type) {
    case "CREATE_TODO":
      state = payload;
      break;
    case "ADD_TODO":
      state = [...state, payload];
      break;
    case "DELETE_TODO":
      const ids = state.map((el) => el.id);
      const idx = ids.indexOf(payload);
      state = [...state.slice(0, idx), ...state.slice(idx + 1)];
      break;
  }

  return state;
};
