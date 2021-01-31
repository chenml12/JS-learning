import React from "react";
import "./style.css";
export default class Swiper extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.aData = [];
  }
  render() {
    // console.log(this.props.data);
    this.aData = this.props.data;
    if (this.aData.length > 0) {
      for (let i = 0; i < this.aData.length; i++) {
        if (i === 0) {
        }
        this.aData[i].className = "active";
      }
    }
    return (
      <div className="my-swiper-main">
        {this.props.data.length > 0 &&
          this.props.data.map((item, index) => {
            return (
              <div className="silde show" key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <img src={item.src} alt="" />
                </a>
              </div>
            );
          })}
        <div className="pagination">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }
}
