export const initialState = ['React', 'Redux', 'React CSS Module', 'Webpack']
import { ADD } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.text]
    default:
      return state
  }
}
