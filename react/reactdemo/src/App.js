import React, { lazy, Suspense } from "react";
// import Button from "./components/button";
// import Input from "./components/input";
// const Input = React.lazy(() => {
//   return import("./components/input");
// });

const Input = React.lazy(() => import("./components/input"));
//es5
// const Input = React.lazy(function () {
//   return import("./components/input");
// });
const Button = React.lazy(() => import("./components/button"));
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
          {this.state.isShowInput && (
            <React.Suspense fallback={<div>loading...</div>}>
              <Input />
            </React.Suspense>
          )}
          <React.Suspense fallback={<React.Fragment></React.Fragment>}>
            <Button type="submit">提交</Button>
            <Button type="reset">重置</Button>
          </React.Suspense>
        </form>
        <React.Suspense fallback={<React.Fragment></React.Fragment>}>
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
        </React.Suspense>
      </div>
    );
  }
}

export default App;
