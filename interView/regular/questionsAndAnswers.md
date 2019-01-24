# 正则表达式  问题答案

> 下面所有的代码都是个人作答，可能存在理解错误或者答案错误的地方，欢迎大家在[项目下方](https://github.com/springHyc/InterviewLibrary)或者[项目的 issues](https://github.com/springHyc/InterviewLibrary/issues)中留言指正。

## 1. 将下面的字符串，每隔三个字符添加一个空格。

```js
var string = "seregesbgfsert";
```

> 看到这道题目的时候，首先想到的解决办法应该是正则表达式，如果是数组的操作那就错了。

> 个人答案

```shell
> string.replace(/(\w{4})/g, "$1 ");
< "wefe trsb dfrh y"
```

## 2. 写一个函数验证手机号合法性

```js
var num = "15010585812";
/^1\d{10}$/.test(num);

// 目前手机号码的范围是
/^1[3|4|5|7|8][0-9]{9}$/;
```

## 3. 写一个函数，将 URL 参数转换为对象返回（考虑参数有小数点的情况）

```js
function fn(url) {
  var obj = {};
  var params = url.match(/([\?|&|]\w*=[\w\.]*)/g).map(str => str.slice(1));
  params.map(item => {
    var arr = item.split("=");
    obj[arr[0]] = arr[1];
  });
  return obj;
}
var url = "http://www.baidu.com/login?username=hehe&password=123456&num=12.4";
console.log(fn(url));
// 结果
{
  num: "12.4",
  password: "123456",
  username: "hehe"
}
```

## 4. 写一个 email 的验证(搜狗)

`/^[\w|\d|-|_|\.]+@[\d|\w|-]+(\.[\w|\d|-]+)*\.[\w|\d]{2,6}$/.test("515020385@qq.com")`

> 规则：
>
> - 开头是字母（a-zA-Z）或者数字、中划线、下划线或者是点
> - @后可以是字母、数组或者中划线

## 5. 校验填入的内容只能为汉字、数字和字母

`/^[\u4e00-\u9fa50-9a-zA-Z]*$/.test('123木头人er')`

## 6. 校验数字

`/^[0-9]+(.[0-9]+)?$/.test()`

## 7. 移除字符串首尾空白

`str.replace(/^\s+|\s+$/, "");`

> 去除字符串中的所有空白`str.replace(/\s+/g, "");`
