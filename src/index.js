import React from 'react';
import ReactDOM from 'react-dom';
import * as todos from './modules/todos'
import { Provider } from 'react-redux'
import RootComponent from './modules/Root/Root'
import { createStore, applyMiddleware } from 'redux'
import configureStore from './utils/store/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <RootComponent />
    </div>
  </Provider>,
  document.getElementById('app')
);
