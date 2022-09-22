import { useEffect, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { mockData } from "../mock-data/data";
import { IBacklog, IBacklogItem } from "../Models/Backlog.Model";
import "../Styles/Lane.css";
import { createCard } from "../utils/dispatchAction";
import Card from "./Card";

interface IComponentProps {
  title: string;
  id: string;
  data?: IBacklogItem[];
}

const Lane = ({ id, title, data }: IComponentProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // fetch data
    const d = mockData[title.toLowerCase()];
    dispatch(createCard(title, d));
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
          {data?.map((el, index) => (
            <Card key={index} index={index} data={el} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const mapStateToProps = function (state: IBacklog, props: IComponentProps) {
  return {
    id: props.id,
    title: props.title,
    data: state[props.title.toLowerCase()],
  } as IComponentProps;
};

export default connect(mapStateToProps)(Lane);
