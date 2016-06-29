import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as todoList from '../todoList'
import * as weather from '../weather'
import * as news from '../news'
import * as mbta from '../mbta'

if(module.hot) {
  module.hot.accept()
}

const reducer = combineReducers({
  [todoList.name]: todoList.reducer,
  [weather.name]: weather.reducer,
  [news.name]: news.reducer,
  [mbta.name]: mbta.reducer,
  routing: routerReducer
})

export { reducer }
