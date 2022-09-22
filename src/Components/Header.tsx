import { useState } from "react";
import { Input, Button } from "antd";
import "../Styles/Header.css";
import FormModal from "./FormModal";

const { Search } = Input;

export default function Header() {
  const [isSearching, setIsSearching] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const onSearch = (val: string) => {
    if (!val) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      console.log(val);
    }, 1500);
  };

  const modalHandler = () => {
    setIsShown(!isShown);
  };

  const onCreateCard = async (data: any) => {
    try {
      console.log(data);
      modalHandler()
    } catch (error) {
      console.log("error =>", error);
    }
  };

  return (
    <>
      <div className="hd-container">
        <Search
          placeholder="Search Title"
          onSearch={onSearch}
          style={{ width: 250 }}
          loading={isSearching}
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
