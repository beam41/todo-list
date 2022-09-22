import { Store } from "redux";
import { Status, IBacklogItem, IBacklog } from "../Models/Backlog.Model";

export const getCardByStatus = (id: string, status: Status, store: Store) => {
  const data = store.getState() as IBacklog;
  return data[status].find((e) => e.id === id);
};

export const updateCardStatus = (card: IBacklogItem, newSatus: Status) => {
  return { ...card, status: newSatus } as IBacklogItem;
};
