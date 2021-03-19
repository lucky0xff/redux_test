import React, { Component } from 'react'

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
