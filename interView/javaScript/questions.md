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

## 3. JavaScript 的数据类型有哪些？如何准确的检测数据类型？symbol 是什么？有什么作用？

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
  function Foo() {
    this.value = 42;
  }
  Foo.prototype = {
    method: function() {
      return true;
    }
  };
  function Bar() {
    var value = 1;
    return {
      method: function() {
        return value;
      }
    };
  }
  Foo.prototype = new Bar();
  console.log(Foo.prototype.constructor); //
  console.log(Foo.prototype instanceof Bar); //
  var test = new Foo();
  console.log(test instanceof Foo); //
  console.log(test instanceof Bar); //
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

## 28. for in 和 for of 的区别是什么？

## 29. 简述 arguments 的作用，在 es6 中更好的替代方案是什么?

## 30. 实现一个动物类，动物有吃饭，吼叫的方法，有眼睛、鼻子属性。动物类有子类：猫和狗。猫的叫声是喵喵，猫的眼睛是蓝色的，狗得见叫声是汪汪，狗的眼睛是棕色的。请用代码实现上述描述。

## 32. 下面代码运行的结果是什么？

```js
let obj = {
  fun1: () => {
    console.log("111");
  },
  fun2: () => {
    this.fun1();
  }
};

obj.fun2();
```

## 33. 下面代码会输出什么？

```js
let arr = [1, 2, 3, 4];
let it1 = arr[Symbol.iterator](); // 遍历器接口
let res = it1.next();
console.log(res);
```

---

下面部分考察的是 `setTimeout` 与 `promise`

## 31. 下面的执行结果是什么？

```js
function Promise1() {
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < 2; i++) {
      console.log("111");
    }
    resolve(true);
  });
}
function Promise2() {
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < 2; i++) {
      console.log("222");
    }
    resolve(true);
  });
}

setTimeout(function() {
  console.log("333");
}, 0); // 这是是会执行的。考察的是异步执行，js的任务队列

Promise.all([Promise1(), Promise2()]).then(function() {
  console.log("All Done!");
});
```

## 34. 下面代码输出什么？ ？

### 题目 1

```js
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => {
    throw new Error("my error");
  })
  .catch(() => 1)
  .then(x => x + 1)
  .then(x => console.log(x))
  .catch(console.error);
```

### 题目 2

```js
// Qunar.com
setTimeout(() => {
  console.log(1);
}, 0);

new Promise(resolve => {
  console.log(2);
  resolve();
  console.log(3);
}).then(() => {
  console.log(4);
});

console.log(5);
```

### 题目 3

```js
var p1 = new Promise(function(resolve, reject) {
  setTimeout(() =>reject(new Error('p1 中failure')) , 3000);
})

var p2 = new Promise(function(resolve, reject){
  setTimeout(() => resolve(p1), 1000);
});
var p3 = new Promise(function(resolve, reject) {
  resolve(2);
});
var p4 = new Promise(function(resolve, reject) {
  reject(new Error('error  in  p4'));
});

1. p3.then(re => console.log(re)); //?
2. p4.catch(error => console.log(error));//?

3. p2.then(null,re => console.log(re));//?
4. p2.catch(re => console.log(re));//?
```

### 题目 4

```js
var p1 = Promise.resolve(1);
var p2 = new Promise(resolve => {
  setTimeout(() => resolve(2), 100);
});
var v3 = 3;
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("oops"), 10);
});

var p5 = new Promise(resolve => {
  setTimeout(() => resolve(5), 0);
});
var p1 = Promise.resolve(1);
Promise.race([v3, p1, p2, p4, p5]).then(val => console.log(val)); //?
Promise.race([p1, v3, p2, p4, p5]).then(val => console.log(val)); // ?
Promise.race([p1, p2, p4, p5]).then(val => console.log(val)); // ?
Promise.race([p2, p4, p5]).then(val => console.log(val)); //?
```

## 35. 说一下对 Promise 的理解？

## 40. promise 能够一直.then 下去的原因？

## 49. 如何用原生来实现 promise.all()?

## 36. 回调地狱的缺点？

---

## 37. 一个列表中给每项添加点击事件，如何添加？当列表有一万项的时候怎么添加？（事件委托是什么）做过的项目中 react-native 中的表格是怎么添加点击事件的？

## 38. 原型链是什么？说一下原型链的 this 指针指向？

## 39. 继承有几种方式？写一下

// -------------------打印分界线-----------------------

## 41. 有一个场景，我们有很多以前的代码，都是回调函数的形式写的。如何将 callback 形式的回调函数转化为 promise 的调用方式？

## 42. let const var 的区别？

`const obj = {a: 1};`那么 a 还能赋值为其他值吗？为什么？

## 43. 写一个函数，实现对象的深度拷贝。

## 44. 给一个字符串，找到里面重复最多的字符？

## 45. 一个列表很长，如何自己实现一个滚动条？

## 46. 简单点的，一个`div`方块如何移动？css3 方式，js 方式呢？用 js 如何实现 1s 动一下的效果?

## 47. 页面上一个可以触摸的方块，如何让其跟着这手指的移动而移动？手机触屏事件了解多少？

## 48. 定时有几种方式？

---

Qunar.com

## 50. 如何实现一下 Object.create()?

## 51. js 的路由是如何实现的？

## 52. 对 websocket 的理解？

## 53. 对 Pure functions（纯函数）的理解？

## 54. js 单线程的理解？

## 55. 如何用 promise 和 setTimeout 实现一个 delay 函数，`.then` 里面可以正常完成 promise 的一些后续操作？

```js
// delay函数是这样的
delay(1000).then();
```

## 56. array、null、object 数据如何判断？

## 57. 写出下列代码的执行结果

1.

```js
var a = 1;
b = function(x) {
  x && a(--x);
};
alert(a); // ? 1
```

2.

```js
if (!("a" in window)) {
  var a = 2;
}
alert(a); // undefined
```

3.

```js
function a() {
  return 1;
}
var a;
alert(a); // 显示function a () {return 1;}
```

4.

```js
function a() {
  return 1;
}
var a = 1 && 2;
alert(a); // 2
```

5.

```js
function a() {
  alert(this); // 全局对象window
}
a.apply(null);
```

---

sougou.com

## 58. es6 中的 Map 结构

### 1. es6 为什么推出 Map 结构？

## 59. 说一说 es5 中 object 是如何存储的？

```js
var name = "hehe";
var age = 27;
var job;
var arr = [1, 2, 3, 4];
var obj = { name: "hehe", age: 27 };
```

这些都是  如何存储的？

---

百度-17 年上半年

## 60. 判断是否是回文

## 61. 为什么`for-in`不适合遍历数组？

## 62. JavaScript 如何判断一个对象是空的？

---

## 63. js 的作用域是什么？作用域是什么时候确定的？

## 64. setTimeout 和 promise 的区别？宏任务和微任务是什么？有什么区别？

## 65. 构造函数是什么？new 的时候都去做了什么？
