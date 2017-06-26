# JavaScript

> 该文档存放的只是HTML部分的问题，其中答案部分放在对应目录下的questionsAndAnswers.md文件中，答案部分也只是个人所做的答案，可能存在不正确的地方，欢迎大家共同讨论，找出一个完美的答案。
> 希望大家能够多学一点知识，能够对面试有所有帮助。

## 1. 字符串实现倒序

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
        foo = 5;
    }
    test(10);
    console.log(foo); //
    console.log(bar); //
    console.log(j); //
  ```
* 2

  ```js
  for(var i=0;i<10;i++){
      window.setTimeout(function () {
          console.log(i); // 
      }, 100);
  }
  console.log(i); //
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
    obj.method() //
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
  console.log("sina:", sina) //
  ```

  > 考察： 声明的提升
* 6
  ```js
  var t1 = new Date().getTime();
  var timer1 = setTimeout(function () {
      clearTimeout(timer1);
      console.info("实际执行延迟时间：", new Date().getTime()-t1, "ms"); //
  }, 500);
  ```
  > 需要查看`setTimeout`的运行机制。
  考察：异步运行机制。

* 7
  ```js
  function SINA() { return 1;}
  var SINA;
  console.log(typeof SINA); // 
  ```
> 考察： 重复声明

* 8

```js
var sinaNews = {
    name:'sinNewsName',
    test:function () {
        console.log('this.name:', this.name, '//');
    }
};
setTimeout(sinaNews.test, 500); //
```

> 考察：回调函数丢失this绑定

## 6.  如何对数组进行排序？如：[2, [1,2], 3, "2", "a", "b", "a", [1, 2]]，重排序后[2, [1, 2], 3, "2", "a", "b"]

## 7. 要给羡慕所有的li元素保定click时间，在鼠标点击每个li的时候alert该li里面的内容；且在鼠标离开外部ul元素范围的时候弹出一个alert提示、（实现时请注意代码执行小路及浏览器兼容性，不要使用现成的框架库，用原生js编写完成）

```js
<ul id="ulItem">
    <li>内容1</li>
    ......此处省略1000+个li对象(注：不要使用循环绑定，如果使用循环绑定1000+的绑定事件会很慢)......
    <li>内容n</li>
</ul>
```