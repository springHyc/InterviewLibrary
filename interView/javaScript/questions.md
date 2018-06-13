# JavaScript

> 该文档存放的只是 HTML 部分的问题，其中答案部分放在对应目录下的 questionsAndAnswers.md 文件中，答案部分也只是个人所做的答案，可能存在不正确的地方，欢迎大家共同讨论，找出一个完美的答案。希望大家能够多学一点知识，能够对面试有所有帮助。

## 0. this 指向性问题总结。下面代码中分别输出什么？

> 由于在很多地方都遇到了不同形式的`this`指向性问题，所以干脆在这里把我遇到的题目都总结一下，也是为了更加集中的复习。

```js
// code 1
var length = 10;
function fn() {
  alert(this.length);
}
var obj = {
  length: 5,
  method: function() {
    fn();
  }
};
obj.method(); // ？

// code 2
var num = 100;
var obj = {
  num: 200,
  inner: {
    num: 300,
    print: function() {
      console.log(this.num);
    }
  }
};

obj.inner.print(); //？

var func = obj.inner.print;
func(); //？

obj.inner.print(); //？

(obj.inner.print = obj.inner.print)(); //？

// code 3
function foo() {
  console.log(this.a);
}
var obj2 = { a: 42, foo: foo };
var obj1 = { a: 2, obj2: obj2 };
obj1.obj2.foo(); // ？

var obj3 = { a: 2 };
foo.call(obj3); // ？

var bar = function() {
  foo.call(obj3);
};
bar(); // ？
setTimeout(bar, 100); // ？
bar.call(window); // ？

var obj4 = { a: 3, foo: foo };
obj2.foo(); // ？
obj4.foo(); // ？
obj2.foo.call(obj4); //？
obj4.foo.call(obj2); // ？

// code 4
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
};
var a = "oops, global";
setTimeout(obj.foo, 100); // ？
obj.foo(); // ？

// code 5 (new绑定)
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // ？

var obj1 = { foo: foo };
var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // ？

obj1.foo.call(obj2, 3);
console.log(obj2.a); // ？

var bar = new obj1.foo(4);
console.log(obj1.a); // ？
console.log(bar.a); // ？

// code 6

function foo() {
  console.log(this.a);
}

var a = 2;

foo.call(null); // ？
var bar = foo.bind(null);
bar(); // ？
foo.apply(undefined); // ？

// code 7 箭头函数

function foo() {
  return a => console.log(this.a);
}

var obj1 = { a: 2 };
var obj2 = { a: 3 };
var bar = foo.call(obj1);
bar.call(obj2); // ？
```

## 1. 字符串实现倒序

## 2. 下面这段代码的执行结果是什么？

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```

> 继续问，怎么实现期望一共返回 1-5，5 个值，并且一秒返回一个值？

## 3. JavaScript 的数据类型有哪些？如何准确的检测数据类型？

## 4. 以下代码执行结果分别是什么？

- 3 + "3"
- "23" > "3"
- var b = true && 2;
- "abc123".slice(2, -1)
- "abc123".substring(2, -1)

## 5. 以下代码执行结果是什么？

- 1

  ```js
  var foo = 1,
    bar = 2,
    j,
    test;
  test = function(j) {
    j = 5;
    var bar = 5;
    foo = 5;
  };
  test(10);
  console.log(foo); //
  console.log(bar); //
  console.log(j); //
  ```

- 2

  ```js
  for (var i = 0; i < 10; i++) {
    window.setTimeout(function() {
      console.log(i); // 
    }, 100);
  }
  console.log(i); //
  ```

- 3

  ```js
  var length = 10;
  function fn() {
    alert(this.length);
  }
  var obj = {
    length: 5,
    method: function() {
      fn();
    }
  };
  obj.method(); //？
  ```

- 4

  ```js
  function foo() {
    this.value = 42;
  }
  foo.prototype = {
    method: function() {
      return true;
    }
  };
  function bar() {
    var value = 1;
    return {
      method: function() {
        return value;
      }
    };
  }
  foo.prototype = new bar();
  console.log(foo.prototype.constructor); //
  console.log(foo.prototype instanceof bar); //
  var test = new foo();
  console.log(test instanceof foo); //
  console.log(test instanceof bar); //
  console.log(test.method()); //
  ```

- 5

  ```js
  if (!("sina" in window)) {
    var sina = 1;
  }
  console.log("sina:", sina); //
  ```

  > 考察： 声明的提升

- 6

  ```js
  var t1 = new Date().getTime();
  var timer1 = setTimeout(function() {
    clearTimeout(timer1);
    console.info("实际执行延迟时间：", new Date().getTime() - t1, "ms"); //
  }, 500);
  ```

  > 需要查看`setTimeout`的运行机制。考察：异步运行机制。

- 7

  ```js
  function SINA() {
    return 1;
  }
  var SINA;
  console.log(typeof SINA); //
  ```

  > 考察： 重复声明

- 8

```js
var sinaNews = {
  name: "sinNewsName",
  test: function() {
    console.log("this.name:", this.name, "//");
  }
};
setTimeout(sinaNews.test, 500); //
```

> 考察：回调函数丢失 this 绑定

## 6. 如何对数组进行排序？如：[2, [1,2], 3, "2", "a", "b", "a", [1, 2]]，重排序后[2, [1, 2], 3, "2", "a", "b"]

## 7. 要给羡慕所有的 li 元素保定 click 时间，在鼠标点击每个 li 的时候 alert 该 li 里面的内容；且在鼠标离开外部 ul 元素范围的时候弹出一个 alert 提示、（实现时请注意代码执行小路及浏览器兼容性，不要使用现成的框架库，用原生 js 编写完成）

```js
<ul id="ulItem">
  <li>内容1</li>
  ......此处省略1000+个li对象(注：不要使用循环绑定，如果使用循环绑定1000+的绑定事件会很慢)......
  <li>内容n</li>
</ul>
```

## 8. 下面代码打印出什么？

```js
const a = 2;
console.log(a); // ?
a = 3; //?
```

## 9. 下面代码分别输出什么？

```js
function foo() {
  "use strict";
  console.log(this.a);
}

function bar() {
  console.log(this.a);
}

var a = "this is a 'a'";

bar(); // ?
foo(); // ?
```

## 10. 根据以下代码，写出结果

```js
// 第一组
alert(a);
a();
var a = 3;
function a() {
  alert(10);
}
alert(a);
a = 6;
a();

//------------分割线------------------
// 第二组
alert(a);
a();
var a = 3;
var a = function() {
  alert(10);
};
alert(a);
a = 6;
a();
```

## 11. 给出一个字符串，找到里面重复最多的字符？

## 12.写一个函数实现`n!`

## 13. 下面写出答案

```js
a = 1;
b = 1;
a == b; // ?
name1 = { a: 1 };
name2 = { a: 1 };
name1 == name2; //?
```

## 14. 给一个`<div>`添加点击事件的方法？

## 15. ajax 中有 3 个请求，如何顺序实现这 3 个请求？

## 16. localStorage、sessionStorage 的区别？还要去了解一下 Cookie

## 17. 数组的哪些操作会改变数组？

## 18. 事件代理的原理，请使用原生 js 实现一个

## 19. 请说明下列方法功能：

- push
- pop
- shift
- unshift
- sort
- reverse
- splice

## 20. apply 和 call 的作用和区别?

## 21. 写一个函数递归调用的例子

## 22. 写出下列代码的运行结果：

```js
var a = 1;
function main() {
  alert(a);
  var a = 2;
  alert(this.a);
}
main();
```

## 23. 参数传递中引用和复制的区别？

## 23. 函数传递参数时，参数的获取方法？

> this.argments 的相关问题

## 24. es6 的特性有什么？

## 25. 箭头函数相对于普通函数有什么优点？

## 26. for-of 的原理？

## 27. 迭代器是什么？

> 生成器返回的是迭代器。
