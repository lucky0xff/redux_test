// 该文件专门用于暴露store对象 整个应用只有一个store对象

// 引入createStore 用于创建store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入为count服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer,
})
// 暴露store
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))