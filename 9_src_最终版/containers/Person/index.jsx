import React, { Component } from 'react'
import {connect} from 'react-redux'
import {nanoid} from 'nanoid'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {
  addPerson = ()=>{
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj={id:nanoid(),name,age}
    console.log(personObj)
    this.props.addPerson(personObj)
    this.nameNode.value=''
    this.ageNode.value=''
  }
  render() {
    return (
      <div>
        <h1>我是Person组件,求和为：{this.props.count}</h1>
        <input ref={c=>this.nameNode=c} placeholder='输入姓名'></input>
        <input ref={c=>this.ageNode=c} placeholder='输入年龄'></input>
        <button onClick={this.addPerson}>添加</button>
        {
          this.props.persons.map(p=>{
            return <li key={p.id}>{`姓名${p.name}---年龄${p.age}---`}</li>
          })
        }
      </div>
    )
  }
}

// connect(mapStateToProps,mapDispatchToProps)(组件名)连接redux和组件
export default connect(
  state=>({//映射状态
    persons:state.persons,
    count:state.count}),
  {
    addPerson
  }
)(Person)
