import { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { mockData } from "../mock-data/data";
import { IBacklog, IBacklogItem } from "../Models/Backlog.Model";
import "../Styles/Lane.css";
import Card from "./Card";

interface IComponentProp {
  title: string;
  id: string;
  children?: JSX.Element[];
}

export default function Lane({ title, children, id }: IComponentProp) {
  const [data, setData] = useState<IBacklogItem[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // fetch data
    const d = mockData[title.toLowerCase()];
    setData(d);
  };

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          className="lane-container"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="lane-title">{title}</div>
          {data.map((el, index) => (
            <Card key={index} index={index} data={el} />
          ))}
          <div>{children}</div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
