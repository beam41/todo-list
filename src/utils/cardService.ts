import { Store } from "redux";
import { Status, IBacklogItem, IBacklog } from "../Models/Backlog.Model";

export const creatNewCard = (name: string, desscription: string) => {
  return {
    id: Math.floor(Math.random() * 1000).toString(),
    name: name,
    description: desscription,
    status: Status.TODO,
  } as IBacklogItem;
};

export const getCardByStatus = (id: string, status: Status, store: Store) => {
  const data = store.getState() as IBacklog;
  let idx: number;
  const result = data[status].find((el, index) => {
    if (el.id === id) {
      idx = index;
      return el;
    }
  });

  return { data: result, index: idx };
};

export const updateCardStatus = (card: IBacklogItem, newSatus: Status) => {
  return { ...card, status: newSatus } as IBacklogItem;
};
