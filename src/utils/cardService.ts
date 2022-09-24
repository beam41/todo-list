import { Status, IBacklogItem } from "../Models/Backlog.Model";
import cacheData from "./cacheData";

export const creatNewCard = (name: string, desscription: string) => {
  return {
    id: Math.floor(Math.random() * 1000).toString(),
    name: name,
    description: desscription,
    status: Status.TODO,
  } as IBacklogItem;
};

export const getCardByStatus = (id: string, status: Status) => {
  let data: IBacklogItem[];
  if (status === Status.TODO) data = cacheData.getTodo();
  else if (status === Status.DOING) data = cacheData.getDoing();
  else data = cacheData.getDone();

  let idx: number;
  const result = data.find((el, index) => {
    if (el.id === id) {
      idx = index;
      return true;
    }
  });

  return { data: result, index: idx };
};

export const updateCardStatus = (card: IBacklogItem, newSatus: Status) => {
  return { ...card, status: newSatus } as IBacklogItem;
};
