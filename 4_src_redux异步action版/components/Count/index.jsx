import React, { Component } from 'react'
// 用于获取redux中保存的数据
import store from '../../redux/store'
// 引入actionCreator 用于创建action对象
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'
export default class Count extends Component {
  // num交给redux了就可以不写了 但是可以写自己用的东西
  state={}

  // componentDidMount(){
  //   // 检测redux的状态 只要变化就调用render
  //   store.subscribe(()=>{
  //    this.setState({})
  //   })
  // }
  
  add=()=>{
    const {value} = this.selectedNumber
    // 通知redux加value
    // store.dispatch({type:'add',data:value*1})
    store.dispatch(createIncrementAction(value*1))
  }
  sub=()=>{
    const {value} = this.selectedNumber
    // 通知redux加value
    // store.dispatch({type:'sub',data:value*1})
    store.dispatch(createDecrementAction(value*1))
  }
  addOddNum=()=>{
    const {value} = this.selectedNumber
    const count = store.getState()
    if (count%2===1) store.dispatch(createIncrementAction(value*1))
  }
  addAsyncNum=()=>{
    const {value} = this.selectedNumber
    // setTimeout(()=>{
      store.dispatch(createIncrementAsyncAction(value*1,500))
    // },500)
    
  }
  
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c=>this.selectedNumber = c}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.sub}>-</button>
        <button onClick={this.addOddNum}>当前求和为奇数再加</button>
        <button onClick={this.addAsyncNum}>异步加</button>
      </div>
    )
  }
}
