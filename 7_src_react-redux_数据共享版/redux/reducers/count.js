// 用于创建为Count组件服务的reducer reducer本身是一个函数
// 函数接收两个参数 之前的状态(preState)，动作对象(action)
import {ADD,SUB} from '../constant'
const initState = 0   //初始值
export default function countReducer(preState=initState,action){
  const {type,data} = action
  switch (type) {
    case ADD:
      return preState + data
    case SUB:
      return preState - data
    default://初始化
      return preState
  }
}