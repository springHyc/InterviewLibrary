# CSS 问题答案

> 下面所有的代码都是个人作答，可能存在理解错误或者答案错误的地方，欢迎大家在[项目下方](https://github.com/springHyc/InterviewLibrary)或者[项目的issues](https://github.com/springHyc/InterviewLibrary/issues)中留言批评指正。

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

> 个人答案

1. 这样实现不了三栏布局，使用float布局的话，中间的div会占一行，右侧部分会另起一行展示

2. 将中间部分和右侧部分的html结构换一下，就可以实现三栏布局，也就是下面这样：

```html
<div class="container">
  <div  class="item left">left: width: 100px</div>
  <div  class="item right ">right width: 100px</div>
  <div  class="item center ">中间宽度自定义</div>
</div>
```

