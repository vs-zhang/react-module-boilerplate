import React from 'react'
import { combineReducers } from 'redux'
import * as todos from '../todos'

if (module.hot) {
  module.hot.accept()
}

const reducer = combineReducers({
  [todos.name]: todos.reducer
});

class Container extends React.Component {
  render() {
    return (
      <div>
        <h3>Todos app</h3>
        <todos.TodoListComponent />
      </div>
    )
  }
}

export {reducer, Container}