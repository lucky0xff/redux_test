// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action.js'
import React, { Component } from 'react'

class Count extends Component {
  state={}
  add=()=>{
    const {value} = this.selectedNumber
    this.props.jia(value*1)
  }
  sub=()=>{
    const {value} = this.selectedNumber
    this.props.jian(value*1)
  }
  addOddNum=()=>{
    const {value} = this.selectedNumber
    if (this.props.count % 2 !==0) {
      this.props.jia(value*1)
    }
  }
  addAsyncNum=()=>{
    const {value} = this.selectedNumber
    this.props.jiaAsync(value*1,1000)
  }
  
  render() {
    // console.log('111:',this.props)
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state =>({count:state}),
  // mapDispatchToPros的一般写法
  // dispatch =>({
  //     jia:data => dispatch(createIncrementAction(data)),
  //     jian:data => dispatch(createDecrementAction(data)),
  //     jiaAsync:(data,time) => dispatch(createIncrementAsyncAction(data,time))
  //   })

  // mapDispatchToPros的简写
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction,
  }
)(Count)