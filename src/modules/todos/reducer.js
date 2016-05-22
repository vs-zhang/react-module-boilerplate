export const initialState = ['pay oven'];
import { ADD } from './actions'
import update from 'react/lib/update'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.text];
    default:
      return state;
  }
}