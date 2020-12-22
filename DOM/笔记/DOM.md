DOM（文档对象模型）

通过document提供的一些方法或者属性来操作页面

#### 节点类型

![1608172890561](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1608172890561.png)



````javascript
var div = document.getElementById("div1");
console.log(div.nodeType); //1 元素节点

<p>你好</p>
<script>
    const p = document.querySelector("p");
if (p.nodeType == 1) {
    console.log("这个是元素节点");
}
if (p.childNodes[0].nodeType == 3) {
    console.log("这个是文字节点");
}
document.onclick = function () {
    console.log(this.nodeType); //9
};
</script>
````

#### 获取节点

1. 通过document对象获取，

   例如： document.getElementById(id);

2. 指针节点（既通过节点关系，*后面没有小括号*）

   1. childNodes

      语法：父节点.childNodes

      功能:获取一个元素的**所有**子节点

   2. chidren（不是标准的属性，但是所有浏览器都支持。）

      语法：父节点.childNodes

      功能：获取一个元素的**所有元素**子节点

   3. firstChild

      语法：父节点.firstChild

      功能:获取元素的第一个子节点

   3. lastChild

      语法：父节点.lastChild

      功能：获取元素的最后一个子节点

   4. previousSibling

      语法：父节点.previousSibling

      功能:获取一个元素的**所有**子节点

   5. nextSibling

      语法：兄弟节点.nextSibling

      功能:获取已知节点的后一个节

   6. parentNode

      语法：子节点.parentNode

      功能：获取已知节点的付节点

   ````javascript
var list = document.getElementById("list"); //通过document提供的对象获取
   //   var lis = list.children;
   //   console.log(lis.length); //3  (只有元素节点)
   var lis = list.childNodes;
   console.log(lis.length); //7(包括了空格-文本节点)
   ````
   
   7. offsetParent(没有定位，默认为dody)

      语法：该元素.offsetParent

      功能：获取最近的有定位的祖先节点

   #### 元素宽高/可视区域大小

   #### 获取距离

   1. offsetLeft/offsetTop(获取样式)

      语法：该元素.offsetLeft/offsetTop

      功能：获取外边框到有定位父级**position: relative**的内边框的左边距离/上边距离。（没有px）

   2. getBoundingClientRect  获取某个元素的信息（高版本：left,top,bottom,rigit,width,height）

      语法：该元素.getBoundingClientRect().left

      功能：获取元素左边距离**页面**左边的距离 (相对于浏览器可视区域)
   
   
   
   ````css
#div3 {
       width: 50px;
    height: 50px;
       background: blue;
    position: absolute;
       left: 100px;
    border: 4px solid #ddd;
       padding: 5px;
    margin: 5px;
   }
   ````
````javascript
var div3 = document.getElementById("div3");
//元素外边框到有定位父级的内边框的距离。
   // left + margin
   console.log(div3.offsetLeft); //105   div3距离定位父级的距离
   // 元素外边框到页面左边的距离
   // div1的margin50+left+margin
   console.log(div3.getBoundingClientRect().left); //155   div3距离页面左边的距离
   console.log(div3.offsetTop); //5  margin=5  div3到定位父级的上边距离（一直不会变）
   //获取的值是会根据滚动条变化的。
   console.log(div3.getBoundingClientRect().top); //有滚动条就一直在变
````

   **不同点**

   offset获取元素外边框到定位父级的距离

   getBoundingClientRect 获取到页面顶部的距离（**获取的值是会根据滚动条变化**）

****

   #### 获取宽高

​	**功能：获取某个元素的宽高**

1. offsetWidth/offsetHeight

   语法：元素.offsetWidth/offsetHeight

2. getBoundingClientRect().width/height

   语法：元素.getBoundingClientRect().width/height

3. clientWidth/clientHeight

   语法：元素.clientWidth/ 元素.clientHeight

````css
#box {
    width: 100px;
    height: 100px;
    background: red;
    padding: 10px;
    margin: 20px;
    border: 5px solid #000;
}
````

````javascript
//获取元素的宽高
var box = document.getElementById("box");
/* offsetWidth: 宽度+边框+padding+margin的宽度
			计算边框	
      */
console.log(box.offsetWidth); //130
/* getBoundingClientRect:宽度+边框+padding+margin的宽度
			计算边框	
      */
console.log(box.getBoundingClientRect().width); //130
/* clientWidth:宽度+padding+margin的宽度
			不计算边框	
      */
console.log(box.clientWidth); //120
````

**获取可视区的宽高**

 document.documentElement.clientWidth/clientHeight

​	让一个不确定宽高的元素居中显示(**一定要有定位**)

````css
#div {
    width: 100px;
    height: 100px;
    background: red;
    border: 10px solid #000;
    padding: 5px;
    margin: 10px;
    position: relative;
}
````

````javascript
//不带px
var div = document.getElementById("div");
var clientW = document.documentElement.clientWidth;//可视区宽
var clientH = document.documentElement.clientHeight;//可视区高
var iW = div.offsetWidth;//元素宽
var iH = div.offsetHeight;//元素高
div.style.left = (clientW - iW) / 2 + "px";
div.style.top = (clientH - iH) / 2 + "px";
````

**滚动条滚动距离**

` document.documentElement.scrollTop/scrollLeft`

**内容高度**

`document.body.scrollHeight`

**文档高度**

`document.documentElement.offsetHeight`（标准）

`document.body.offsetHeight`（IE+标准） --建议使用



 offsetWidth  clientWidth innerWidth区别 ：

https://www.cnblogs.com/feijiediyimei/p/11363126.html

#### 属性操作

1. 获取属性(行间)

   元素名.getAttribute(属性名)   --获取属性值

2. 设置属性(行间)

   elem.setAttribute('key','value')  ---设置属性值

3. 删除属性(行间)

   elem.removeAttribute('key')   --删除属性

````javascript
<div id="box" aa="11"></div>
var box = document.getElementById("box");
box.index = 1;
console.log(box.index); //1   不是行间的getAttribute是获取不到的
console.log(box.getAttribute("id")); //box 获取行间  属性名为id  的属性值
box.setAttribute("class", "div"); //给box设置 属性名为class ,属性值为div
box.removeAttribute("aa"); //删除行间的aa属性
````

#### 节点操作

1. 创建节点

   1. createElement  创建元素节点

       语法：document.createElement(元素标签) 

   2. createAttribute 创建属性节点

       语法：document.createAttribute(元素属性) 

   3. createTextNode 创建文本节点

       语法：document.createTextNode(文本内容） 

2. 插入节点

   1. appendChild

       语法：父节点.appendChild(要插入的新节点名) 

       功能：给一个元素末尾添加子节点 

   2. insertBefore

      语法：父节点.insertBefore(新添加的元素,已有的父元素)

      功能：向父级中的某个元素前插入元素

````javascript
<button id="btn">点击添加</button>
<ul id="list"></ul>

const list = document.getElementById("list");
const btn = document.getElementById("btn");
let num = 0;
btn.onclick = function () {
num++;
const li = document.createElement("li"); //创建元素
const attr = document.createAttribute("class"); //创建属性节点
const txt = document.createTextNode("你好"); //创建文本节点
attr.value = "li1";
li.setAttributeNode(attr); //添加新的属性节点

li.appendChild(txt);
// list.appendChild(li); //	插入元素：（向父级末尾添加一个元素）
// 特性：如果第二个参数为假的，那么会将某个元素添加到父元素的末位。
// 向父级中的某个元素前插入元素
list.insertBefore(li, list.children[0]);
};
````

3. 替换节点

   replaceChild（必须要有节点）

    语法：父节点..replaceChild(要插入的新元素,将被替换的元素) 

    功能：将摸个子节点替换成另一个

4. 删除节点

   removeChild

   语法：父节点.removeChild(要删除的节点)

   功能：删除指定的节点

   注意：如果指定的子节点没有，那么会报错。（进行判断解决）

5. 复制节点（克隆）

   cloneNode  不会克隆事件

   语法：需要被复制的节点.removeChild(true/false)

   功能：克隆某个元素

   false:默认值。仅复制当前节点

   true:复制当前节点及其所有子节点

````javascript
var btn = document.getElementById("btn");
var div = document.getElementById("div");
var span = document.querySelector("span");
var b = document.createElement("b");
btn.onclick = function () {
    //替换节点
    // div.replaceChild(b, span); //将span替换成b
    /*
        删除节点:
        	父级.removeChild(指定的子节点)

        注意：
        	如果指定的子节点没有，那么会报错。（进行判断解决）
          */
    // div.removeChild(b);
    // 复制节点
    /*
          元素.cloneNode(); //克隆某个元素

          注意：
            在克隆的时候，默认（false）只克隆指定元素本身，不会克隆该元素下的所有子节点。
           （cloneNode(有参数，默认为false)），如果里面传入true，那么就可以克隆该元素下的所有子节点。
            事件是不会被克隆的。
              */
};
var cloneSpan = span.cloneNode(); //不会克隆子节点
var cloneSpan2 = span.cloneNode(true); //会克隆子节点
div.appendChild(cloneSpan2);
````







