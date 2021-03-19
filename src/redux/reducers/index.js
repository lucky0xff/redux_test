// 该文件用于汇总所有的reducer
// 引入为count服务的reducer
import {combineReducers} from 'redux'
import count from './count'
import persons from './person'

// 汇总所有的reducer
export default combineReducers({
  count,
  persons
})