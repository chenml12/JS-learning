import React from "react";
import ReactDom from "react-dom";
import HeaderComponent from "./components/header";
import Click from "./pages/click.js";
import "./assets/css/app.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      bShow: true,
      goods: [
        {
          id: 1,
          title: "春装",
        },
        {
          id: 2,
          title: "夏装",
        },
        {
          id: 3,
          title: "秋装",
        },
      ],
      stateTitle: "更新state",
    };
  }
  //页面将要加载
  UNSAFE_componentWillMount() {
    console.log("componentWillMount");
  }
  // 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
  UNSAFE_componentWillReceiveProps(newProps) {
    console.log("componentWillReceiveProps", newProps, 11111111);
  }
  //返回一个布尔值。false为不更新组件，true为更新，在组件接收到新的props或者state时被调用。在初始化时不被调用。可以在你确认不需要更新组件时使用。用于优化
  shouldComponentUpdate(newProps, newState) {
    console.log(newProps, newState, 11111111);
    //ESLint代码检测
    /*eslint-disable*/
    if (this.state.bShow == newState.bShow) {
      return false;
    } else {
      return true;
    }
    /*eslint-enable*/
  }
  //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。16.10之后UNSAFE_componentWillUpdate
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate", nextProps, nextState);
  }

  //在组件完成更新后立即调用。在初始化时不会被调用。
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", prevProps, prevState);
  }

  //页面加载完成
  componentDidMount() {
    console.log(this.refs["goods"]); //本组件获取元素
    // console.log(document.getElementById('header'))//跨组件获取元素---不建议获取dom（消耗性能）
    let header = ReactDom.findDOMNode(document.getElementById("header"));
    console.log(header, "虚拟dom");
  }
  changeShow() {
    this.setState({
      bShow: !this.state.bShow,
    });
  }
  changeStateTitle() {
    this.setState(
      {
        stateTitle: "已更新",
      },
      () => {
        console.log(this.state.stateTitle); //已更新
      }
    );
    console.log(this.state.stateTitle); //更新state
  }
  //在组件从 DOM 中移除的时候立刻被调用。（当离开页面时调用）
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    const name = "hello";
    return (
      <div className="App">
        <HeaderComponent title="首页" isShow={true}></HeaderComponent>

        {name}
        <div ref="goods">商品</div>
        {/* {this.state.bShow? <div className='box'></div>:''} */}
        {this.state.bShow && <div className="box"></div>}
        <button type="button" onClick={this.changeShow.bind(this)}>
          显示/隐藏
        </button>
        <ul>
          {this.state.goods.map((item, index) => {
            return (
              <li key={index}>
                {index}.{item.title}
              </li>
            );
          })}
        </ul>
        <button onClick={this.changeStateTitle.bind(this)}>
          {this.state.stateTitle}
        </button>
        {/* 点击事件 */}
        <Click></Click>
      </div>
    );
  }
}

export default App;
