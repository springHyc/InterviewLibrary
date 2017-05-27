# CSS

> 该文档存放的只是HTML部分的问题，其中答案部分放在对应目录下的questionsAndAnswers.md文件中，答案部分也只是个人所做的答案，可能存在不正确的地方，欢迎大家共同讨论，找出一个完美的答案。

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