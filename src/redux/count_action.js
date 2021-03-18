// 为Count组件生成action对象
import {ADD,SUB} from './constant'
export const createIncrementAction=data=>({type:ADD,data})
export const  createDecrementAction=data=>({type:SUB,data})