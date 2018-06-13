# 正则表达式

> 该文档存放的只是 HTML 部分的问题，其中答案部分放在对应目录下的 questionsAndAnswers.md 文件中，答案部分也只是个人所做的答案，可能存在不正确的地方，欢迎大家共同讨论，找出一个完美的答案。

> 希望大家能够多学一点知识，能够对面试有所有帮助。

## 1. 将下面的字符串，每隔三个字符添加一个空格。

```js
var string = "seregesbgfsert";
```

## 2. 写一个函数验证手机号合法性

```js
var num = "15010585812";
/^1\d{10}$/.test(num);

// 目前手机号码的范围是
/^1[3|4|5|7|8][0-9]{9}$/;
```

## 3. 写一个函数，将 URL 参数转换为对象返回

```js
function fn(url) {
  var obj = {};
  var params = url.match(/([\?|&|]\w*=\w*)/g).map(str => str.slice(1));
  params.map(item => {
    var arr = item.split("=");
    obj[arr[0]] = arr[1];
  });
  return obj;
}
var url = "http://www.baidu.com/login?username=hehe&password=123456";
console.log(fn(url));
// 结果
{
  password: "123456",
  username: "hehe"
}
```
