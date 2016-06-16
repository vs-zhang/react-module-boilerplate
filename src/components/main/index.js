import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as todoList from '../todoList'
import * as weather from '../weather'

const reducer = combineReducers({
  [todoList.name]: todoList.reducer,
  [weather.name]: weather.reducer,
  routing: routerReducer
})

export { reducer }
