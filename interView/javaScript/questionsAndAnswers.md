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