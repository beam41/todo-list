import { Draggable } from "react-beautiful-dnd";
import { IBacklogItem } from "../Models/Backlog.Model";
import "../Styles/Card.css";

interface IComponentProp {
  data: IBacklogItem;
  index: number;
}

export default function Card({ data, index }: IComponentProp) {
  const { status, name, description, id } = data;
  const statusClass = status.toLowerCase();
  const statusDisplayed = status.toUpperCase();

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={`tag ${statusClass}`}>{statusDisplayed}</div>
          <div className="title">{name}</div>
          {description && <div className="detail">{description}</div>}
        </div>
      )}
    </Draggable>
  );
}
