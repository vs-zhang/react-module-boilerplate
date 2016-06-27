import { ADD, CHANGE_STATUS } from './action_types'
import { } from './action_types'


export function addTodoAction(text) {
  return dispatch => (
    dispatch({
      type: ADD,
      text: text
    })
  )
}

export function changeTodoStatusAction(index) {
  return dispatch => (
    dispatch({
      type: CHANGE_STATUS,
      index: index
    })
  )
}
