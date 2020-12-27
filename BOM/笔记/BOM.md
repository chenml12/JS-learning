## BOM

Browser Object Model 浏览器对象模型

window对象相关属性： innerWidth/innerHeight、close、open … 

1.  innerWidth/innerHeight   返回窗口的文档显示区的宽度/高度

   不包括浏览器控制台、菜单栏、工具栏

   

2. open(页面的地址url，打开的方式) 方法 打开一个新的窗口(页面)

​      如果 url 为空，则默认打开一个空白页面

​      如果打开方式为空，默认为新窗口方式打开

 返回值：返回新打开的窗口的 window 对象

打开的方式

- _blank - URL加载到一个新的窗口。这是默认
- _parent - URL加载到父框架
- _self - URL替换当前页面
- _top - URL替换任何可加载的框架集

3. close() 关闭窗口

```javascript
var aInput = document.getElementsByTagName("input");
var opener = null;
aInput[0].onclick = function () {
    // opener = window.open();
    window.open("http://www.baidu.com", "_self");
};
aInput[1].onclick = function () {
    window.close();
    /*
			1. ff : 无法关闭
			2. chrome : 直接关闭
			3. ie : 询问用户
		*/
};

aInput[2].onclick = function () {
    opener.close();
    // 可以关闭在本窗口中通过js方法打开的新窗口
};
```

4. confirm()	显示一个带有指定消息和确认及取消按钮的对话框。

   confirm('提示文字')

   ​        返回值：布尔值

   ​          确定:true

   ​          取消:false

5. prompt()   显示可提示用户进行输入的对话框。 

     prompt('提示文字','默认文字')

   ​        返回值：string或null

   ​          确定：文本框内的文字

   ​          取消：null

````javascript
if(confirm('是否删除')){
    console.log('删了')
}else{
    console.log('没删')
}


	console.log(prompt('要在对话框中显示的纯文本','默认的输入文本'))

````



### 事件

1. onscroll:当滚动条滚动的时候触发
2. onresize:当窗口大小发生改变的时候触发

**焦点事件**

1. onfocus:：获取焦点事件

   当元素获取到焦点的时候触发

2. onblue：失去焦点事件

   当元素失去焦点的时候触发

*元素对象方法*

obj.focus() 给指定的元素设置焦点

obj.blur() 取消指定元素的焦点

 obj.select() 选择指定元素里面的文本内容

````javascript
<input type="text" id="txt" value="11111   +1111" />

const txt = document.getElementById("txt");
txt.onfocus = function () {
console.log("获取焦点事件");
};
txt.onblur = function () {
console.log("失去焦点事件");
};
txt.focus(); //给指定的元素设置焦点事件
txt.blur(); //取消指定元素的焦点
txt.select(); //选择指定元素里面的文本内容
````

**Event对象**

​	event: 事件对象

​    用来记录事件触发时的相关详细信息

````javascript
console.log(event); //ie:null  chrome:undefined    这里没有事件
document.onclick = function (ev) {
    //兼容标准浏览器和ie
    ev = ev || event;
    console.log(ev);
};
````

 **clientX属性**

1.  clientX/clientY:当前鼠标到页面可视区的 左边/顶部 的距离

   ```javascript
   //clientY是相对可视区的距离，如果有滚动条的时候需要加上滚动条的距离
   const box = document.getElementById("box");
   document.onmousemove = function (ev) {
   console.log(111);
   ev = ev || event;
   let scrollTop =
   document.documentElement.scrollTop || document.body.scrollTop;
   box.style.left = ev.clientX + "px";
   box.style.top = ev.clientY + scrollTop + "px";
   };
   ```

   **事件流**

    事件流/事件模型

   ​          事件触发的三个阶段：

   ​            捕获阶段

   ​              从最外层到目标元素

   ​            目标阶段

   ​              目标元素

   ​            冒泡阶段

   ​              从目标元素到最外层

   ​          注意：

   ​          用on绑定的事件只能在冒泡阶段执行

   ​          必须是相同事件才会冒泡

   ​          同一元素的同一事件（用on绑定的）

   ​          事件函数后绑定的会覆盖前边绑定的

**阻止冒泡**

  IE：event.cancelBubble = true;  

  W3C：event.stopPropagation();

````javascript
const btn = document.getElementById("btn");
const box = document.getElementById("box");
btn.onclick = function (ev) {
ev = ev || event;
box.style.display = "block";
//阻止冒泡
ev.stopPropagation(); // W3C
// ev.cancelBubble = true; //IE
};
document.onclick = function () {
box.style.display = "none";
};
````

**事件监听器绑定事件**

元素.addEventListener(事件名，函数，布尔值)

​        事件监听器绑定事件

​        参数：

​          事件名：string,不带on,

​          函数:事件函数，有名或匿名

​          布尔值：默认是false

​            true:捕获阶段调用函数

​            false:冒泡阶段调用函数

​        注意：

​          1.匿名函数不相同

​          2.同一元素的同一事件绑定相同的有名函数，后边覆盖前边，只绑了一个

​          3.同一元素的同一事件可以绑定多个不同函数

​          4.不要随便捕获阶段执行，除非需要提前执行的

​          5.移动端只能用addEventListener绑定事件，不能用on

iE:元素. attachEvent  ('onclick',function(){})

````javascript
//同一元素的同一事件可以绑定多个不同的函数
document.addEventListener('click',function(){
    console.log(1)
})
document.addEventListener('click',function(){
    console.log(2)
})
//同一元素的同一事件绑定同一函数，只留一个
document.addEventListener('click',fn)
document.addEventListener('click',fn)
function fn(){
    console.log(1)
}
````

