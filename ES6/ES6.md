## ES6

ES6（全称ECMAScript 6）是于2015年6月正式发布的JavaScript语言的标准，也叫ECMAScript 2015（ES2015）。注意：**ES6不兼容IE浏览器。**

**let与var的区别**

1. 作用域不一样

   var来声明变量，只有函数作用域和全局作用域，没有块级作用域，也就是说可以在代码块{}外部使用。

   而let可以实现块级作用域，只能在代码块 {} 内有效，在 {} 之外不能访问。

2. let没有变量提升

​     在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区” temporal dead zone，简称 TDZ。  

3. let不能重复声明

4. 循环作用域

   var声明的变量是全局的

   let声明的变量作用域只在循环体内，循环体外的变量不受影响。

**const 常量**

const 声明一个只读变量，声明之后不允许改变。意味着，一旦声明必须初始化，否则会报错。

对于引用类型保证的**不是变量的值不变**，而是保证变量指向的**内存地址所保存的数据不允许改变。**

**模板字符串**

模板字面量是增强版的字符串，它用反引号`(按键1左边的按键)标识。

在ES6出现之前，字符串里面是不支持换行的，这样咱们在做程序的时候可读性很差。

ES5字符串换行的方式：

1.使用反斜杠\

2.使用拼接字符串

*占位符*

变量占位符可以看做是JavaScript字符串的升级版，可以将JS表达式嵌入到模板字面量中。

````javascript
const price = 10;
const amount = 3;
const str = `单价：${price};数量：${amount};总计：${(
price * amount
).toFixed(2)}`;
console.log(str);
````

**函数默认参数**

在ES5中声明函数参数是不能有默认值的，但是在ES6中是可以写默认值的。

````javascript
//es5
// function getName(name) {
//   const newName = name || "张三";
//   console.log(newName);
// }
// getName();//张三
// getName("aa");//aa

// function getName(name) {
//   const newName = name != undefined ? name : "李四";
//   console.log(newName);
// }
// getName();//李四
// getName("aa");//aa

//es6
function getName(name = "aa") {
console.log(name);
}
getName(); //aa
getName("haha"); //haha
````

**解构赋值**

1. 数组解构赋值

```javascript
//es5
let arr = [1, 2, 3];
let a = arr[0],
    b = arr[1],
    c = arr[2];
console.log(a, b, c); //1  2   3
//es6
let [a, b, c] = [1, 2, 3];
console.log(a,b,c); //1  2  3
```

嵌套取值

````javascript
let arr = ["java", "php", ["javascript", "css", "html"]];
// let [a, , [...j]] = arr;
// console.log(a, j); //  java    ["javascript", "css", "html"]
let [a, , ...html] = arr;
console.log(html); //["javascript", "css", "html"]
console.log(html[0]); //["javascript", "css", "html"]
console.log(html[0][0]); //javascript
//let [a, , [...html]] = arr;
//console.log(html); // ["javascript", "css", "html"];
//console.log(html[0]); //javascript

// --------------有无````的区别-------------
let [aa, , html2] = arr;
console.log(html2); //["javascript", "css", "html"]
console.log(html2[0]); // javascript;
````

浅拷贝

````javascript
let book = ["java", "php", ["javascript", "css", "html"]];
let [...newBooks] = book;
console.log(newBooks); // ["java", "php", ["javascript", "css", "html"]];
console.log(...newBooks); //java, php, ["javascript", "css", "html"];
````




 如果解构不成功，变量的值就等于`undefined`。 

````javascript
let [xx, yy, ...zz] = ["a"];
console.log(xx); //a
console.log(yy); //undefined
console.log(zz); //[]
````

 不完全解构 

​	 即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。 

  对于 Set 结构，也可以使用数组的解构赋值。

````javascript
let [x, y, z] = new Set(["a", "b", "c"]);
console.log(x);//a
````

**解构赋值允许指定默认值**

 ES6 内部使用严格相等运算符（`===`），判断一个位置是否有值。所以，只有当一个数组成员严格等于`undefined`，默认值才会生效。 

````javascript
let [x = 1] = [undefined];
x // 1

let [x = 1] = [null];
x // null
````

 默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。 

````javascript
//   因为x能取到值，所以函数f根本不会执行
function f() {
console.log("aaa");
}
let [x = f()] = [1];
console.log(x); //1
````

 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。 

````javascript
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined
````

2. 对象解构赋值

````javascript
let person = {
    name: "张三",
    age: 15,
};
//es5
// var name = person.name;
// var age = person.age;
//es6
// let { name, age } = person;
//es6方式二
let name, age;
 ({ name, age } = person); //左边不能是{}-代码块   用（）括起来就变成一个表达式

 console.log(name, age); //张三 15

````

设置默认值

````javascript
// 设置默认值
let person = {
    name: "张三",
    age: 15,
};
let { name, age, city = "北京" } = person;
console.log(name, age, city); //张三 15  北京
````

别名

````javascript
let person = {
    name: "张三",
    age: 15,
};
let { name: pName, age, city = "北京" } = person;
let name = "李四";
console.log(pName, age, city, name); //张三 15  北京 李四
````

嵌套取值

````javascript
let person = {
    name: "张三",
    age: 50,
    change: {
        name: "李四",
        age: 28,
        change: {
            name: "小李四",
            age: 2,
        },
    },
};
let {
    change: { name },
} = person;
console.log(name); //李四
let {
    change: {
        change: { name: nName },
    },
} = person;
console.log(nName);//小李四
````

与扩展运算符结合使用

`````javascript
//浅拷贝
let person = {
    name: "张三",
    age: 15,
};
let { ...personObj } = person;
console.log(personObj); // {name: "张三", age: 15}
`````



对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

```javascript

let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' };
baz // undefined
```

 如果解构失败，变量的值等于`undefined`。 

```javascript
let {foo} = {bar: 'baz'};
foo // undefined
```





**扩展运算符（...）**

可以实现拷贝对象、合并对象、拷贝数组、合并数组。

​	对象拷贝

````javascript
//es6 对象的浅拷贝
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };
obj2.a = 3;
console.log(obj1); //{a: 1, b: 2}
console.log(obj2); //{a: 3, b: 2}

//对象合并
let payload = { title: "羊肉串", amount: 10, price: 2 };
let user = { uid: 1, shop_id: 20 };
let data = { ...payload, ...user };
console.log(data); //{title: "羊肉串", amount: 10, price: 2, uid: 1, shop_id: 20}
````

数组拷贝

````javascript
//数组的浅拷贝
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr1.push(4);
console.log(arr1); //[1,2,3,4]
console.log(arr2); //[1,2,3]

//数组合并
let arr1 = [1, 2];
let arr2 = [3, 4];
let arrData = [...arr1, ...arr2];
console.log(arrData); //[1,2,3,4]
````

   **Object.assign对象的拷贝与合并  **

Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。

Object.assign()第一个参数是目标对象，后面的参数是源对象。

常见用途：

1.为对象添加属性

2.为对象添加方法

````javascript
// Object.assign对象的拷贝与合并
let target = { a: 1 };
let source1 = { b: 2 };
let source2 = { c: 3 };
Object.assign(target, source1, source2);
console.log(target); //{a: 1, b: 2, c: 3}
````

如果目标对象与源对象有同名属性，或多个源对象有同名属性，后面的属性会覆盖前面的属性

`````javascript
let target = { a: 1 };
let source1 = { a: 11, b: 2 };
let source2 = { b: 22, c: 3 };
Object.assign(target, source1, source2);
console.log(target); //{a: 11, b: 22, c: 3}
`````

  如果只有一个目标对象，直接返回该参数

````javascript
let target = { a: 1 };
Object.assign(target);
console.log(target);{ a: 1 };
````

如果目标对象不是一个对象，先转成对象

````javascript
let abc = Object.assign("abc");
console.log(abc);
console.log(abc[0], abc[1], abc[2]); //a  b   c
````

目标元素不能是undefined和null;

````javascript
Object.assign(undefined); //报错
Object.assign(null);//报错
````

为对象添加属性

````javascript

function Person(name, age) {
    // Object.assign(this, { name: name, age: age });
    Object.assign(this, { name, age });
    // 相当于
    this.name = name;
    this.age.age;
}
let person = new Person("张三", 20);
console.log(person.name, person.age); //张三 20
````

为对象添加方法

`````javascript
Object.assign(Person.prototype, {
    //   say:function(){} es5
    say() {
        console.log("say()方法");
    },
    run() {
        console.log("run()方法");
    },
});
//相当于 es5
//   Person.prototype.say=function(){
//     console.log("say()方法");
//   }
//   Person.prototype.run = function () {
//     console.log("run()方法");
//   };

person.say();
person.run();
`````

**对象字面量**

1. 属性初始值的书写

`````javascript
let title = "es6";
let price = 12;
//es5
let book = { title: title, price: price };
//es6
let book = { title, price };
console.log(book); //{title: "es6", price: 12}
`````

2. 对象方法的简写

````javascript
let person = {
    // say: function () {
    //   console.log("say()方法");
    // },
    //简写
    say() {
        console.log("say()方法");
    },
};
person.say();
````

计算属性名

````javascript
// es5
/*
      let person = {};
      let age = "age";
      person["first-name"] = "李";
      person["last-name"] = "四";
      person[age] = 20;
      console.log(person); //{first-name: "李", last-name: "四", age: 20}
      */
//es6
let ageAttr = "age";
let person = {
    ["first-name"]: "李",
    ["last-name"]: "四",
    [ageAttr]: 10,
};
console.log(person); //{first-name: "李", last-name: "四", age:10}
````

**模块化**

注意：

1.  需要在服务器环境下打开才不会报错

   vscode可以安装 Live Server   安装成功--需要查看的文件右键- open with Live Server

2.  script  标签必须写   type="module"

在ES6之前的javascript中是没有模块化概念的。如果要进行模块化操作，需要引入第三方的类库，如：requireJS与seaJS，requireJS是AMD规范，seaJS是CMD规范。

ES6现已支持模块化开发规范ES Module，让Javascript支持原生模块化开发。ES Module把一个文件当作一个模块，每个模块有自己的独立作用域，核心点就是模块的导入（import）与导出（export）。

模块化的好处：

1. 避免变量污染，命名冲突

2. 提高代码复用率

3. 提高维护性

4. 可以提升执行效率

5. 避免引入时的层层依赖

单个导入模块

````html
<script type="module">  // type="module"必须写
    // import { name, age, URL, getName } from "./global.js";
    //起别名（用as连接）
    // import { name as oldName, age, URL, getName } from "./global.js";//导入时起别名
    import { oldName, age, URL, getName } from "./global.js";//导出时已经去好了别名
    let name = "王五";//命名冲突时需要起别名
    console.log(name, oldName);
    console.log(age);
    console.log(URL);
    console.log(getName());
</script>
````

````javascript
//   导出
//单个导出方式一
// export let name='张三';
// export let age=20;
// export const URL='https://www.baidu.com'
// //导出方法
// export function getName(){
//     return '李四';
// }
//单个导出方式二
 let name='张三';
 let age=20;
 const URL='https://www.baidu.com'
//导出方法
 function getName(){
    return '李四';
}
export{
    name as oldName,
    // name,
    age,
    URL,
    getName
}
````

导入整个模块

````html
<script type="module">
//导入整个模块
// import * as person from "./global2.js";
// console.log(person.name);
// console.log(person.age);
// console.log(person.URL);
// console.log(person.getName());
// 方式二
import person from "./default.js";
console.log(person.name, person.age);
</script>
````

````javascript
//   导出
let name='张三';
let age=20;
const URL='https://www.baidu.com'
//导出方法
function getName(){
return '李四';
}
export{
name as oldName,
// name,
age,
URL,
getName
}

//default

let name="张三";
let age=12;
function getName(){
    return '李四';
}
export default {
    name,
    age,
    getName
}

````

**箭头函数**

箭头函数没有自己的this，arguments，super或new.target  

 箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数。  

````javascript
//正常函数写法
//   function person() {
//     console.log("大家好!");
//   }
//箭头函数写法
let person = () => {
    console.log("大家好");
};
person();
````

return

````javascript
let person = () => "大家好";
// 相当于
//   function person() {
//     return "大家好";
//   }
console.log(person());//大家好
````

传参

````javascript
let person = (name, age) => {
    console.log(name, age);
};
person("小明", 12);

//只有一个参数是可以简写可以不用()
let person = (name) => {
    console.log(name);
};
person("小明");
````

arguments

````javascript
function person() {
    let arg = arguments;
    console.log(arg);
}
person(1, 2, 3);

//es6写法
let person = (...args) => {
    console.log(args);
};

person(1, 2, 3);
````

返回对象字面量

````javascript
//es5
function person() {
return { name: "李四", age: 20 };
}
//es6
// let person = () => ({ name: "李四", age: 20 });
console.log(person()); //{ name: "李四", age: 20 }
````

高阶函数

````javascript
//es5
// function person() {
//   return function (wrap) {
//     return function (prop) {
//       console.log(wrap, prop); //wrap prop
//     };
//   };
// }
//es6
let person = () => (wrap) => (prop) => {
    console.log(wrap, prop);
};
person()("wrap")("prop");
````

this指向

```javascript
//es5

let person = {
    name: "张三",
    getName: function () {
        let _this = this;
        setTimeout(function () {
            console.log(_this); //指向person本身
            console.log(_this.name);
        }, 100);
    },
};
let getName = person.getName.bind(person);
getName();

//es6    
let person = {
    name: "张三",
    getName: function () {
        //没有this往上级找
        setTimeout(() => {
            console.log(this); //指向person本身
            console.log(this.name);
        }, 100);
    },
};
let getName = person.getName.bind(person);
getName();
```

**promise**

Promise就是一个对象，用来传递异步操作的消息。可以解决回调函数的嵌套问题，也就是所谓的“回调地狱”。

“回调地狱”的案例：

````javascript
ajax("http://www.lucklnk.com","get",function(){
    ajax("http://www.lucklnk.com","get",function(){
        ajax("http://www.lucklnk.com","get",function(){
        })
    })
});
````

一个Promise有以下几种状态:

1、pending: 初始状态，既不是成功，也不是失败状态。

2、fulfilled: 意味着操作成功完成。

3、rejected: 意味着操作失败。

如果异步操作成功，resolve 方法将 Promise 的状态，从“未完成”变为“成功”（即从 pending 变为 fulfilled）。

如果异步操作失败，reject 方法将 Promise 对象的状态，从“未完成”变为“失败”（即从 pending 变为 rejected）。

如果执行resolve 方法，对应的会调用then方法，then方法传入一个函数作为参数，该函数的参数的值就是resolve 方法的实参。

如果执行reject方法，对应的会调用catch方法，catch方法传入一个函数作为参数，该函数的参数的值就是reject方法的实参。

````javascript
//利用定时器模拟ajax
let code = 200;
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (code == 200) {
            //执行成功调用resolve函数
            console.log("成功！");
        } else {
            console.log("失败");
        }
    }, 100);
});
p1.then((result) => {
    //成功对应的是resolve
    console.log(result);
}).catch((result) => {
    //失败对应的是reject
    console.log(result);
});

````



