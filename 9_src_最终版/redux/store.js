// 该文件专门用于暴露store对象 整个应用只有一个store对象

// 引入createStore 用于创建store对象
import {createStore,applyMiddleware} from 'redux'
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入汇总后的reducer
import reducer from './reducers/index'


// 暴露store
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))