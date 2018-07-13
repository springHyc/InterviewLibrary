# 正则表达式  问题答案

> 下面所有的代码都是个人作答，可能存在理解错误或者答案错误的地方，欢迎大家在[项目下方](https://github.com/springHyc/InterviewLibrary)或者[项目的 issues](https://github.com/springHyc/InterviewLibrary/issues)中留言指正。

## 1. 将下面的字符串，每隔三个字符添加一个空格。

```js
var string = "seregesbgfsert";
```

> 看到这道题目的时候，首先想到的解决办法应该是正则表达式，如果是数组的操作那就错了。

> 个人答案

```shell
> str.replace(/(\w{4})/g, "$1 ");
< "wefe trsb dfrh y"
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
