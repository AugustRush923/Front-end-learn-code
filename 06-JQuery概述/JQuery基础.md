

### jQuery

## jQuery的概念

jQuery是一个快速、简洁的JavaScript库，其设计的宗旨是`Write Less, Do More`。它封装了我们开发过程中常用的一些功能，方便我们调用，提高开发效率。


**jQuery的优点**

* 轻量级。核心文件才几十kb，不会影响页面加载速度

* 跨浏览器兼容。基本兼容了现在主流的浏览器

* **链式编程、隐式迭代**

* 对事件、样式、动画支持，大大简化了DOM操作

* 支持插件扩展开发。有着丰富的第三方的插件，例如：树形菜单、日期控件、轮播图等

* 免费、开源



## jQuery的基本使用

### 使用jQuery的基本步骤

1. 引包
2. 入口函数
3. 功能实现代码（事件处理）



### jQuery的版本

* 1.x版本：支持IE6、7、8；
* 2.x版本：不再支持IE6、7、8；
* 3.x版本：目前主要维护的版本；



### jQuery入口函数

`原生 js` 的入口函数指的是：`window.onload = function() {};` 如下：

```js
// 原生 js 的入口函数。页面上所有内容加载完毕，才执行。
// 不仅要等文本加载完毕，而且要等图片也要加载完毕，才执行函数。
window.onload = function () {
	alert(1);
}
// 仅当DOM加载完毕就执行，不需要等图片等外部资源加载完毕。
window.addEventListener('DOMContentLoaded', function() {
  alert(2);
})
```



`jQuery`的入口函数，有以下几种写法：

**写法一：**

```js
// 文档加载完毕，图片不加载的时候，就可以执行这个函数
$(document).ready(function() {
	alert(1);
})

// 简洁版
$(function() {
  alert(1);
})
```



**写法二：**

```js
// 文档加载完毕，图片也加载完毕的时候，在执行这个函数
$(window).ready(function() {
  alert(1);
})
```



### jQuery的顶级对象$

`$`是`jQuery`的别称，换句话说，`$ === jQuery`。在代码中可以使用jQuery代替$。

```js
<script src="jquery-1.11.1.js"></script>
<script>
    console.log($);
    console.log(jQuery);
    console.log($===jQuery);
</script>
```



`$`是jQuery的顶级对象，相当于原生JS中的window。把元素利用$包装成jQuery对象，就可以调用jQuery的方法。

```js
$(); // 调用上面我们自定义的函数$

$(document）.ready(function(){}); // 调用入口函数

$(function(){}); // 调用入口函数

$("#btnShow"); // 获取id属性为btnShow的元素

$("div"); // 获取所有的div标签元素
```



### jQuery对象和DOM对象

DOM对象：用原生js获取过来的对象就是DOM对象

```js
var div = document.querySelector('div');
console.dir(div);
```



jQuery对象：用jQuery方式获取过来的对象是jQuery对象。说白就是通过$把DOM元素进行了包装（伪数组形式存储）

```js
var div = $('div');
console.dir(div);
```



jQuery对象只能使用jQuery方法，DOM对象则只能使用原生js属性和方法。



**总结：**jQuery就是把DOM对象重新包装了一下，让其具有了jQuery方法。



#### 二者的相互转换

DOM对象与jQuery对象之间是可以相互转换的。



1.   **DOM对象-->jQuery对象**

```javascript
$(js对象);
```



```js
var div = document.querySelector('div');
var jQueryDiv = $(div);
console.log(jQueryDiv);
```

2.   **jQuery对象 --> DOM对象**

```js
jquery对象[index];      //方式1（推荐）

jquery对象.get(index);  //方式2
```



```js
var jQueryDiv = $("div");
var div = jQueryDiv[0];
console.dir(div);
```



## jQuery常用API

### 隐式迭代

遍历内部DOM元素（伪数组形式存储）的过程就叫做**隐式迭代**。



简单来说：

给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化操作，方便调用。



### jQuery选择器

原生JS获取元素方式很多，很杂，而且兼容性情况不一致，因此jQuery给我们做了封装，使获取元素统一标准。



语法：

```
$("选择器")
```



#### CSS选择器

| 名称         | 说明                                                       | 用法            |
| ------------ | ---------------------------------------------------------- | --------------- |
| ID选择器     | 获取指定ID的元素                                           | $("#id")        |
| 类选择器     | 获取同一类class的元素                                      | $(".class")     |
| 标签选择器   | 获取同一类标签的所有元素                                   | $("element")    |
| 通配符选择器 | 匹配所有元素                                               | $("*")          |
| 并集选择器   | 选取多个元素                                               | $("div,p,li")   |
| 交集选择器   | 交集元素                                                   | $("li.current") |
| 子代选择器   | 使用>号，获取亲儿子层级的元素                              | $("ul>li")      |
| 后代选择器   | 使用空格，代表后代选择器，获取ul下的所有li元素，包括孙子等 | $("ul li")      |

![](images/jQuerySelector1.jpg)

![](images/jQuerySelector2.jpg)





#### jQuery筛选选择器

| 语法       | 用法          | 描述                                                        |
| ---------- | ------------- | ----------------------------------------------------------- |
| :first     | $("li:first") | 获取第一个li元素                                            |
| :last      | $("li:last")  | 获取最后一个li元素                                          |
| :eq(index) | $("li:eq(2)") | 获取到的li元素中，选择索引号为2的元素，索引号index从0开始。 |
| :odd       | $("li:odd")   | 获取到的li元素中，选择索引号为奇数的元素                    |
| :even      | $("li:even")  | 获取到的li元素中，选择索引号为偶数的元素                    |



![](images/jQuerySelector3.jpg)

#### jQuery筛选方法

| 语法               | 用法                           | 说明                                                         |
| ------------------ | ------------------------------ | ------------------------------------------------------------ |
| parent()           | $("li").parent();              | 获取当前元素的父级元素（亲爸爸）                             |
| children(selector) | $("ul").children("li");        | 相当于`$("ul>li")`,最近一级（亲儿子）                        |
| find(selector)     | $("ul").find("li");            | 相当于`$("ul li")`,后代选择器                                |
| siblings(selector) | $(".first").siblings("li");    | 查找兄弟节点，不包括自己本身                                 |
| nextAll([expr])    | $(".first").nextAll();         | 查找当前元素之后所有的同辈元素                               |
| prevtAll([expr])   | $(".last").prevAll();          | 查找当前元素之前所有的同辈元素                               |
| hasClass(class)    | $("div").hasClass("protected") | 检查当前的元素是否含有某个特定的类，如果有返回true，没有返回false |
| eq(index)          | $("li").eq(2);                 | 相当于`$("li:eq(2)")`,index从0开始                           |



### jQuery样式操作

jQuery可以使用`css`方法来修改简单元素样式；也可以操作类，修改多个样式。



#### 操作css方法

1.   参数只写属性名，则是返回属性值

     ```js
     $(this).css('属性名')
     ```

2.   参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用跟单位和引号

     ```js
     $(this).css('属性名', '属性值')
     ```

3.   参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开，属性可以不用加引号

     ```js
     $(this).css({'属性名': '属性值', '属性名': '属性值'})
     ```



#### 设置类样式方法

1.   添加类

     ```js
     $(this).addClass('类名');
     ```

2.   删除类

     ```js
     $(this).removeClass('类名');
     ```

3.   切换类（如果有则去除，如果没有则添加）

     ```js
     $(this).toggleClass('类名');
     ```



#### 类操作与className区别

原生JS中`className`会覆盖元素原先里面的类名。



jQuery里面类操作只是对指定类进行操作，不影响原先的类名。



### jQuery效果



### jQuery属性操作



### jQuery文本属性值



### jQuery元素操作



### jQuery尺寸、位置操作
