import React from 'react'
import { combineReducers } from 'redux'
import * as todoList from '../todoList'

if (module.hot) {
  module.hot.accept()
}

const reducer = combineReducers({
  [todoList.name]: todoList.reducer
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