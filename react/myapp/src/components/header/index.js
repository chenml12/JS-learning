import React, { Component } from "react";
//检查props类型
import PropTypes from "prop-types";

class HeaderComponent extends Component {
  render() {
    return (
      <div id="header">
        {/* 用props接收 */}
        {this.props.title}
        <button onClick={this.props.sendParent.bind(this, "这个是子组件的值")}>
          点击
        </button>
      </div>
    );
  }
}
HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired, //检测为字符串类型并且为必填项
  isShow: PropTypes.bool, //检测为布尔值
};
HeaderComponent.defaultProps = {
  title: "默认标题",
};

export default HeaderComponent;
