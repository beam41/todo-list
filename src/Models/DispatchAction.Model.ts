import { IBacklogItem, Status } from "./Backlog.Model";

export type CreateAction = `CREATE_${Status}`;
export type AddAction = `ADD_${Status}`;
export type DeleteAction = `DELETE_${Status}`;

export interface ICreateDispatchAction {
  type: CreateAction;
  payload: IBacklogItem[];
}

export interface IAddDispatchAction {
  type: AddAction;
  payload: IBacklogItem;
}

export interface IDeleteDispatchAction {
  type: DeleteAction;
  payload: string;
}

export type DispatchAction =
  | ICreateDispatchAction
  | IAddDispatchAction
  | IDeleteDispatchAction;
