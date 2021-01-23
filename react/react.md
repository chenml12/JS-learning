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

