import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { App } from './components/App'
import {Container} from './components/main'
import {AboutComponent} from './components/about'
import * as about from './components/about'
import * as home from './components/home'

import configureStore from './utils/store/configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Container}/>
          <Route path="about" component={AboutComponent}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
);
