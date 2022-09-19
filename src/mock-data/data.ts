import { IBacklog } from "../Models/Backlog.Model";

export const mockData: IBacklog = {
  todo: [
    {  id: 't-1', status: "TODO", name: "test2-todo", description: "test description" },
    {  id: 't-2', status: "TODO", name: "test3-todo", description: "test overflow text, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, laboriosam." },
    {  id: 't-3', status: "TODO", name: "test1-todo", description: "" },
    {  id: 't-7', status: "TODO", name: "test2-todo", description: "test description" },
    {  id: 't-8', status: "TODO", name: "test3-todo", description: "test overflow text, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, laboriosam." },
    {  id: 't-9', status: "TODO", name: "test1-todo", description: "" },
    {  id: 't-10', status: "TODO", name: "test2-todo", description: "test description" },
    // {  id: 't-11', status: "TODO", name: "test3-todo", description: "test overflow text, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, laboriosam." },
    // {  id: 't-12', status: "TODO", name: "test1-todo", description: "" },
  ],
  inprocess: [
    {  id: 't-4', status: "INPROCESS", name: "test1-inprocess", description: "" },
  ],
  done: [
    {  id: 't-5', status: "DONE", name: "test1-done", description: "my test finish" },
    {  id: 't-6', status: "DONE", name: "test overflow title, Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", description: "Yay go done" },
  ],
};
