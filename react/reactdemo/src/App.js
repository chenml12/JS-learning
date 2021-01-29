import React, { lazy } from "react";
import Button from "./components/button";
// import Input from "./components/input";
// const Input = lazy(() => import("./cmponents/input"));
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowInput: false,
    };
  }
  del() {
    console.log("删除");
  }
  showInput() {
    this.setState({
      isShowInput: true,
    });
  }
  render() {
    return (
      <div className="App">
        <form action="https://www.baidu.com" target="_blank">
          {this.state.isShowInput && <Input />}
          <Button type="submit">提交</Button>
          <Button type="reset">重置</Button>
        </form>
        <Button
          className="btn-bg"
          style={{
            width: "100px",
            height: "30px",
            color: "red",
            fontSize: "20px",
          }}
          onClick={this.del.bind(this)}
        >
          删除
        </Button>
        <Button type="button">修改</Button>
        <Button type="button" onClick={this.showInput.bind(this)}>
          显示input组件
        </Button>
      </div>
    );
  }
}

export default App;
