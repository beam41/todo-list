import { Store } from "redux";
import { Status, IBacklogItem } from "../Models/Backlog.Model";

export const getCardByStatus = (id: string, s: string, store: Store) => {
  const status = s.toLowerCase();
  const data = store.getState();
  return data[status].find((e) => e.id === id);
};

export const updateCardStatus = (card: IBacklogItem, newSatus: Status) => {
  return { ...card, status: newSatus } as IBacklogItem;
};
