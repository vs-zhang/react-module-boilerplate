import React from 'react';
import ReactDOM from 'react-dom';
import * as todos from './modules/todos'
import { Provider } from 'react-redux'
import Root from './modules/Root/index'
import { createStore, applyMiddleware } from 'redux'
import configureStore from './utils/store/configureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);
