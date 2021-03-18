import React, { Component } from 'react'

export default class Count extends Component {
  state={num:0}
  add=()=>{
    const {value} = this.selectedNumber
    const {num} = this.state
    this.setState({num:num+value*1})
  }
  sub=()=>{
    const {value} = this.selectedNumber
    const {num} = this.state
    this.setState({num:num-value*1})
  }
  addOddNum=()=>{
    const {value} = this.selectedNumber
    const {num} = this.state
    if(num%2!==0) this.setState({num:num+value*1})
  }
  addAsyncNum=()=>{
    const {value} = this.selectedNumber
    const {num} = this.state
    setTimeout(()=>{this.setState({num:num+value*1})},500)
  }
  
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.num}</h1>
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
