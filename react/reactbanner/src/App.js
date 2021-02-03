import React from "react";
import Swiper from "./components/swiper";
import "./assets/css/app.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      images2: [],
    };
  }
  componentDidMount() {
    let images = [
      {
        src: require("./assets/images/banner1.jpg").default,
        url: "https://www.baidu.com/",
      },
      {
        src: require("./assets/images/banner2.jpg").default,
        url: "https://www.taobao.com/",
      },
      {
        src: require("./assets/images/banner3.jpg").default,
        url: "https://github.com/",
      },
    ];
    this.setState({
      images: images,
    });
    let images2 = [
      {
        src: require("./assets/images/banner2.jpg").default,
        url: "https://www.baidu.com/",
      },
      {
        src: require("./assets/images/banner3.jpg").default,
        url: "https://www.taobao.com/",
      },
      {
        src: require("./assets/images/banner1.jpg").default,
        url: "https://github.com/",
      },
    ];
    this.setState({
      images2: images2,
    });
  }
  render() {
    return (
      <div className="App">
        <div className="banner">
          <Swiper data={this.state.images}></Swiper>
          <Swiper data={this.state.images2}></Swiper>
          <Swiper></Swiper>
        </div>
      </div>
    );
  }
}
export default App;
