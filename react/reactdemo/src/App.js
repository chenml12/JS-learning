import React from "react";
import Button from "./components/button";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <form action="https://www.baidu.com" target="_blank">
          <input type="text" />
          <Button type="submit">提交</Button>
          <Button type="reset">重置</Button>
        </form>
        <Button>删除</Button>
        <Button type="button">删除</Button>
      </div>
    );
  }
}

export default App;
