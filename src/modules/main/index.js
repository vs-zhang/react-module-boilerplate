import React from 'react'
import * as todos from '../todos'
import { combineReducers } from 'redux'

export const reducer = combineReducers({
  [todos.name]: todos.reducer
});


export const Container = () => (
  <div>
    <h3>Todo app aefa</h3>
    <todos.TodoListComponent />
  </div>
);