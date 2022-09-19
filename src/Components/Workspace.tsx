import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "../Styles/Workspace.css";
import Lane from "./Lane";

export default function Workspace() {
  const titles = ["TODO", "INPROCESS", "DONE"];
  const onDragEnd = (result: DropResult) => {
    console.log(result);
  };
  return (
    <div className="ws-container">
      <DragDropContext onDragEnd={onDragEnd}>
        {titles.map((status) => {
          return (
            <Lane key={status} id={status} title={status}/>
          );
        })}
      </DragDropContext>
    </div>
  );
}
