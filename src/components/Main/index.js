import React from 'react'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as todoList from '../todoList'

if (module.hot) {
  module.hot.accept()
}

const reducer = combineReducers({
  [todoList.name]: todoList.reducer,
  routing: routerReducer
});

export { reducer }