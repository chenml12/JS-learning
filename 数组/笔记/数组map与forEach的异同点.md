## forEach与map的异同点

```javascript
array.(forEach/map)(function(currentValue, index, arr), thisValue)
```

#### 相同点

1. 都是循环遍历数组中的每一项

2. forEach和map方法里每次执行匿名函数都支持3个参数，参数分别是item（当前每一项），index（索引值），arr（原数组）

3. 匿名函数中的this都是指向window

4. 只能遍历数组

   

   ````javascript
   //相同点
   const arr = ["a", "b", "c"];
   //2.都支持这个3个参数
   arr.forEach(function (item, index, array) {
       //1.循环遍历数组中的每一项
       console.log(item); //打印3次分别为'a'  'b'    'c'
       console.log(this); //window  3.匿名函数中的this都是指向window
   });
   arr.map(function (item, index, array) {
       //循环遍历数组中的每一项
       console.log(item); //打印3次分别为'a'  'b'    'c'
       console.log(this); //window
   });
   //  4.只能遍历数组，其他数据类型报错
   ````

   

#### 不同点

**forEach方法**

1.  无论arr是不是空数组，forEach返回的都是undefined
2.  forEach对于空数组是不会调用回调函数的。 

```javascript
var array = [10,34,57,43,76];  
var res = array.forEach(function (item,index,input) {  
       input[index] = item*10;  
})  
console.log(res);//--> undefined; 
```



**map方法**

1.   map方法**返回一个新的数组**，数组中的元素为原始数组调用函数处理后的值 
2.  map方法不会对空数组进行检测，map方法不会改变原始数组 

```javascript

var arr = [0,2,4,6,8];
var str = arr.map(function(item,index,arr){   
    return item / 2;
},this);
console.log(str); //[0,1,2,3,4]

```



*forEach会不会改变原数组*

https://juejin.cn/post/6844903912093253645

  

