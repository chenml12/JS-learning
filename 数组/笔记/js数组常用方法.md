## js数组常用方法





1.array. forEach ()  数组每个元素都执行一次回调函数。 （**类似for循环**）

`array.forEach(function(currentValue, index, arr), thisValue)`

function():必须 。函数，数组中的每个元素都会执行这个函数 

​	currentValue: 必须。当前元素的值 

​	index: 可选。当前元素的索引值 

​	arr: 可选。当前元素属于的数组对象 

thisValue:  可选。传递给函数的值一般用 "this" 值。如果这个参数为空， "undefined" 会传递给 "this" 值 

作用： 用于调用数组的每个元素，并将元素传递给回调函数

返回值： undefined 

原数组不变？？？有疑问

````javascript
let arr = [1, 2, 3];
let newArr = arr.forEach(function (item) {
    return item + 1;
});
console.log(newArr); //undefined  forEach返回值为undefined
console.log(arr); //[1,2,3] 原数组不变
// 示例：求和
let arr1 = [1, 2, 3, 4];
let sum = 0;
let arr2 = arr1.forEach(function (item) {
    sum += item;
});
console.log(sum);//10
````



 **注意：**forEach() 对于空数组是不会执行回调函数的。 

2.array.map() 

`array.map(function(currentValue,index,arr), thisValue)`

function():必须 。函数，数组中的每个元素都会执行这个函数 

​	currentValue: 必须。当前元素的值 

​	index: 可选。当前元素的索引值 

​	arr: 可选。当前元素属于的数组对象 

thisValue:   可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。
如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。 

返回值： 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。 

原数组不变

 **注意：** map() 不会对空数组进行检测。 

3.array. filter()   将所有元素进行判断，将**满足条件的元素**作为一个新的数组返回

返回值：返回数组（包含符合条件的所有元素）

原数组不变

````javascript
var ages = [32, 33, 16, 40, 12];
var arr = ages.filter(function (item) {
    return item < 18;
});
console.log(ages); // [32, 33, 16, 40,12]原数组不变
console.log(arr); //[16,12] 返回数组，包含了符合条件的所有元素

var arr2 = ages.filter(function (item) {
    return item < 10;
});
console.log(arr2); //[] 如果没有符合条件的元素则返回空数组。
````

4.array.every ()  检测数组所有元素是否**都符合**指定条件

返回值： 布尔值。如果所有元素都通过检测返回 true，否则返回 false。 

原数组不变

````javascript
var arr = [8, 6, 5, 9, 7];
var arr1 = arr.every(function (item) {
    return item < 10;
});
var arr2 = arr.every(function (item) {
    return item > 5;
});
console.log(arr); // [8, 6, 5, 9, 7]  原数组不变
console.log(arr1); //true 所有抖满足
console.log(arr2); //false 只要有一个不满足抖返回false
````

 **注意：** every() 不会对空数组进行检测。 

5.array.some()  检测数组中的元素**是否满足**指定条件

- 如果有一个元素满足条件，则表达式返回*true* , 剩余的元素不会再执行检测。
- 如果没有满足条件的元素，则返回false。

返回值： 布尔值。如果数组中有元素满足条件返回 true，否则返回 false。 （**有就返回true**）

原数组不变

````javascript
var arr = [2, 4, 6, 8];
arr.some(function (item) {
    return item > 4;
});
console.log(arr); //[2,4,6,8]原数组不变
var arr1 = [1, 2, 3];
var arr2 = arr1.some(function (item) {
    return item > 2;
});
console.log(arr2); //true  只有有一个满足，就返回true
````

