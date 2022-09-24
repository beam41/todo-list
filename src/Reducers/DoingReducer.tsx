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
    case "EDIT_DOING":
      const index = action.payload.index;
      state = [
        ...state.slice(0, index),
        ...[action.payload],
        ...state.slice(index + 1),
      ];
      break;
    case "DELETE_DOING":
      const idx = action.payload;
      state = [...state.slice(0, idx), ...state.slice(idx + 1)];
      break;
  }

  return state;
};
