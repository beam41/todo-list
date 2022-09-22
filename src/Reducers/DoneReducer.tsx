import { IBacklogItem } from "../Models/Backlog.Model";
import { IDispatchAction } from "../Models/DispatchAction.Model";

export const DoneReducer = (
  state: IBacklogItem[] = [],
  action: IDispatchAction
) => {
  const { payload } = action;

  switch (action.type) {
    case "CREATE_DONE":      
      state = payload;
      break;
    case "ADD_DONE":
      state = [...state, payload];
      break;
    case "DELETE_DONE":
      const ids = state.map((el) => el.id);
      const idx = ids.indexOf(payload);
      state = [...state.slice(0, idx), ...state.slice(idx + 1)];
      break;
  }

  return state;
};
