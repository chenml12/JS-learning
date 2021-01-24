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

````javascript
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

**条件渲染**

1. 三元表达式
2. &&

````javascript
this.state={
    bShow:true
} 
{this.state.bShow? <div className='box'></div>:''}//三元
 {this.state.bShow&& <div className='box'></div>}//&&
````

**React Props**

 state 和 props 主要的区别在于 **props** 是不可变的，而 state 可以根据与用户交互来改变。这就是为什么有些容器组件需要定义 state 来更新和修改数据。 而子组件只能通过 props 来传递数据。 

props默认值

````javascript
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

````javascript
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