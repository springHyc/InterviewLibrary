# 项目经验

> 该文档存放的只是项目经验相关的问题，其中答案部分放在对应目录下的 questionsAndAnswers.md 文件中，答案部分也只是个人所做的答案，可能存在不正确的地方，欢迎大家共同讨论，找出一个完美的答案。希望大家能够多学一点知识，能够对面试有所有帮助。

## 1. angular 和 react 的区别？

## 2. 单项数据流和双向数据流区别？

## 3. ng 和 react 的脚手架有什么？

## 4. ReactNative 中调用手机的相机，是怎么个调用，是 rn -> react -> 原生，还是 rn->原生? JSBridge 用过吗？

## 5. ReactNative 中 APP 的自动更新？有两种方式。

## 6. 为什么从 angular 转到 react-native?

## 7. 遇到的 react-native 本身的性能问题有什么？

## 8. react 的生命周期，在哪个生命周期中设置 setState 不会引起重新渲染？

## 9. react 项目中的`registerServiceWorker.js`文件是做什么的？

在生产中，我们注册一个服务工作者来从本地缓存服务资产。
这使得应用程序在以后的产品访问中加载速度更快，并使其具备离线功能。但是，这也意味着开发人员(和用户)将只看到在“N+1”访问页面时部署的更新，因为以前缓存的资源在后台更新。

## 10. 你知道 react-native 中的 contex 吗？为什么不推荐使用？

## 11. react-native 中父子组件传递参数的方式？

## 12. react-native 项目中，有的组件并没有用到 React 也需要写上`import React from 'react';`知道这是为什么吗？

## 13. 一个页面图和快速的展现出来？

// -------------------打印分界线-----------------------

## 14. 遇到一个问题，该怎么去处理？

## 15. react 核心架构是什么？react 的原理是什么？

## 16. 高阶组件了解多少？

## 17. angular 中的异步与一般的异步事件有什么区别？

## 18. angular 与 ionIC 的关系?

## 19. 介绍一下你最近项目中遇到的难题？

> 我说的是 rn 中 webview 的使用

## 20. 有没有用过 native 原生的东西？ react-native 怎么调 native 的文件服务？jsbridge 怎么使用？

## 21. react-native 是怎么运行起来的？React Native 是怎么在 Android /ios 上跑起来的？

## 22. react-native 对于手机版本有要求吗?ios8 有什么特点吗？

- Android >= 4.1 (API 16)
- iOS >= 7.0

## 23. 你们用的版本 react 是什么版本？有关注过 16.0 有什么新特性吗？

## 25. 说一下 react 的生命周期;shouldUpdate 生命周期中有什么比较数据的好的方法吗？

生命周期图；

其中在 componentWillMount、componentDidMount 和 componentWillReceiveProps 三个生命周期中进行 setState 不会引起重新渲染。

shouldComponentUpdate 生命周期默认返回 true。
实际效果却是每个组件都完成 re-render 和 virtual-DOM diff 过程，虽然组件没有变更，这明显是一种浪费。react 的性能瓶颈主要表现在：对于 props 和 state 没有变化的组件，react 也要重新生成虚拟 DOM 及虚拟 DOM 的 diff。
这个时候，就是 shouldComponentUpdate 上场的时候了。该对齐进行优化。

优化主要有：

react 在发展的不同阶段提供两套官方方案：

- PureRenderMin
- PureComponent

### PureRenderMin

一种是基于 ES5 的 React.createClass 创建的组件，配合该形式下的 mixins 方式来组合 PureRenderMixin 提供的 shouldComponentUpdate 方法。当然用 ES6 创建的组件也能使用该方案。

```js
import PureRenderMixin from 'react-addons-pure-render-mixin';
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
}
```

### PureComponent

在 React 15.3.0 版本发布的针对 ES6 而增加的一个组件基类：React.PureComponent。这明显对 ES6 方式创建的组件更加友好。

```js
import React, { PureComponent } from "react";
class Example extends PureComponent {
  render() {
    // ...
  }
}
```

它内部的 shouldComponentUpdate 方法都是浅比较(shallowCompare)props 和 state 对象的，即只比较对象的第一层的属性及其值是不是相同。

例如下面 state 对象变更为如下值：

```js
state = {
  value: { foo: "bar" }
};
```

为 state 的 value 被赋予另一个对象，使 nextState.value 与 this.props.value 始终不等，导致浅比较通过不了。在实际项目中，这种嵌套的对象结果是很常见的，如果使用 PureRenderMin 或者 PureComponent 方式时起不到应有的效果。
**虽然可以通过深比较方式来判断，但是深比较类似于深拷贝，递归操作，性能开销比较大。**
为此，可以对组件尽可能的拆分，使组件的 props 和 state 对象数据达到扁平化，结合着使用 PureRenderMin 或者 PureComponent 来判断组件是否更新，可以更好地提升 react 的性能，不需要开发人员过多关心。

## 26. 说一下 redux

- 使用 `react-redux` 中的`<Provider>`来绑定全局的一个 store;
- 使用 `react-redux` 中的`connect`来创建容器组件。

## 27. redux 是在哪儿监听数据的？怎么监听的？

- 使用`redux-saga/effects`中的`takeLates`来监听最新的 action 以及`redux-saga`中的`createSagaMiddleware`来创建监听

## 29. 涉及到 react-native 打包的问题。

### 29.1 react-native 是怎么打包的？（iOS 和 android）打包加载是什么？里面的路径是什么？

### 29.2 打包后的文件有看过吗？资源代码和逻辑代码是什么？

### 29.3 涉及到 webview 的话，有静态的 html 文件的话，版本管理是怎么实现的？怎么更新？每个页面是怎么更新的？

## 30. 安卓发送一个请求怎么去走？

## 31. react 题目

```js
this.state = {
      val: 0
    };

componentDidMount() {
    this.setState({ val: this.state.val + 1 }, () => {
      console.log("A ", this.state.val);
    });
    console.log("B ", this.state.val);
    setTimeout(() => {
      console.log("C ", this.state.val);
      this.setState({ val: this.state.val + 1 }, () => {
        console.log("D ", this.state.val);
      });
      setTimeout(() => {
        console.log("E ", this.state.val);
      }, 0);
      console.log("F ", this.state.val);
    }, 0);
  }
```

> 结果：
> App.js:31 B 0
> App.js:29 A 1
> App.js:33 C 1
> App.js:35 D 2
> App.js:40 F 2
> App.js:38 E 2

## 32. rn 项目中有什么写的全局性组件？

## 33. jsx 是什么？

---

Qunar.com

## 34. AMD 与 CMD 区别

## 35. 手势密码的使用什么关键组件来开发的？

## 36. 数据是怎么存储的？

## 37. react-native 使用 redux 有没有进行存储，使用的第三方库是什么？

## 38. UI 库中的 theme 主题是怎么实现的？

## 39. 是怎么传到 createAPP 中的？

## 40. react-native 在 iOS 和 Android 上有什么区别？具体体现在哪儿？

## 41. 查看文件功能是怎么实现的？

---

## 42. 一个网页从输入网址到显示网页的全过程分析
