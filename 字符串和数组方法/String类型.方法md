## String对象方法

#### 字符方法

1.charAt()  

​	` stringObject.charAt(index)`

返回值类型：String

返回值:指定位置的那个字符

````javascript
var str = "abc";
str.charAt(1);
console.log(str); //'abc'
console.log(str.charAt(0)); //'b'
console.log(str.charAt(4)); //''
console.log(str.charAt(-3));// ''
````

注释： 字符串下标范围是 0-string.length。如果不在范围内，该方法将返回一个**空字符串**。 

2.charCodeAt()  

` stringObject.charCodeAt(index)`

返回值类型：Number

返回值： 指定位置的字符的 Unicode 编码 

````javascript
var str = "abz09AZ";
str.charCodeAt(0);
console.log(str);
console.log(str.charCodeAt(0)); //97
// 0~9  48~57			a~z	97~122			A~Z   65~90
console.log(str.charCodeAt(2)); //122
console.log(str.charCodeAt(3)); //48
console.log(str.charCodeAt(4)); //57
console.log(str.charCodeAt(-4)); //NaN
console.log(str.charCodeAt(20)); //NaN
````

注释： 字符串下标范围是 0-string.length。如果不在范围内，该方法将返回**NaN**。 

3.fromCharCode()  

` String.fromCharCode(Unicode1 , Unicode2, ..., UnicodeN)`

返回值类型：String

返回值：代表 Unicode 编码对应的字符。

````javascript
console.log(String.fromCharCode(48)); //0
console.log(String.fromCharCode(72, 69, 76, 76, 79)); //HELLO
````

#### 字符串位置方法

1.indexOf() 从左往右找

`  string.indexOf(searchvalue,start) `

 *searchvalue* : 需检索的字符串值。

start: 可选的整数参数 , 字符串中开始检索的位置 ( 合法取值是 0 到 string Object.length - 1 , 如省略该参数，则将从字符串的首字符开始检索。 )负数会被当做0来计算

返回值类型：Number

返回值：  查找指定字符串**首次**出现的位置，如果**没找到**匹配的字符串则返回**-1**。

````javascript
var str = "abc123456";
console.log(str.indexOf("a")); //0
console.log(str.indexOf("a", 5)); //-1
console.log(str.indexOf("1", -1)); //3
console.log(str.indexOf("z")); //-1
````

注释：  indexOf() 方法区分大小写。 

2. lastIndexOf ()  从右往左找

`  string.lastIndexOf(searchvalue,start) `

 *searchvalue* : 需检索的字符串值。

start: 可选的整数参数 , 字符串中开始检索的位置 ( 合法取值是 0 到 string Object.length - 1 , 如省略该参数，则将从字符串的首字符开始检索。 )负数会被当做0来计算

返回值类型：Number

返回值：  查找指定字符串**最后出现** 的位置，如果没找到**匹配的字符串则返回**-1**。

````javascript
var str = "61623456";
console.log(str.lastIndexOf("6")); //7
console.log(str.lastIndexOf("6", 5)); //2
console.log(str.lastIndexOf("6", -1)); //0
console.log(str.lastIndexOf(123)); //-1
````

注释：  lastindexOf() 方法区分大小写。 

### 字符串操作方法（截取，比较）

1.substring()

作用： 提取字符串中介于两个指定下标之间的字符。 

` string*.substring(from, to) `

from: 要提取的子串的第一个字符在 string Object 中的位置。 (开始位置)

to: 要提取的子串的最后一个字符在 string Object 中的位置多 1 

返回值类型：String

返回值：提取出来的字符（ 返回的子串**包括 开始 **处的字符，但**不包括结束**处的字符。 ）

````javascript
var str = "abcdef";
console.log(str.substring(1, 2)); //b (包括开始，不包括结束)
console.log(str.substring(2, 1)); //b (检测两个数大小，大的往后扔，小的往前扔)
console.log(str.substring(1)); //bcdf(第二个参数不填写，会一直到字符串的结尾)
console.log(str.substring(-1)); //abcdef (第一个参数为负数当成0来处理)
console.log(str.substring(3, -1)); //abc  （会自动检测大小，既 substring（-1,3））
````

注释：第二个参数不填写，会一直到字符串的结尾

2.slice()

作用： 提取字符串的某个部分，并以新的字符串返回被提取的部分。 

`  string.slice(start,end) `

start:  要抽取的片断的**起始下标**，第一个字符位置为 0。如果为负数，则从尾部开始截取。 

end:  紧接着要截取的片段**结尾的下标**。若未指定此参数，则要提取包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的**尾部**开始算起的位置。slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。 

返回值类型：String

返回值： 提取的字符串 （ start（包含） 和 end（不包含） ）

````javascript
var str = "abcdef";
console.log(str.slice(1, 2)); //b(包括开始，不包括结束)
console.log(str.slice(2, 1)); //'' 不检测大小
console.log(str.slice(1)); //bcdf(第二个参数不填写，会一直到字符串的结尾)
console.log(str.slice(-2)); //ef 提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
console.log(str.slice(-3, -1)); //de 从倒数第三个 到倒数第一个（不包括倒数第一个）
````

##### substring与slice不同点

(1)substring 两个参数检测大小   

​	slice不检测

(2).substring 负数 当成0来处理

 slice 负数是从字符串的**尾部**开始算起的位置



3.substr()

作用： 在字符串中抽取从开始下标开始的指定个数（长度）的字符。 

`  string.substr(start,length) `

start: 要抽取的子串的起始下标 ， 如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。 

length: 子串中的字符数 

返回值类型：String

返回值：提取出来的字符

````javascript
var str = "abcdef";
console.log(str.substr(1, 3)); //bc(从下标1开始,往后提取出3个字符)
console.log(str.substr(2, 0)); //'' 不能调换位置
//参数一如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。
console.log(str.substr(-1)); //f
console.log(str.substr(-2)); //ef
console.log(str.substr(-3)); //def
console.log(str.substr(-1, 1)); //f  从尾部开始计算，抽取一个
console.log(str.substr(-1, 2)); //f  从尾部开始计算，抽取一个（第一个参数为负数，只抽取一个）
console.log(str.substr(1, -1)); //''第二个参数为负数，返回空字符串
````

### 字符串大小写转换

1.toLowerCase()	把字符串转换为小写,返回一个新字符串

2.toUpperCase()	把字符串转换为大写，返回一个新字符串

````javascript
 var str = "ABC";
var str1 = "abc";
console.log(str.toLowerCase()); //abc
console.log(str1.toUpperCase()); //ABC
````

### 字符串去头尾空格

trim     删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。 

````
var str = "  11  ";
var str1 = "  1a 1  ";
console.log(str.trim());
console.log(str1.trim()); //a 1  只能去头尾空格
````

注释： trim() 方法不适用于 null, undefined, Number 类型。 

### 字符串拼接/拆分

1.concat()

作用： 连接两个或更多字符串，并返回新的字符串。 

` string.concat(string1, string2, ..., stringX) `

string1,string2: 将被连接为一个字符串的一个或多个字符串对象。 

返回值类型：String

返回值： 两个或多个字符串连接后生成的新字符串。 

````javascript
var str = "abc";
var str1 = "ABC";
var str2 = "123";
console.log(str.concat(str1, str2)); //abcABC123
console.log(str1.concat(str2)); //ABC123
````

2.split()

作用：把 一个字符串分割成数组。 

`  string.split(separator,limit) `

*separator*:字符串或正则表达式，从该参数指定的地方分割 string Object。

*limit*:指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。

返回值类型： Array 

返回值： 一个字符串数组。该数组是通过在 separator 指定的边界处将字符串 string Object 分割成子串创建的。返回的数组中的字串**不包括 separator **自身。 

````javascript
var str = "www.baidu.com";
var str1 = "abc";
var str3 = "/www.baidu.com/";
console.log(str1.split()); //["abc"]
//如果把空字符串 ("") 用作 分隔符，那么 分隔符 中的每个字符之间都会被分割。
console.log(str1.split("")); //['a','b','c']
console.log(str.split(".")); //["www", "baidu", "com"]
console.log(str.split(".", 1)); //["www"] 参数二设置返回的数组的最大长度
console.log(str.split("b")); //["www.", "aidu.com"]
console.log(str3.split("/")); //['','www.baidu.com','']
````



### 字符串查找（与正则有关）

1.match()

作用： 可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。 

`  string.match(regexp) `

regexp:必需。规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。

返回值类型： Array 

返回值： 存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。 如果没找到匹配结果返回 *null* 

````javascript
var str = "www.baidu.com+a";
console.log(str.match(/a/g)); //['a','a']

// 判断是否微信浏览器:
function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
if (is_weixn()) {
    console.log("是微信浏览器");
} else {
    console.log("不是微信浏览器");
}
````

2.search

作用： 检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。 

` string.search(searchvalue) `

searchvalue: 必须。查找的字符串或者正则表达式。 

返回值类型： Number 

返回值： 指定查找的字符串或者正则表达式相匹配的 String 对象**起始**位置 

````javascript
var str = "www.baidu.com+b";
console.log(str.search("b")); //4  首次出现的下标
console.log(str.search()); //0
console.log(str.search("")); //0
console.log(str.search("aaa")); //没有找到任何匹配的子串，则返回 -1。

// 示例：区分大小写
var str = "Mr. Blue has a blue house";
console.log(str.search("blue")); //15  区分大小写
console.log(str.search(/blue/i)); //4 不区分大小写（ 正则里的i表示 不区分(ignore)大小写；）
  
````

### ES6新增（includes,repeat,）

1. includes()  

作用：判断字符串是否包含指定的子字符串。 

` string.includes(searchvalue, start)`

searchvalue：必需，要查找的字符串。

start：可选，设置从那个位置开始查找，默认为 0。

返回值类型：Boolean

返回值： 如果找到匹配的字符串返回 true，否则返回 false。 

````javascript
var str = "www.baidu.com";
console.log(str.includes("baidu")); //true
console.log(str.includes("aa")); //false
console.log(str.includes("baidu", 1)); //true
//参数二表示开始查找的位置
console.log(str.includes("baidu", 5)); //false
````

注意：  includes() 方法区分大小写。 

2.repeat  

作用： repeat() 方法字符串复制指定次数。 

`string.repeat(count)`

count: 必需，设置要复制的次数。 

返回值类型： String 

返回值： 返回复制指定次数并连接在一起的字符串。 

````javascript
var str = "123";
console.log(str.repeat(2)); // 123123 复制两次
````

3.startsWith

作用： 检测字符串是否以指定的子字符串开始。 

`string.startsWith(searchvalue, start)`

searchvalue:必需，要查找的字符串

start:可选，查找的开始位置，默认为 0;

返回值类型： Boolean 

返回值：如果字符串是以指定的子字符串开头返回 true，否则 false。 

````javascript
var str = "www.baidu.com";
console.log(str.startsWith("www")); //true
console.log(str.startsWith("bai", 4)); //true
console.log(str.startsWith("www", 2)); //false
````

