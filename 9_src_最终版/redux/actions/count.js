// 为Count组件生成action对象
import {ADD,SUB} from '../constant'
export const increment=data=>({type:ADD,data})
export const decrement=data=>({type:SUB,data})
export const incrementAsync = (data,time)=>{
  // 所谓的异步action 就是指action返回的是函数
  // 异步action中一般都会调用同步action
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(increment(data))
    },time)
  }
}