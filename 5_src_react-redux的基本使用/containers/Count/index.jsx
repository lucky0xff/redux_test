// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action.js'
// mapStateToProps函数传递状态：返回的对象的key作为传递给UI组件props的key value就作为传递给UI组件props的value
function mapStateToProps (state) {
  return {count:state}
}

// mapDispatchToProps函数传递操作方法：返回的对象的key作为传递给UI组件props的key value就作为传递给UI组件props的value
function mapDispatchToProps(dispatch) {
  return {
    jia:(data)=>{
      dispatch(createIncrementAction(data))
    },
    jian:(data)=>{
      dispatch(createDecrementAction(data))
    },
    jiaAsync:(data,time)=>{
      dispatch(createIncrementAsyncAction(data,time))
    }
  }
}
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)