# HTML  问题答案

> 下面所有的代码都是个人作答，可能存在理解错误或者答案错误的地方，欢迎大家
> 在[项目下方](https://github.com/springHyc/InterviewLibrary)或
> 者[项目的 issues](https://github.com/springHyc/InterviewLibrary/issues)中留言
> 指正。

## 1. 下面代码中，在浏览器上显示为什么会有空格？

```html
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</div>
```

显示结果：`1 2 3`，为什么会有空格 ?

* 原因：

  > 行内元素之间产生的间距，是由于换行符、tab( 制表符 )、空格等字符引起，而字符
  > 的大小是定义字体大小来控制。（不论空格、换行符、tab 有几个，都显示一个空格）

  三个`span`标签之间都有换行符，而 “ 行内元素之间的空格相当于块级元素的回车换行
  ” 所以会在输出时，显示空格。

* 解决办法

  1. 可以使用浮动来去除空格。

  > 不可否认，使用浮动技术是比较好的办法，实际工作中我们使用浮动也是比较多，但是
  > 也并不是每处地方都要使用浮动，而且使用浮动后还需要清除浮动的操作。

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

  2. 由于 “ 行内元素之间产生的间距，是由于换行符、tab( 制表符 )、空格等字符引起
     ，而<u>字符的大小是定义字体大小来控制</u>。” 所以我们可以控制父级元素的字符
     大小来去除空格。

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

经过测试后，可发现设置 font-size:0 并不能使得换行符、tab( 制表符 )、空格等在所有
浏览器中产生的额外间距消失：IE6 、 7 浏览器始终存在的 1px 空隙。

针对 IE6、7 浏览器，使用 word-spacing 修复 IE6、7 中始终存在的 1px 空隙，减少 单
词间的空白（即字间隔 `*word-spacing:-1px;`

* 相关：

> 行内元素的高度由其内容撑开，**不可显示的设置其高度**，这就是为什么我们一次次的
> 在 span 上设置 height 属性不好使的原因。

## 2. HTML 语义化是什么？

## 3. 为什么要进行 HTML 的语义化？

## 4. 写 HTML 代码时应注意什么？

* 尽可能少的使用无语义的标签。例如`div`,`span`
* 在语义不明显时，既可以使用`div`又可以使用`P`的时候，尽量使用`P`，因为`P`在默认
  情况下有上下间距，对兼容特殊终端有利
* 不要使用纯样式标签，例如：`b,font,u`, 该用 CSS 设置
* 需要强调的文本，可以包含在 strong 或 em 标签中（浏览器预设样式，能用 CSS 指定
  就不用它们）， strong 默认样式是加粗（不要用 b）， em 是斜体（不用 i）
* 使用表格时，标题要用 caption，表头用 thead，主体部分用 tbody 包围，尾部用
  tfoot 包围。表头和一般单元格要区分开，表头用 th，单元格用 td
* 表单域要用 fieldset 标签包起来，并用 legend 标签说明表单的用途
* 每个 input 标签对应的说明文本都需要使用 label 标签，并且通过为 input 设置 id
  属性，在 lable 标签中设置 for=someld 来让说明文本和相对应的 input 关联起来

> 备注 :
> [HTML5 语义元素](https://www.w3cschool.cn/html5/html5-semantic-elements.html)

## 5. 块级元素有哪些？

## 6. 行内元素有哪些？

## 7. 行内块级元素有哪些？

## 8. 行内元素和块级元素的具体区别是什么？行内元素的 padding 和 margin 可以设置吗？

### 块级元素的特性

* 总是在新行上开始，占据一整行，而且其后的元素也会另起一行显示
* 宽度 (width)、高度 (height)、内边距 (padding) 和外边距 (margin) 都可控制
* 宽带始终是与浏览器宽度一样，与内容无关
* 它可以容纳内联元素和其他块元素

### 行内元素的特性

* 和相邻的内联元素在同一行
* 宽度 (width)、高度 (height)、内边距的 top/bottom(padding-top/padding-bottom)
  和外边距的 top/bottom(margin-top/margin-bottom) 都不可改变（也就是 padding 和
  margin 的 left 和 right 是可以设置的），就是里面文字或图片的大小
* 宽度只与内容有关
* 行内元素只能容纳文本或者其他行内元素

## 9. 那么问题来了，浏览器还有默认的天生 inline-block 元素（拥有内在尺寸，可设置高宽，但不会自动换行），有哪些？( 行内块级元素 )

* `<input>`
* `<img>`
* `<button>`
* `<texterea>`
* `<label>`
