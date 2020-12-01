<!--
 * @Description:
 * @Date: 2020-12-01 09:40:45
 * @LastEditors: gengzhong
 * @LastEditTime: 2020-12-01 09:54:54
-->

#### 安装和运行

npm i && npm start
执行完毕后打开http://localhost:1234

### 知识点整理

#### useState

##### 介绍:

useState 的出现是 ：useState 是允许你在 React 函数组件中添加 state 的 Hook 简单的讲就是：可以让你在在函数组件里面使用 class 的 setState.

##### 使用:

useState 接受一个参数，返回了一个数组.

```js
// 使用es6解构赋值，useState(0)的意思是给count赋予初始值0
// count是一个状态值，setCount是给这个状态值进行更新的函数
const [count, setCount] = useState(0);
```

##### 注意点

useState 的初始值,只在第一次有效.
详情看 02-useState 注意点.jsx
