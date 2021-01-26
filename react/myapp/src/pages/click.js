import React from "react";
class Click extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      left: 0,
      top: 250,
      amount: "1",
    };
    this.startX = 0;
    this.stateY = 0;
  }

  click(val) {
    console.log(val);
  }
  clickes6 = () => {
    console.log("点击事件es6");
  };
  // 鼠标移入时执行的函数
  mouseOver() {
    this.setState({
      isActive: true,
    });
  }
  // 鼠标移出时执行的函数
  mouseOut() {
    this.setState({
      isActive: false,
    });
  }
  // 鼠标移动时执行的函数
  mouseMove(ev, move) {
    // console.log(ev.pageX, ev.pageY, move);
  }
  //手指按下
  touchStart(ev) {
    this.setState({
      isActive: true,
    });
    // console.log(ev.touches[0].pageX, ev.touches[0].pageY);
    this.startX = ev.touches[0].pageX - this.state.left;
    this.stateY = ev.touches[0].pageY - this.state.top;
  }
  //手指移动
  touchMove(ev) {
    // console.log(ev.touches[0].pageX, ev.touches[0].pageY);
    this.setState({
      left: ev.touches[0].pageX - this.startX,
      top: ev.touches[0].pageY - this.stateY,
    });
  }
  //手指抬起
  touchEnd() {
    this.setState({
      isActive: false,
    });
  }
  render() {
    return (
      <div>
        <button type="button" onClick={this.click.bind(this, "点击事件传参")}>
          点击事件
        </button>
        <button type="button" onClick={this.clickes6}>
          点击事件es6
        </button>
        <button
          type="button"
          onClick={() => {
            this.click("点击事件2");
          }}
        >
          点击事件2
        </button>
        <div
          className={this.state.isActive ? "box active" : "box"}
          onMouseOver={this.mouseOver.bind(this)}
          onMouseOut={this.mouseOut.bind(this)}
          //用箭头函数解决传参问题
          onMouseMove={(ev) => {
            this.mouseMove(ev, "move");
          }}
          onTouchStart={(ev) => {
            this.touchStart(ev);
          }}
          onTouchMove={(ev) => {
            this.touchMove(ev);
          }}
          style={{ left: this.state.left + "px", top: this.state.top + "px" }}
          onTouchEnd={this.touchEnd.bind(this)}
        ></div>
        <div>
          {/* defaultValue默认 */}
          <input
            type="text"
            value={this.state.amount}
            onChange={(ev) => {
              this.setState({
                amount: ev.target.value,
              });
            }}
          />
          数量:{this.state.amount}
          <br />
        </div>
      </div>
    );
  }
}
export default Click;
