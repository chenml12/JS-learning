import React, { Component } from "react";
import "./style.css";
export default class InputComponent extends Component {
  render() {
    return (
      // 定义组件的时候return里最外层包裹的div不想渲染到页面，那么就用到Fragment组件
      <React.Fragment>
        <button type={this.props.type}>
          {/* 插槽子页面: */}
          {this.props.children}
          {/*调用父级App组件里的内容*/}
        </button>
      </React.Fragment>
    );
  }
}
//默认属性
InputComponent.defaultProps = {
  type: "button",
};
