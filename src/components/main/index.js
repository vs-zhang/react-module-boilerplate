import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as todoList from '../todoList'
import * as weather from '../weather'
import * as news from '../news'

if(module.hot) {
  module.hot.accept()
}

const reducer = combineReducers({
  [todoList.name]: todoList.reducer,
  [weather.name]: weather.reducer,
  [news.name]: news.reducer,
  routing: routerReducer
})

export { reducer }
