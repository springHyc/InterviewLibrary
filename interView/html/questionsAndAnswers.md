# HTML 问题答案

> 下面所有的代码都是个人作答，可能存在理解错误或者答案错误的地方，欢迎大家在[项目下方](https://github.com/springHyc/InterviewLibrary)或者[项目的issues](https://github.com/springHyc/InterviewLibrary/issues)中留言批评指正。

## 1. 下面代码中，在浏览器上显示为什么会有空格？

```html
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</div>
```

显示结果：`1 2 3`，为什么会有空格?

* 原因：

    > 行内元素之间产生的间距，是由于换行符、tab(制表符)、空格等字符引起，而字符的大小是定义字体大小来控制。（不论空格、换行符、tab有几个，都显示一个空格）

    三个`span`标签之间都有换行符，而“行内元素之间的空格相当于块级元素的回车换行” 所以会在输出时，显示空格。

* 解决办法

  1. 可以使用浮动来去除空格。

    > 不可否认，使用浮动技术是比较好的办法，实际工作中我们使用浮动也是比较多，但是也并不是每处地方都要使用浮动，而且使用浮动后还需要清除浮动的操作。

    ```html
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>

      <style>
        span {
          float: left;
      }
    </style>
    ```

  2. 由于“行内元素之间产生的间距，是由于换行符、tab(制表符)、空格等字符引起，而<u>字符的大小是定义字体大小来控制</u>。” 所以我们可以控制父级元素的字符大小来去除空格。

    ```html
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
      </div>

      <style>
        div{
          font-size: 0; /* 所有浏览器 */
          *word-spacing:-1px;/* 使用word-spacing 修复 IE6、7 中始终存在的 1px 空隙，减少单词间的空白（即字间隔） */
        }
        span {
          font-size: 16;
          letter-spacing: normal;/* 设置字母、字间距为0 */
          word-spacing: normal; /* 设置单词、字段间距为0 */
        }
    </style>
    ```

    经过测试后，可发现设置font-size:0并不能使得换行符、tab(制表符)、空格等在所有浏览器中产生的额外间距消失：IE6、7浏览器始终存在的 1px 空隙。

    针对IE6、7浏览器，使用word-spacing 修复 IE6、7 中始终存在的 1px 空隙，减少单词间的空白（即字间隔 ` *word-spacing:-1px; `