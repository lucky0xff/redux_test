import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import App from './App'

ReactDOM.render(
  // Provider为了让App所有的后代组件都能接收到store
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'))
