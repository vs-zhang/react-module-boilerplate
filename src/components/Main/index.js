import React from 'react'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as todoList from '../todoList'
import * as about from '../about'


if (module.hot) {
  module.hot.accept()
}

// TODO: fix hot reload module

const reducer = combineReducers({
  [todoList.name]: todoList.reducer,
  routing: routerReducer
});

class Container extends React.Component {
  render() {
    return (
      <div>
        <h3>Todos app</h3>
        <todoList.TodoListComponent />
      </div>
    )
  }
}

export {reducer, Container}