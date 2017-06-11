# callback 回调函数

>以下内容借鉴老鸟的经验和知识，精髓的总结

*一句话 对于以后研究node 和那些热门的前端框架  很有帮助。如果你看过这个文章 对于你来说 质的突变。

*理解javascript中的回调函数(`callback`)，希望对你有所帮助。

*在JavaScrip中，function是内置的类对象，也就是说它是一种类型的对象，和其它String、Array、Number、Object类的对象一样用于内置对象的管理。

*function实际上是一种对象，它可以“存储在变量中，通过参数传递给(别一个)函数(function)，在函数内部创建，从函数中返回结果值”。

*函数式编程最主要的技术之一就是回调函数，实现回调函数就像传递一般的参数变量一样简单。

#### 那么第一个问题来了，什么是回调？

*回调函数被认为是一种高级函数，一种被作为参数传递给另一个函数(在这称作`otherFunction`)的高级函数。回调函数会在`otherFunction`内被调用(或执行)。

*回调函数的本质是一种模式(一种解决常见问题的模式)，因此回调函数也被称为回调模式。

>如下列子

```html
var colors=[ 'red', 'yellow', 'blue', 'green'];
colors.forEach(function(color,i){
	console.log( i + 1 + '.' + color)// 1.red, 2.yellow, .blue, 4.green
})
```
这里我们传递一个匿名函数给`foreach`方法，作为`foreach`的参数，传递了一个匿名的函数作为参数给另一个函数或方法