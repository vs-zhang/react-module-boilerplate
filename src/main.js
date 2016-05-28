import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppLayout, HomeLayout, AboutLayout } from './Layouts/Main'

import configureStore from './utils/store/configureStore'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={AppLayout}>
          <IndexRoute component={HomeLayout} />
          <Route path="about" component={AboutLayout} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
)
