export interface IBacklog {
  todo: IBacklogItem[];
  doing: IBacklogItem[];
  done: IBacklogItem[];
}

export interface IBacklogItem {
  id: any;
  status: Status;
  name: string;
  description: string;
}

export type Status = "TODO" | "DOING" | "DONE";