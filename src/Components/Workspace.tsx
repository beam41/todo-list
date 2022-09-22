import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useStore } from "react-redux";
import { Status } from "../Models/Backlog.Model";
import "../Styles/Workspace.css";
import { getCardByStatus, updateCardStatus } from "../utils/cardService";
import { addCard, deleteCard } from "../utils/dispatchAction";
import Lane from "./Lane";

export default function Workspace() {
  const store = useStore();
  const titles = ["TODO", "DOING", "DONE"];
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // !destination for undroppable area
    // destination.droppableId === source.droppableId for same area
    if (!destination || destination.droppableId === source.droppableId) {
      return;
    }

    const originId = source.droppableId;
    const desId = destination.droppableId as Status;
    const data = getCardByStatus(draggableId, source.droppableId, store);
    const newData = updateCardStatus(data, desId)
    store.dispatch(deleteCard(originId, data.id));
    store.dispatch(addCard(desId, newData));
  };

  return (
    <div className="ws-container">
      <DragDropContext onDragEnd={onDragEnd}>
        {titles.map((status) => {
          return <Lane key={status} id={status} title={status} />;
        })}
      </DragDropContext>
    </div>
  );
}
