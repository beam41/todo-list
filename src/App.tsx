import "./App.css";
import "antd/dist/antd.css";
import Header from "./Components/Header";
import Workspace from "./Components/Workspace";
import { BackTop, Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Workspace />
      </div>

      <BackTop visibilityHeight={100}>
        <Button
          type="primary"
          icon={<ArrowUpOutlined />}
          shape="circle"
          size="large"
        >
        </Button>
      </BackTop>
    </div>
  );
}

export default App;
