# JavaScript 问题答案

> 下面所有的代码都是个人作答，可能存在理解错误或者答案错误的地方，欢迎大家在[项目下方](https://github.com/springHyc/InterviewLibrary)或者[项目的issues](https://github.com/springHyc/InterviewLibrary/issues)中留言指正。

## 1. 字符串实现倒序

> 个人答案

使用最简单的JS操作就可以完成。下面是简单的实现code：

```js
function reverseString(str) {
  var strArray = str.split(""); // 使用空字符串来分割成字符数组
  return strArray.reverse().join("");// 反转并连接
}
reverseString("hello");
```

## 2. 下面这段代码的执行结果是什么？

```js
for(var i=1;i<=5;i++) {
  setTimeout(function() {
    console.log(i);
  }, i*1000);
}
```

> 继续问，怎么实现期望一共返回1-5，5个值，并且一秒返回一个值？

## 3. JavaScript的数据类型有哪些？如何准确的检测数据类型？

## 4. 以下代码执行结果分别是什么？

  * 3 + "3"
  * "23" > "3"
  * var b = true && 2;
  * "abc123".slice(2, -1)
  * "abc123".substring(2, -1)

## 5. 以下代码执行结果是什么？

* 1
  ```js
  var foo = 1,bar = 2,j,test;
  test = function(j) {
      j = 5;
      var bar = 5;
    console.log(bar); // 5
      foo = 5;
  }
  test(10);
  console.log(foo); // 5 改变的全局变量
  console.log(bar); // 2 由于函数作用域对全局作用域的隐藏，所以只有在test函数内部，bar=5,并不能影响到全局中的bar
  console.log(j); // undefined  test(10)函数调用的时候，是函数内部的参数j接收到了10，但是它也是函数作用域内的变量，并不会改变全局作用域中的j。
  ```
  > 这个题目还有一个类似的题目：这个考察的是，数组和对象都是引用复制
  ```js
    var j = [1,2,3];
    test = function(j) {
      j.push(4);
  }
  test(j);
  console.log(j); // [1,2,3,4],因为test(j)中的j是对[1,2,3]的引用复制给function(j)中的j,而在test函数内部，通过引用改变的是[1,2,3]这是数组本身，所以console.log(j); 为 [1,2,3,4]
  ```
* 2

  ```js
  for(var i=0;i<10;i++){
      window.setTimeout(function () {
          console.log(i); // 每隔100ms输出一个10
      }, 100);
  }
  console.log(i); // 10
  ```

* 3

  ```js
    var length = 10
    function fn() {
        alert(this.length)
    }
    var obj = {
        length: 5,
        method: function () {
            fn()
        }
    }
    obj.method() // 10 , 对fn是简介引用，调用这个函数会应用默认的绑定规则
  ```
* 4

  ```js
  function foo() {this.value = 42;}
  foo.prototype = {method: function () {return true;}};
  function bar() {
      var value = 1;
      return{method:function(){return value;}};
  }
  foo.prototype = new bar();
  console.log(foo.prototype.constructor); //
  console.log(foo.prototype instanceof  bar); //
  var test = new foo();
  console.log(test instanceof foo);//
  console.log(test instanceof bar);//
  console.log(test.method());//
  ```
* 5

  ```js
  if(!("sina" in window)){
      var sina = 1;
  }
  console.log("sina:", sina) // undefined
  ```

  > 由于JavaScript在编译阶段会对声明进行提升，所以上述代码会做如下处理：

    ```js
    var sina;
    if(!("sina" in window)) {
      sina = 1;
    }
    console.log("sina:", sina);
    ```
  > 声明被提升后，`window.sina`的值就是undefined，但是`!("sina" in window)`这段代码的运行结果是`true`，所以`sina = 1;`就不会被执行，所以本题目的输出结果是`undefined`。
* 6
  ```js
  var t1 = new Date().getTime();
  var timer1 = setTimeout(function () {
      clearTimeout(timer1);
      console.info("实际执行延迟时间：", new Date().getTime()-t1, "ms"); // 500+ms
  }, 500);
  ```
  > 需要查看`setTimeout`的运行机制。

  > 阮一峰老师有篇不错的文章（[JavaScript 运行机制详解：再谈Event Loop](http://www.ruanyifeng.com/blog/2014/10/event-loop.html)），我就不再重复造轮子了；如果觉得太长不看的话，楼主简短地大白话描述下。

  JavaScript都是单线程的，单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。
  如果排队是因为计算量大，CPU忙不过来，倒也算了，但是很多时候CPU是闲着的，因为IO设备（输入输出设备）很慢（比如Ajax操作从网络读取数据），不得不等着结果出来，再往下执行。
  JavaScript语言的设计者意识到，这时主线程完全可以不管IO设备，挂起处于等待中的任务，先运行排在后面的任务。等到IO设备返回了结果，再回过头，把挂起的任务继续执行下去。
  于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。
  具体来说，异步执行的运行机制如下。（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）
  ```
  （1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
  （2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
  （3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
  （4）主线程不断重复上面的第三步。
  ```

  > 一段js代码（里面可能包含一些setTimeout、鼠标点击、ajax等事件），从上到下开始执行，遇到setTimeout、鼠标点击等事件，异步执行它们，此时并不会影响代码主体继续往下执行(当线程中没有执行任何同步代码的前提下才会执行异步代码)，一旦异步事件执行完，回调函数返回，将它们按次序加到执行队列中,加入到队列中，只是在确定额的时间候调用，但是并不一定立马执行。

综上所述， 500ms后异步任务执行完毕，然后就在“任务队列”之中防止一个事件。但是，需要主线程的“执行栈”中所有的同步任务执行完毕后，“任务队列”中的时间才会开始执行。
所以，500+ms后才真正的执行输出。

* 7
  ```js
  function SINA() { return 1;}
  var SINA;
  console.log(typeof SINA); // function
  ```

> 重复声明被忽略掉了，所以`var SINA`并没有起到作用，而是被忽略掉了。

* 8

```js
var sinaNews = {
    name:'sinNewsName',
    test:function () {
        console.log('this.name:', this.name, '//');
    }
};
setTimeout(sinaNews.test, 500); // "this.name:  //"
```

> 回调函数丢失this绑定

## 6.  如何对数组进行排序？如：[2, [1,2], 3, "2", "a", "b", "a", [1, 2]]，重排序后[2, [1, 2], 3, "2", "a", "b"]

## 7. 要给羡慕所有的li元素保定click时间，在鼠标点击每个li的时候alert该li里面的内容；且在鼠标离开外部ul元素范围的时候弹出一个alert提示、（实现时请注意代码执行小路及浏览器兼容性，不要使用现成的框架库，用原生js编写完成）

```js
<ul id="ulItem">
    <li>内容1</li>
    ......此处省略1000+个li对象(注：不要使用循环绑定，如果使用循环绑定1000+的绑定事件会很慢)......
    <li>内容n</li>
</ul>
```