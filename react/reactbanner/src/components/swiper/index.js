import React from "react";
import "./style.css";
export default class Swiper extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.aData = [];
    this.isInit = true;
    this.timer = null;
    this.index = 0;
  }
  componentDidMount() {
    this.autoPlay();
  }
  //自动播放
  autoPlay() {
    this.timer = setInterval(() => {
      if (this.aData.length > 0) {
        this.isInit = false;
        for (let i = 0; i < this.aData.length; i++) {
          if (this.aData[i].active) {
            this.aData[i].active = false;
            break;
          }
        }
        // console.log(this.index);
        if (this.index >= this.aData.length - 1) {
          this.index = 0;
        } else {
          this.index++;
        }
        this.aData[this.index].active = true;
        this.setState({
          data: this.aData,
        });
      }
    }, 3000);
  }
  //点击切换图片
  changeImg(index) {
    this.isInit = false;
    if (this.aData.length > 0) {
      for (let i = 0; i < this.aData.length; i++) {
        if (this.aData[i].active) {
          this.aData[i].active = false;
          break;
        }
      }
    }
    this.aData[index].active = true;
    this.setState({
      data: this.aData,
    });
  }
  componentWillUnmount() {
    //页面离开的时候清除定时器
    clearInterval(this.timer);
  }
  render() {
    this.aData = this.props.data;
    if (this.aData.length > 0 && this.isInit) {
      for (let i = 0; i < this.aData.length; i++) {
        if (i === 0) {
          this.aData[i].active = true;
        } else {
          this.aData[i].active = false;
        }
      }
    }

    return (
      <div className="my-swiper-main">
        {this.aData.length > 0 &&
          this.aData.map((item, index) => {
            return (
              <div className={item.active ? "silde show" : "silde"} key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.src} alt="" />
                </a>
              </div>
            );
          })}
        <div className="pagination">
          {this.aData.length > 0 &&
            this.aData.map((item, index) => {
              return (
                <div
                  className={item.active ? "dot active" : "dot"}
                  key={index}
                  onClick={this.changeImg.bind(this, index)}
                ></div>
              );
            })}
        </div>
      </div>
    );
  }
}
