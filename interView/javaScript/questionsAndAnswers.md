# JavaScript  问题答案

> 下面所有的代码都是个人作答，可能存在理解错误或者答案错误的地方，欢迎大家在[项目下方](https://github.com/springHyc/InterviewLibrary)或者[项目的 issues](https://github.com/springHyc/InterviewLibrary/issues)中留言指正。

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
obj.method(); // 10 隐式绑定的函数会丢失绑定对象，会应用默认绑定。`obj.method()`它实际上引用的是函数fn本身。

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

obj.inner.print(); //300

var func = obj.inner.print;
func(); //100 默认绑定，绑定的是全局对象

obj.inner.print(); //300 隐式绑定，当函数引用有上下文对象时，隐式绑定规则会把函数调用的`this`绑定到这个上下文对象。

(obj.inner.print = obj.inner.print)(); //100 赋值对象返回的是一个函数，默认绑定，绑定的是全局对象

// code 3
function foo() {
  console.log(this.a);
}
var obj2 = { a: 42, foo: foo };
var obj1 = { a: 2, obj2: obj2 };
obj1.obj2.foo(); // 42 对象属性引用链中只有上一层或者说最后一层在调用位置中起作用。

var obj3 = { a: 2 };
foo.call(obj3); // 2

var bar = function() {
  foo.call(obj3);
};
bar(); // 2
setTimeout(bar, 100); // 2
bar.call(window); // 2 硬绑定的bar不可能在修改它的this

var obj4 = { a: 3, foo: foo };
obj2.foo(); // 42
obj4.foo(); // 3
obj2.foo.call(obj4); // 3
obj4.foo.call(obj2); // 42 显示绑定比隐式绑定优先级高

// code 4
function foo() {
  console.log(this.a);
}
var obj = {
  a: 2,
  foo: foo
};
var a = "oops, global"; // a是全局对象的属性
setTimeout(obj.foo, 100); // "oops, global"
obj.foo(); // 2

// code 5 (new绑定)
function foo(a) {
  this.a = a;
}
var bar = new foo(2);
console.log(bar.a); // 2 new绑定

var obj1 = { foo: foo };
var obj2 = {};

obj1.foo(2);
console.log(obj1.a); // 2

obj1.foo.call(obj2, 3);
console.log(obj2.a); // 3

var bar = new obj1.foo(4);
console.log(obj1.a); // 2
console.log(bar.a); // 4 new绑定比隐式绑定优先级高

// code 6

function foo() {
  console.log(this.a);
}

var a = 2;

// 如果你把null或者undefined作为this的绑定对象传入call\apply\bind，这些值在调用的时候会被忽略，实际应用的是默认绑定规则。
foo.call(null); // 2
var bar = foo.bind(null);
bar(); // 2
foo.apply(undefined); // 2

// code 7 箭头函数

function foo() {
  return a => console.log(this.a);
}

var obj1 = { a: 2 };
var obj2 = { a: 3 };
var bar = foo.call(obj1);
bar.call(obj2); // 2 箭头函数是根据外层（函数或者全局）作用域来决定this。并且绑定后无法修改。
```

## 1. 字符串实现倒序

> 个人答案

使用最简单的 JS 操作就可以完成。下面是简单的实现 code：

```js
function reverseString(str) {
  var strArray = str.split(""); // 使用空字符串来分割成字符数组
  return strArray.reverse().join(""); // 反转并连接
}
reverseString("hello");
```

## 2. 下面这段代码的执行结果是什么？

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
```

继续问，怎么实现期望一共返回 1-5，5 个值，并且一秒返回一个值？

> 这段代码,我们预期的结果是：分别输出数字 1~5，每秒一次，每次一个。但是实际结果却是：这段代码在运行时会以每秒一次的频率输出五次 6。

> 这是为什么？

> 首先解释 6 是从哪里来的。这个循环的终止条件是 `i` 不再 `<=5`。条件首次成立时 i 的值是 6。因此，输出显示的是循环结束时 i 的最终值。仔细想一下，这好像又是显而易见的，<u>延迟函数的回调会在循环结束时才执行</u>。事实上， 当定时器运行时即使每个迭代中执行的是 setTimeout(.., 0)，<u>所有的回调函数依然是在循 环结束后才会被执行</u>，因此会每次输出一个 6 出来。

因为外层作用域中只有一个`i`，这个`i`被封闭进去，而不是每个迭代的函数会封闭一个新的`i`.

> ---以上解释来自《你不知道的 JavaScript（上卷）》第五章

这样就可以实现期望一共返回 1-5，5 个值，并且一秒返回一个值

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

let 声明只属于作用域块。`for`循环头部的`let i`不只是为for循环本身声明了一个`i`，而是为循环的每一次迭代都重新声明了一个新的`i`。这意味着loop迭代内部创建的闭包封闭的是每次迭代中的变量，就像期望的那样。

或者;

for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}

在迭代内使用 IIFE 会为每个迭代都生成一个新的作用域，使得延迟函数的回调可以将新的
作用域封闭在每个迭代内部，每个迭代中都会含有一个具有正确值的变量供我们访问。
```

## 3. JavaScript 的数据类型有哪些？如何准确的检测数据类型？

## 4. 以下代码执行结果分别是什么？

* 3 + "3" // '33'
* "23" > "3" // false
* var b = true && 2; // undefined
* "abc123".slice(2, -1) // 'c12'
* "abc123".substring(2, -1) // 'ab' //如果 start or stop 是负数或 NaN，会把它当成 0 对待;如果 start > stop,则会交换这两个参数

解释：

**String.slice() 和 String.substring(),String.substr()的区别**

Syntax: string.slice(start, stop);
Syntax: string.substring(start, stop);
返回一个字符串，左包含，右不包含

Syntax:String.substr(start, num);
返回字符串,包含 start 开始,num 为字符数

---

slice VS substring

相同：

1.如果 start == stop,return 一个空字符串
2.stop 如果被省略，则直接扫至字符串尾 3.如果 start 或 stop 大于了字符串长度，则会被替换成字符串长度

不同：
substing():

* 1.如果 start > stop,则会交换这两个参数
* 2.如果 start or stop 是负数或 NaN，会把它当成 0 对待

slice():

* 1.如果 start > stop,不会交换这两个参数，返回空字符串””
* 2.如果 start,or stop 是负数，且绝对值小于字符串长度，则开头\结尾是 start\stop+字符串长度
* 3.如果 start or stop 是负数，且绝对值大于字符串长度，则当作 0 处理

## 5. 以下代码执行结果是什么？

* 1
  ```js
  var foo = 1,
    bar = 2,
    j,
    test;
  test = function(j) {
    j = 5;
    var bar = 5;
    console.log(bar); // 5
    foo = 5;
  };
  test(10);
  console.log(foo); // 5 改变的全局变量
  console.log(bar); // 2 由于函数作用域对全局作用域的隐藏，所以只有在test函数内部，bar=5,并不能影响到全局中的bar
  console.log(j); // undefined  test(10)函数调用的时候，是函数内部的参数j接收到了10，但是它也是函数作用域内的变量，并不会改变全局作用域中的j。
  ```
  > 这个题目还有一个类似的题目：这个考察的是，数组和对象都是引用复制
  ```js
  var j = [1, 2, 3];
  test = function(j) {
    j.push(4);
  };
  test(j);
  console.log(j); // [1,2,3,4],因为test(j)中的j是对[1,2,3]的引用复制给function(j)中的j,而在test函数内部，通过引用改变的是[1,2,3]这是数组本身，所以console.log(j); 为 [1,2,3,4]
  ```
* 2

  ```js
  for (var i = 0; i < 10; i++) {
    window.setTimeout(function() {
      console.log(i); // 每隔100ms输出一个10
    }, 100);
  }
  console.log(i); // 10
  ```

* 3

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
  obj.method(); // 10 , 对fn间接引用，调用这个函数会应用默认的绑定规则
  ```

> 这个考察的是`this`的指向问题。

还有一个类似的问题：

```js
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

obj.inner.print(); //300

var func = obj.inner.print;
func(); //100

(obj.inner.print)(); //300

(obj.inner.print = obj.inner.print)(); //100

问题：第一个和第三个有什么区别？第三个和第四个有什么区别？
```

1.第一个和第三个没有区别，运行的都是 obj.inner.print()，里面的 this 指向 obj.inner.num

2.第四个，首先你要知道一点，复制操作，会返回所赋的值。

```js
var a;
console.log((a = 5)); //5
```

所以(obj.inner.print = obj.inner.print)的结果就是一个函数，内容是

```js
function () {
    console.log(this.num);
}
```

在全局下运行这个函数，里面的 this 指向的就是 window，所以(obj.inner.print = obj.inner.print)();的结果就是

```js
var num = 100;
function () {
    console.log(this.num);
}()
// 100
```

3.  第二个

赋值操作，fun 完全就是一个函数引用，这个引用丢失了函数原本所在的上下文信息，所以最终是在全局上下文中运行

```js
function() {
  console.log(this.num);
}
```

所以这个时候 num 是全局的 num,也就是 100

* 4

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
  console.log(Foo.prototype.constructor); // ƒ Object() { [native code] }
  console.log(Foo.prototype instanceof Bar); // false
  var test = new Foo();
  console.log(test instanceof Foo); // true
  console.log(test instanceof Bar); // false
  console.log(test.method()); // 1
  ```

* 5

  ```js
  if (!("sina" in window)) {
    var sina = 1;
  }
  console.log("sina:", sina); // undefined
  ```

  > 由于 JavaScript 在编译阶段会对声明进行提升，所以上述代码会做如下处理：

  ```js
  var sina;
  if (!("sina" in window)) {
    sina = 1;
  }
  console.log("sina:", sina);
  ```

  >  声明被提升后，`window.sina`的值就是 undefined，但是`!("sina" in window)`这段代码的运行结果是`true`，所以`sina = 1;`就不会被执行，所以  本题目的输出结果是`undefined`。

* 6

  ```js
  var t1 = new Date().getTime();
  var timer1 = setTimeout(function() {
    clearTimeout(timer1);
    console.info("实际执行延迟时间：", new Date().getTime() - t1, "ms"); // 500+ms
  }, 500);
  ```

  > 需要查看`setTimeout`的运行机制。

  > 阮一峰老师有篇不错的文章（[JavaScript 运行机制详解：再谈 Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)），我就不再重复造轮子了；如果觉得太长不看的话，楼主简短地大白话描述下。

  JavaScript 都是单线程的，单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。如果排队是因为计算量大，CPU 忙不过来，倒也算了，但是很多时候 CPU 是闲着的，因为 IO 设备（输入输出设备）很慢（比如 Ajax 操作从网络读取数据），不得不等着结果出来，再往下执行。
  JavaScript 语言的设计者意识到，这时主线程完全可以不管 IO 设备，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 设备返回了结果，再回过头，把挂起的任务继续执行下去。于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）

  ```
  （1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
  （2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
  （3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
  （4）主线程不断重复上面的第三步。
  ```

  > 一段 js 代码（里面可能包含一些 setTimeout、鼠标点击、ajax 等事件），从上到下开始执行，遇到 setTimeout、鼠标点击等事件，异步执行它们，此时并不会影响代码主体继续往下执行(当线程中没有执行任何同步代码的前提下才会执行异步代码)，一旦异步事件执行完，回调函数返回，将它们按次序加到执行队列中,加入到队列中，只是在确定额  的时间候调用，但是并不一定立马执行。

综上所述， 500ms 后异步任务执行完毕，然后就在“任务队列”之中防止一个事件。但是，需要主线程的 “执行栈”中所有的同步任务执行完毕后，“任务队列”中的时间才会开始执行。所以，500+ms 后才真正的执行输出。

* 7
  ```js
  function SINA() {
    return 1;
  }
  var SINA;
  console.log(typeof SINA); // function
  ```

> 重复声明被忽略掉了，所以`var SINA`并没有起到作用，而是被忽略掉了。

* 8

```js
var sinaNews = {
  name: "sinNewsName",
  test: function() {
    console.log("this.name:", this.name, "//");
  }
};
setTimeout(sinaNews.test, 500); // "this.name:  //"
```

> 回调函数丢失 this 绑定

## 6. 如何对数组进行排序？如：[2, [1,2], 3, "2", "a", "b", "a", [1, 2]]，重排序后[2, [1, 2], 3, "2", "a", "b"]

> 个人答案

```js
function deleteCopy(arr) {
  var map = {};
  var newarr = [];
  arr.forEach(item => {
    if (!map[JSON.stringify(item)]) {
      newarr.push(item);
      map[JSON.stringify(item)] = 1;
    }
  });
  return newarr;
}
```

## 7. 要给羡慕所有的 li 元素保定 click 时间，在鼠标点击每个 li 的时候 alert 该 li 里面的内容；且在鼠标离开外部 ul 元素范围的时候弹出一个 alert 提示、（实现时请注意代码执行小路及浏览器兼容性，不要使用现成的框架库，用原生 js 编写完成）

```js
<ul id="ulItem">
  <li>内容1</li>
  ......此处省略1000+个li对象(注：不要使用循环绑定，如果使用循环绑定1000+的绑定事件会很慢)......
  <li>内容n</li>
</ul>
```

### 8. 下面代码打印出什么？

```js
const a = 2;
console.log(a); //   2
a = 3; // TypeError: Assignment to constant variable.
```

常量的值在设定之后就不能再更改。

> 顺便记录一下`TypeError`与`ReferenceError`的区别：
> `ReferenceError`： 如果 RHS 查询（取值查询）在所有前台的作用域中找寻不到所需的变量，引擎就会抛出`ReferenceError`异常。
> `ReferenceError`同作用域判别失败相关，而`TypeError`则代表作用域判别成功了，但是对结果的操作是非法或者不合理的。比如视图对一个非函数类型的值进行函数调用，或者引用`null`或`undefined`类型的值中的属性，那么引擎会抛出类型异常，`TypeError`.

### 9. 下面代码分别输出什么？

```js
function foo() {
  "use strict";
  console.log(this.a);
}

function bar() {
  console.log(this.a);
}

var a = "this is a 'a'";

bar(); // "this is a 'a'"
foo(); // "TypeError: Cannot read property 'a' of undefined
```

接下来我们可以看到当调用 foo() 时，this.a 被解析成了全局变量 a。为什么?因为在本 例中，函数调用时应用了 this 的默认绑定，因此 this 指向全局对象。

bar() 调用使用严格模式(strict mode)，那么全局对象将无法使用默认绑定，因此 this 会绑定 到 undefined

### 10. 根据以下代码，写出结果

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
  // 函数表达式
  alert(10);
};
alert(a);
a = 6;
a();
```

> 考点其实就两个，第一变量声明提前，第二函数声明优先于变量声明！但是函数表达式并不会被提升！！

第一部分的代码片段会被引擎理解为如下形式：

```js
function a() {
  // 变量声明、函数声明会被提升，函数声明有先有变量申明
  alert(10);
}
var a;
alert(a);
a();
a = 3;
alert(a);
a = 6;
a();
```

第一部分运行结果：

1.函数声明优先于变量声明，所以，刚开始，a 就是 function a(){alert(10)} ，就会看到这个函数。

2.a()，执行函数，就是出现 alert(10)。

3.执行了 var a=3; 所以 alert(a)就是显示 3 。

4.由于 a 不是一个函数了，所以往下在执行到 a()的时候， 报错。

第二部的代码片段会被引擎理解为：

```js
var a;
alert(a);
a();
a = 3;
a = function() {
  // 函数表达式
  alert(10);
};
alert(a);
a = 6;
a();
```

第二部分运行结果：
1.underfind

2.报错在之前说过，预解析是把带有 var 和 function 关键字的事先声明，但不会赋值。所以一开始是 underfind，然后报错是因为执行到 a()的时候，a 并不是一个函数。因为报错了，错误会冒泡上浮，知道 catch 或者是最上层，所以不会继续执行下去。

> 备注

```js
//函数表达式，和变量声明同等
var a = function() {
  alert(10);
};
//函数声明，优于变量声明
function a() {
  alert(10);
}
```

## 9. 给出一个字符串，找到里面重复最多的字符？

> 个人答案, 如果有重复数相同的，那么不会记录后面的字符

```js
function findMax(str) {
  var map = {},
    max = { num: 0 };

  for (var index in str) {
    if (map[str[index]]) {
      map[str[index]]++;
    } else {
      map[str[index]] = 1;
    }
    if (map[str[index]] > max.num) {
      max.num = map[str[index]];
      max.key = str[index];
    }
  }
  console.log(`max num is ${max.num}, the key is ${max.key}`);
}
```
