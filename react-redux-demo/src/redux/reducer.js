import { combineReducers } from 'redux'

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from "./actions"

// 初始化 state 树
// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: []
// }

const { SHOW_ALL } = VisibilityFilters

// 拆分函数，抽取公共部分
function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [ ...state, {
        text: action.text,
        completed: false
      }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {  // 可以使用帮助类 React-addons-update, updeep
        if(index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

// 专门管理一个 对象
function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}


// reducer 纯函数, 返回的是state
// function todoApp(state = initialState, action) {
//   // switch(action.type) {
//   //   case SET_VISIBILITY_FILTER:
//   //     return Object.assign({}, state, { // 不要修改state
//   //       visibilityFilter: action.filter
//   //     })
//   //   case ADD_TODO:
//   //     return Object.assign({}, state, {
//   //       todos: todos(state.todos, action)
//   //     })
//   //   case TOGGLE_TODO:
//   //     return Object.assign({}, state, {
//   //       todos: todos(state.todos, action)
//   //     })
//   //   default:
//   //     return state
//   // }
//   return { // 这算没有修改 state 吗
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp