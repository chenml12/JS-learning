## BOM

Browser Object Model 浏览器对象模型

window对象相关属性： innerWidth/innerHeight、close、open … 

1.  innerWidth/innerHeight   返回窗口的文档显示区的宽度/高度

   不包括浏览器控制台、菜单栏、工具栏

   

2. open(页面的地址url，打开的方式) 方法 打开一个新的窗口(页面)

​      如果 url 为空，则默认打开一个空白页面

​      如果打开方式为空，默认为新窗口方式打开

 open(URL,name,style,布尔值)

​          打开窗口

​       返回值：新页面的window  

​       参数：

​          URL：地址，string,'http://www.baidu.com',不写http是本地

​          name:打开方式，框架名name

​            如果写的框架名找不到，会新窗口打开

​            '_blank'：新窗口

​            '_self'：自身窗口

​            '_top':最顶层框架

​            '_parent':父框架

​          下面的很少使用 

​          style:只有在新窗口打开才能设置，'width=100px,height=100px'  

​          布尔值：是否保存历史记录

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

**浏览器相关信息**

1. navigator	浏览器信息对象

   ​     navigator.userAgent

   ​     浏览器信息

2. screen

   浏览器对象，尺寸（浏览器大小尺寸）

   ```javascript
   屏幕分辨率的高： window.screen.height;
   屏幕分辨率的宽： window.screen.width;
   屏幕可用工作区高度： window.screen.availHeight;
   屏幕可用工作区宽度：window.screen.availWidth; 
   
   
   console.log(navigator.userAgent);
   console.log(window.screen.availWidth);
   ```

3. history  历史记录

   自身窗口，只要地址栏改变了，就会产生一条历史记录，可供前进后退

​          历史记录对象

​          length:几条记录

​          go(0):跳到第几条记录，扩号里的数字代表第几个记录，number

​          back()后退

​          forward()前进

4. location 地址栏信息对象    

     可以获取也可以设置

​          href：地址

​          search:查询信息

​          hash:锚信息

​          除了设置hash，设置其他的都会刷新页面，注意不要设置在全局，不然会无限刷新页面

​          设置href同a标签的跳转

````javascript
/*
    search
    查询信息
        ?这段信息#
    问号后井号前的信息

    会刷新页面，不要放在全局
        ?属性=值&属性=值
*/
/*
	hash
    锚信息
   	 #后边的
   	 不刷新页面
    #属性=值/属性=值

    window.onhashchange
    hash改变时触发的事件	
*/

````



