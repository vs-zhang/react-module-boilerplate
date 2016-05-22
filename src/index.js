import React from 'react';
import ReactDOM from 'react-dom';
import * as todos from './modules/todos'
import { Provider } from 'react-redux'
import * as main from './modules/main'
import { createStore, applyMiddleware } from 'redux'
import { DevTools, enhancer } from './utils/devtools'

const store = createStore(main.reducer, {}, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <main.Container />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
);
