import { useState } from "react";
import { Input, Button } from "antd";
import "../Styles/Header.css";
import FormModal from "./FormModal";
import { Status } from "../Models/Backlog.Model";
import { creatNewCard } from "../utils/cardService";
import { useDispatch } from "react-redux";
import { addCard, searchCard } from "../utils/dispatchAction";
import cacheData from "../utils/cacheData";

const { Search } = Input;

export default function Header() {
  const [isSearching, setIsSearching] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();

  const searchHandler = (val: string) => {
    Boolean(val) ? onSearch(val) : onClearSearch();
  };

  const onSearchPressEnter = () => {
    const search: HTMLInputElement = document.getElementById(
      "search-input"
    ) as any;

    if (search.value) searchHandler(search.value);
  };

  const onSearch = (val: string) => {
    if (val === cacheData.searchKey) return;
    setIsSearching(true);

    cacheData.searchKey = val;
    dispatch(searchCard(Status.TODO, val));
    dispatch(searchCard(Status.DOING, val));
    dispatch(searchCard(Status.DONE, val));

    setIsSearching(false);
  };

  const onClearSearch = () => {
    cacheData.searchKey = "";
    dispatch(searchCard(Status.TODO));
    dispatch(searchCard(Status.DOING));
    dispatch(searchCard(Status.DONE));
  };

  const modalHandler = () => {
    setIsShown(!isShown);
  };

  const onCreateCard = async (data: any) => {
    try {
      const payload = creatNewCard(data.title, data.description);
      dispatch(addCard(Status.TODO, payload));
      modalHandler();
    } catch (error) {
      console.log("error =>", error);
    }
  };

  return (
    <>
      <div className="hd-container">
        <Search
          placeholder="Search Title"
          id="search-input"
          style={{ width: 250 }}
          loading={isSearching}
          onSearch={searchHandler}
          onPressEnter={onSearchPressEnter}
          enterButton
          allowClear
        />

        <Button type="primary" onClick={modalHandler}>
          Create
        </Button>
      </div>

      <FormModal
        isShown={isShown}
        submitText="Create"
        modalHandler={modalHandler}
        handleFunction={onCreateCard}
      />
    </>
  );
}
