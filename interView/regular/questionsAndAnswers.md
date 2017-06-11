# 正则表达式 问题答案

> 下面所有的代码都是个人作答，可能存在理解错误或者答案错误的地方，欢迎大家在[项目下方](https://github.com/springHyc/InterviewLibrary)或者[项目的issues](https://github.com/springHyc/InterviewLibrary/issues)中留言指正。

## 1. 将下面的字符串，每隔三个字符添加一个空格。

```js
var string = 'seregesbgfsert';
```

> 看到这道题目的时候，首先想到的解决办法应该是正则表达式，如果是数组的操作那就错了。

> 个人答案

``` shell
> str.replace(/(\w{4})/g, "$1 ");
< "wefe trsb dfrh y"
```