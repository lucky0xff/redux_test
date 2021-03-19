import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'))

// 检测redux的状态 只要变化就调用render
// DOM的diff算法
// store.subscribe(()=>{
//   ReactDOM.render(<App/>,document.getElementById('root'))
// })
