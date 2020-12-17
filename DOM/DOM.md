## DOM（文档对象模型）

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

   8. offsetLeft/offsetTop(获取样式)

      语法：该元素.offsetLeft/offsetTop

      功能：获取外边框到有定位父级**position: relative**的内边框的左边距离/上边距离。（没有px）

   9. getBoundingClientRect

      语法：该元素.getBoundingClientRect().left

      功能：获取元素左边距离**页面**左边的距离 (相对于浏览器可视区域)

   ````javascript
   var div3 = document.getElementById("div3");
   console.log(div3.offsetLeft); //100   div3距离定位父级的距离
   console.log(div3.getBoundingClientRect().left); //150   div3距离页面左边的距离
   ````

   #### 元素属性操作

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

   

   

   



