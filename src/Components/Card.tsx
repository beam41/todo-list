import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { IBacklogItem } from "../Models/Backlog.Model";
import "../Styles/Card.css";
import { getCardByStatus } from "../utils/cardService";
import { editCard } from "../utils/dispatchAction";
import FormModal from "./FormModal";

interface IComponentProp {
  data: IBacklogItem;
  index: number;
}

export default function Card({ data, index }: IComponentProp) {
  const { status, name, description, id } = data;
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  const modalHandler = () => {
    setIsShown(!isShown);
  };

  const isChanged = (data: any) => {
    return name !== data.name || description !== data.description;
  };

  const onUpdateCard = async (data: any) => {
    try {
      const card = getCardByStatus(id, status);
      const payload: IBacklogItem = {
        id,
        index: card.index,
        status,
        name: data.title,
        description: data.description,
      };

      if (isChanged(payload)) dispatch(editCard(status, payload));
      modalHandler();
    } catch (error) {
      console.log("error =>", error);
    }
  };

  return (
    <>
      <Draggable key={id} draggableId={id} index={index}>
        {(provided) => (
          <div
            className="card"
            onClick={modalHandler}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={`tag ${status}`}>{status}</div>
            <div className="title">{name}</div>
            {description && <div className="detail">{description}</div>}
          </div>
        )}
      </Draggable>

      <FormModal
        isShown={isShown}
        submitText="Update"
        title={name}
        description={description}
        modalHandler={modalHandler}
        handleFunction={onUpdateCard}
      />
    </>
  );
}
