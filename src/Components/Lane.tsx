import { useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { mockData } from "../mock-data/data";
import { IBacklog, IBacklogItem, Status } from "../Models/Backlog.Model";
import "../Styles/Lane.css";
import { createCard } from "../utils/dispatchAction";
import Card from "./Card";

interface IComponentProps {
  id: string;
  status: Status;
  data?: IBacklogItem[];
}

const Lane = ({ id, status, data }: IComponentProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // fetch data
    const d = mockData[status];
    dispatch(createCard(status, d));
  };

  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          className="lane-container"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="lane-title">{status}</div>
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
  console.log(state)
  console.log(props.status, state[props.status])
  return {
    id: props.id,
    status: props.status,
    data: state[props.status],
  } as IComponentProps;
};

export default connect(mapStateToProps)(Lane);
