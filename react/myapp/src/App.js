import React from 'react';
import ReactDom from 'react-dom';
import HeaderComponent from './components/header';
import './assets/css/app.css'
class App extends React.Component{
  constructor(){
    super();
    this.state={
      bShow:true,
      goods:[
        {
          id:1,title:'春装'
        },
        {
          id:2,title:'夏装'
        }, {
          id:3,title:'秋装'
        }
      ]
    }
  }
  componentDidMount(){
    console.log(this.refs['goods'])//本组件获取元素
    // console.log(document.getElementById('header'))//跨组件获取元素---不建议获取dom（消耗性能）
    let header=ReactDom.findDOMNode(document.getElementById('header'))
    console.log(header,'虚拟dom');
   
  }
  changeShow(){
   this.setState({
     bShow:false
   })
  }
  render(){
    const name='hello'
    return(
      <div className="App">
        <HeaderComponent></HeaderComponent>
     {name}
     <div ref='goods'>商品</div>
    {/* {this.state.bShow? <div className='box'></div>:''} */}
    {this.state.bShow&& <div className='box'></div>}
    <button type='button' onClick={this.changeShow.bind(this)}>显示/隐藏</button>
    <ul>
      {
        this.state.goods.map((item,index)=>{
return(
  <li key={index}>{index}.{item.title}</li>
)
        })
      }
    </ul>
      </div>
    )
  }
}


export default App;
