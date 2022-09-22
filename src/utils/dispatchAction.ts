import { IBacklogItem } from "../Models/Backlog.Model";
import { IDispatchAction } from "../Models/DispatchAction.Model";

export const createCard = (key: string, data: IBacklogItem[]): IDispatchAction => {
  return {
    type: `CREATE_${key.toUpperCase()}`,
    payload: data,
  };
};

export const addCard = (key: string, data: IBacklogItem): IDispatchAction => {
  return {
    type: `ADD_${key.toUpperCase()}`,
    payload: data,
  };
};


export const deleteCard = (key: string, id: string): IDispatchAction => {
  return {
    type: `DELETE_${key.toUpperCase()}`,
    payload: id,
  };
};

