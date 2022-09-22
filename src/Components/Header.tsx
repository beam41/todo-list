import { useState } from "react";
import { Input, Button, Modal, Form } from "antd";
import "../Styles/Header.css";

const { Search } = Input;
const { TextArea } = Input;

export default function Header() {
  const [form] = Form.useForm();
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
    form.resetFields();
    setIsShown(!isShown);
  };

  const onCreateSubmit = async () => {
    try {
      const data = await form.validateFields();
      onCreate(data);
    } catch (error) {
      console.log("Validate Failed:", error);
    }
  };

  const onCreate = (data) => {
    console.log(data);
    modalHandler();
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

      <Modal
        open={isShown}
        okText="Create"
        cancelText="Cancel"
        onCancel={modalHandler}
        onOk={onCreateSubmit}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: "public",
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: "Please title",
              },
            ]}
          >
            <Input showCount maxLength={30}/>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <TextArea autoSize style={{resize: "none"}}/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
