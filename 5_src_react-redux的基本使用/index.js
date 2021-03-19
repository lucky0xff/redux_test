import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

// 检测redux的状态 只要变化就调用render
// DOM的diff算法
store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'))
})

ReactDOM.render(<App/>,document.getElementById('root'))