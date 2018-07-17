# CSS

> 该文档存放的只是 HTML 部分的问题，其中答案部分放在对应目录下的 questionsAndAnswers.md 文件中，答案部分也只是个人所做的答案，可能存在不正确的地方，欢迎大家共同讨论，找出一个完美的答案。

> 希望大家能够多学一点知识，能够对面试有所有帮助。

## 1. 下面给出的代码你觉得有什么问题吗？

```html
<div class="container">
  <div  class="item left">left: width: 100px</div>
  <div  class="item center ">中间宽度自定义</div>
  <div  class="item right ">right width: 100px</div>
</div>

<style>
  .container {
    height: 100px;
    border: 1px solid #000;
  }
  .item {
    height: 100%;
    border: 1px solid red;
  }
  .left{
    float: left;
    width: 100px;
  }
  .center {
    margin: 0 100px;
    width: auto;
  }
  .right {
    float: right;
    width: 100px;
  }

</style>
```

## 2. css 选择器有哪些？

## 3. 描述一下 CSS 的优先级规则

## 4. css 盒模型是什么？

## 5. 实现 div 的动画移动

## 6. css 模块化是什么？

## 7. 如何实现一个三列布局，中间固定，两边自适应？

## 8. 如何完成下面的样式？

![](../images/css-box-shadow.png)

## 8. 通过 html img 标签设置图片和通过 div 背景图设置图片，两种设置图片的方式有什么优劣？

## 9. 实现一下一个 div 的居中。如果不适用 flex 布局怎么做？

```js
<header>
  <style>
    .contaniner {
      margin: 0 auto; // 左右居中
      border: 1px solid red;
      width: 100px;
      height: 100px;
      top: calc(50% - 50px);
      position: relative;
    }
  </style>
</header>
<div class="contaniner" />
```

> 必须有 width,`margin: 0 auto`才有效果；
> `top: calc(50% - 50px); position: relative;`是可以上下居中

## 10. 普通的实现一下两个`<div>`横着排列？

// -------------------打印分界线-----------------------

## 11. 请写出你所知道的清除浮动的方法（代码）

## 12. 如何实现一个两栏 布局，左边是 100px 宽，右边自定义？（flex 和非 flex 各实现一个）

---

网易

## 13. 有一个日历组件，如何实现各个屏幕的自适应？

## 14. css3 有代表性的新特性？

## 15. 如何实现动画效果？

## 16. 怎么确定一个块的位置，涉及到 css 的盒模型，以及 DOM api

## 17. 伪元素和伪类的区别？说一个常用的伪元素？说一个常用的伪类

## 18. `:before`和`:after`的区别？都用来做什么？

## 19. css3 的滤镜听过吗？

## 20. 有个场景：国家发生灾难后，需要将该页面做成灰白色，如何实现？
