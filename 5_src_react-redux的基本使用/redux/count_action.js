// 为Count组件生成action对象
import {ADD,SUB} from './constant'
export const createIncrementAction=data=>({type:ADD,data})
export const createDecrementAction=data=>({type:SUB,data})
export const createIncrementAsyncAction = (data,time)=>{
  // 所谓的异步action 就是指action返回的是函数
  // 异步action中一般都会调用同步action
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(createIncrementAction(data))
    },time)
  }
}