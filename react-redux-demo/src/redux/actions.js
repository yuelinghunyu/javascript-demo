// action 类型

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"

// 其他类型常量
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// 创建action函数,返回一个action对象

export function addTodo(text) {
  return {type: ADD_TODO, text}
}

export function toggleTodo(index) {
  return {type: TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}
