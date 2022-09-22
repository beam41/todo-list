import { IBacklogItem } from "../Models/Backlog.Model";
import { DispatchAction } from "../Models/DispatchAction.Model";

export const DoingReducer = (
  state: IBacklogItem[] = [],
  action: DispatchAction
) => {
  switch (action.type) {
    case "CREATE_DOING":
      state = action.payload;
      break;
    case "ADD_DOING":
      state = [...state, action.payload];
      break;
    case "DELETE_DOING":
      const ids = state.map((el) => el.id);
      const idx = ids.indexOf(action.payload);
      state = [...state.slice(0, idx), ...state.slice(idx + 1)];
      break;
  }

  return state;
};
