## React

**React创建项目**

create-react-app 项目名称

cd 项目名称

npm start

**React元素渲染**

ReactDOM：React框架提供的一个对象

ReactDOM.render(要渲染的内容，放置内容的容器)

渲染指定内容到指定的容器中（body不能作为容器）

**获取元素的方式**

ref只能获取本组件的元素

````react
import React from 'react';
import ReactDom from 'react-dom';
import HeaderComponent from './components/header';
class App extends React.Component{
    componentDidMount(){
        console.log(this.refs['goods'])//本组件获取元素
        // console.log(document.getElementById('header'))//跨组件获取元素---不建议获取dom（消耗性能）
        let header=ReactDom.findDOMNode(document.getElementById('header'))
        console.log(header,'虚拟dom')
    }
    render(){
        const name='hello'
        return(
            <div className="App">
                <HeaderComponent></HeaderComponent>
                {name}
                <div ref='goods'>商品</div>
            </div>
        )
    }
}


export default App;

````



**什么是JSX**

JSX 是 JavaScript 的一种语法扩展，并拥有 JavaScript 的全部功能。

Javascript+xml

基于javascript语言，融合了xml，我们可以在js中书写xml

xml:可扩展（自定义）标记语言

只能有且仅有一个顶级元素

支持插值表达式

​	插值表达式：类似ES6中模板字符串${表达式}

**JSX与普通html区别  **

1、React 事件使用驼峰命名，而不是全部小写。

2、通过 JSX , 你传递一个函数作为事件处理程序，而不是一个字符串。

````react
<button onclick="activateLasers()">
    Activate Lasers
</button>

//在 React 中略有不同：
<button onClick={this.activateLasers.bind(this)}>
    Activate Lasers
</button>
````



**条件渲染**

1. 三元表达式
2. &&

````react
this.state={
    bShow:true
} 
{this.state.bShow? <div className='box'></div>:''}//三元
{this.state.bShow&& <div className='box'></div>}//&&
````

**React Props**

 state 和 props 主要的区别在于 **props** 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。 

props默认值

````react
//父组件传值
<HeaderComponent title='首页' isShow={true}></HeaderComponent>

//子组件接收
import React, { Component } from 'react';
//检查props类型
import PropTypes from 'prop-types';
HeaderComponent.propTypes={
    title:PropTypes.string.isRequired, //检测为字符串类型并且为必填项
    isShow:PropTypes.bool//检测为布尔值
}
HeaderComponent.defaultProps={
    title:"默认标题"
}

````

**状态state  **

 React 里，只需更新组件的 state，然后根据新的 state 重新渲染用户界面（不要操作 DOM）。 

在 super() 被调用之前，子类是不能使用 this 的，在 ES2015 中，子类必须在 constructor 中调用 super()。传递 props 给 super() 的原因则是便于(在子类中)能在 constructor 访问 props。



**setState**：更新state里面的值，这是一个异步方法。

第二个参数是回调函数。

````react
this.setState({name:"李四",age:20},()=>{
    console.log(this.state.name);
});
````

可以用 this.setState()更新组件的状态。

**生命周期**

组件的生命周期可分成三个状态：

- Mounting：已插入真实 DOM（挂载）
- Updating：正在被重新渲染（渲染）
- Unmounting：已移出真实 DOM（移除）

 生命周期的方法有： 

1. 挂载过程

   1. constructor()---创建组件时调用

      constructor()中完成了React数据的初始化，他接受两个参数：props和context，当想在函数内部使用这个两个参数时，需要使用supper（）传入这两个参数

      注意：只要使用了constructor（）就必须写supper（），否则会导致this指向错误

   2. componentWillMount()--页面将要加载时调用

      注意：16.10已废除，如果需要使用需要写UNSAFE_componentWillMount

       componentWillMount() 在渲染前调用,在客户端也在服务端。 它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。

   3.   componentDidMount（）

       组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染 方法会在组件已经被渲染到 DOM 中后运行   
   
   4.  componentWillReceiveProps
   
       在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。 
   
      注意：16.10已废除，如果需要使用需要写UNSAFE_ componentWillReceiveProps
   
   5. componentWillUpdate  
   
      在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
   
      注意：16.10已废除，如果需要使用需要写UNSAFE_ componentWillUpdate  
   
   6.  componentWillUpdate
   
      在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
   
   注意：16.10已废除，如果需要使用需要写UNSAFE_componentWillUpdate
   
   7.  componentDidUpdate  
   
       在组件完成更新后立即调用。在初始化时不会被调用。
   
   8. render    页面渲染，react中的核心函数
   
   9. componentWillUnmount
   
      在组件从 DOM 中移除的时候立刻被调用。（当离开页面时调用）
   
   ````react
   import React from "react";
   import ReactDom from "react-dom";
   import HeaderComponent from "./components/header";
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
               </div>
           );
       }
   }
   
   export default App;
   
   ````
   

**事件**

1. onclick:点击事件

   bind call apply区别

    三者都是用于改变函数体内this的指向

   区别：

   bind不会立即调用，返回一个新函数，称为绑定函数，其内的this指向为创建它时传入bind的第一个参数，而传入bind的第二个及以后的参数作为原函数的参数来调用原函数。 

    apply和call的调用返回函数执行结果

    如果使用apply或call方法，那么this指向他们的第一个参数，apply的第二个参数是一个参数数组，call的第二个及其以后的参数都是数组里面的元素，就是说要全部列举出来；

   ````react
   import React from "react";
   class Click extends React.Component {
       constructor() {
           super();
           this.state = {};
       }
       click(val) {
           console.log(val);
       }
       clickes6 = () => {
           console.log("点击事件es6");
       };
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
           </div>
       );
   }
   }
   export default Click;
   
   ````

   onMouseOver:鼠标移动元素上

   onMouseOut:鼠标离开元素

   onMouseMove：鼠标移动

   onTouchStart：触摸开始

   onTouchMove：触摸移动

   onTouchEnd：触摸结束
   
   **模拟双向绑定  **
   
   ````react
   {/*可以输入的默认值属性：defaultValue*/}
   <input type="text" placeholder="模拟双向绑定" value={this.state.bindval} onChange={(e)=>{this.setState({bindval:e.target.value})}}  />
   
   ````
   
   **父子组件传值**
   
   ````react
   //父组件
   import React from "react";
   import Button from "./components/button";
   class App extends React.Component {
       constructor() {
           super();
           this.state = {};
       }
       del() {
           console.log("删除");
       }
       render() {
           return (
               <div className="App">
                   <form action="https://www.baidu.com" target="_blank">
                       <input type="text" />
                       <Button type="submit">提交</Button>
                       <Button type="reset">重置</Button>
                   </form>
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
               </div>
           );
       }
   }
   
   export default App;
   
   ````
   
   ````react
   //子组件
   import React, { Component } from "react";
   import "./style.css";
   export default class InputComponent extends Component {
       render() {
           return (
               // 定义组件的时候return里最外层包裹的div不想渲染到页面，那么就用到Fragment组件
               <React.Fragment>
                   <button
                       type={this.props.type}
                       className={"my-button " + this.props.className}
                       style={this.props.style}
                       onClick={this.props.onClick}
                       >
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
   
   ````
   
   **懒加载（按需加载）**
   
   