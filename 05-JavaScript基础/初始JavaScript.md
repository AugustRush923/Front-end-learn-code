# 初始JavaScript

## JavaScript的组成

![](images/js的组成.png)

### ECMAScript

ECMAScript是由ECMA国际（原欧洲计算机制造商协会）进行标准化的一门编程语言，这种语言在万维网上应用广泛，它往往被称为JavaScript或JScript，但实际上后两者是ECMAScript语言的实现和扩展。

ECMAScript规定了JS的编程语法和基础核心知识，是所有浏览器厂商共同遵守的一套JS语法工业标准。

### DOM--文档对象模型

文档对象模型是W3C组织推荐的处理可扩展标记语言的标准编程接口，通过DOM提供的接口可以对页面上的各种元素进行操作。

### BOM -- 浏览器对象模型

BOM是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等。

## JavaScript 的引入方式

### 方式1：行内式
代码举例：
```html
<input type="button" value="点我点我" onclick="alert('千古壹号')" />
```
完整的可执行代码如下：
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <input type="button" value="点我点我" onclick="alert('千古壹号的方式1')" />
    </body>
</html>
```

分析：

* 可以将单行或少量 JS 代码写在HTML标签的事件属性中（以 on 开头的属性），比如放在上面的 onclick点击事件中。

* 这种书写方式，不推荐使用，原因是：可读性差，尤其是需要编写大量 JS代码时，容易出错；引号多层嵌套时，也容易出错。

* 关于代码中的「引号」，在HTML标签中，我们推荐使用双引号, JS 中我们推荐使用单引号。

### 方式2、内嵌式
我们可以在html 页面的 `<body>` 标签里放入`<script type=”text/javascript”></script>`标签对儿，并在`<script>里书写JavaScript 代码`：
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript">
		// 在这里写 js 代码
		alert('千古壹号的方式2');
		console.log('qianguyihao 方式2');
	</script>
</body>
</html>
```
分析：

* text表示纯文本，因为JavaScript也是一个纯文本的语言。

* 可以将多行JS代码写到 <script> 标签中。

* 内嵌式 JS 是学习时常用的方式。

### 方式3：引入外部的 JS 文件
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 引入外部的 js 文件 -->
	<script src="tool.js"></script>
</body>
</html>
```
上面这段代码，依然是放到body标签里，可以和内嵌的js代码并列。

另外，引用外部 JS文件的 script 标签中间不可以再写代码。

总结：

我们在实战开发中，基本都是采用方式3，因为这种方式，可以确保 html 文件和 js 文件是分开的，有利于代码的结构化和复用。很少会有人把一大堆 js 代码塞到 html 文件里。

## JavaScript 的注释

单行注释：

```javascript
// 我是注释
```

多行注释：

```javascript
/*
	多行注释1
	多行注释2
*/
```

## Javascript 输入输出语句

### 弹出警告框：alert语句

alert（英文翻译为“警报”）的用途：弹出“警告框”。

代码举例如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script>
            alert('千古壹号');
        </script>
    </body>
</html>
```

上面的代码中，如果写了两个alert()语句的话，网页的效果是：弹出第一个警告框，点击确定后，继续弹出第二个警告框。

### 控制台输出：console.log("")

console.log("")表示在控制台中输出。console表示“控制台”，log表示“输出”。

在Chrome浏览器中，按F12即可打开控制台，选择「console」栏，即可看到打印的内容。

控制台是工程师、程序员调试程序的地方。程序员经常使用这条语句输出一些东西，来测试程序是否正确。

### 弹出输入框：prompt()语句

prompt()就是专门用来弹出能够让用户输入的对话框。用得少，测试的时候偶尔会用。

```js
var a = prompt("请随便输入点什么东西吧");
console.log(a);
```

prompt()语句中，用户不管输入什么内容，都是`字符串`。

alert()和prompt()的区别：

* alert() 可以直接使用。

* prompt() 会返回用户输入的内容。我们可以用一个变量，来接收用户输入的内容。

## JavaScript 变量

### 变量的概念

**变量**：是用于存放数据的容器。我们通过「变量名」获取数据，甚至可以修改数据。

变量还可以用来保存字面量。

**本质**：变量是程序在内存中申请的一块用来存放数据的空间。

### 变量的声明和赋值

#### 变量的声明/变量的定义

在`ES6`语法之前，统一使用`var`关键字来声明一个变量。比如：

```js
var name; // 声明一个名为 name 的变量
```

PS：在JavaScript中，永远都是用var来定义变量（在ES6 之前），这和C、Java等语言不同。

在`ES6`语法及之后，可以使用`const`、`let`关键字来声明一个变量

```js
const name; // 定义一个常量

let age;
```

如果你想定义一个`常量`，就用`const`；如果你想定义一个`变量`，就用`let`。

#### 变量的赋值

```js
name = "coder"
```

变量的声明和赋值，写在一起，举例如下：

```js
var a = 100; // ES5语法

const b = hello; // ES6 语法
let b = world; // ES6 语法
```

#### 变量的初始化

声明一个变量并赋值， 我们称之为变量的初始化。

### 变量声明和赋值的补充

#### 更新变量

一个变量被重新复赋值后，它原有的值就会被覆盖，变量值将以最后一次赋的值为准。

```js
var a = 100;
a = 110;

console.log(a); // 打印结果：110。因为 110 覆盖了 100
```

#### 同时声明多个变量

同时声明多个变量时，只需要写一个 var， 多个变量名之间用英文逗号隔开。

```js
var name = '千古壹号', age = 27, number = 100;
```

#### 变量声明的几种特殊情况
变量建议先声明，再使用。否则可能会报错。具体如下。

写法1、先声明，再赋值：（正常）

```js
var a;
a = 100;
console.log(a); // 打印结果：100
```

写法2、不声明，只赋值：（正常）

```js
a = 100;
console.log(a); // 打印结果：100
```

写法3、只声明，不赋值：（注意，打印 undefined）

```js
var a;
console.log(a); // 打印结果：undefined
```

写法4、不声明，不赋值，直接使用：（会报错）

```js
console.log(a); // 会报错
```

### 变量的命名规范

* 只能由字母(A-Z、a-z)、数字(0-9)、下划线(_)、美元符( $ )组成

* 不能以数字开头。也就是说，必须以字母(A-Z、a-z)、下划线(_)或者美元符( $ )开头。变量名中不允许出现空格。

* 不用使用 JS 语言中保留的「关键字」和「保留字」作为变量名。

* 建议用驼峰命名规则。比如getElementById、matherAndFather、aaaOrBbbAndCcc

* 变量名会区分大小写(javascript 是区分大小写的语言)。

* 变量名长度不能超过255个字符。

* 汉语可以作为变量名。但是不建议使用，因为 low。

