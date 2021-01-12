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



1. 对象解构赋值

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

****

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