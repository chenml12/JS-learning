import React from "react";
import Swiper from "./components/swiper";
import "./assets/css/app.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          src: require("./assets/images/banner1.jpg").default,
          url: "https://www.baidu.com/",
        },
        {
          src: require("./assets/images/banner2.jpg").default,
          url: "https://www.baidu.com/",
        },
        {
          src: require("./assets/images/banner3.jpg").default,
          url: "https://www.baidu.com/",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <div className="banner">
          <Swiper data={this.state.images}></Swiper>
        </div>
      </div>
    );
  }
}
export default App;
