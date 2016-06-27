const initialState = [
  {isDone: false, name: 'React'},
  {isDone: false, name: 'Redux'},
  {isDone: false, name: 'React CSS Module'},
  {isDone: false, name: 'Webpack'}
]

import { ADD } from './action_types'
import { CHANGE_STATUS } from './action_types'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {name: action.text, isDone: false}]
    case CHANGE_STATUS:
      var newState = [...state]
      newState[action.index].isDone = !newState[action.index].isDone
      return newState
    default:
      return state
  }
}
