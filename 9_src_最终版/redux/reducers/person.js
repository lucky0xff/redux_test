import {ADD_PERSON} from '../constant'

const initState=[{id:'001',name:'tom',age:'18'}]
// 本质是一个函数 接收两个参数 第一个是preState 一个是action
export default function addPersons(preState=initState,action){
  // 解构赋值 取出action中的type和data
  const {type,data} = action
  switch (type) {
    case ADD_PERSON:
      // 把新的data加到preState数组前
      return [data,...preState] 
    default:
      return initState
  }
}