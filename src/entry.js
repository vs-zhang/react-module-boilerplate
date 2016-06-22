import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

import configureStore from './utils/store/configureStore'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const store = configureStore()
const root = document.getElementById('app')
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <App store={store} history={history} />,
  root
)

if (module.hot) {
  module.hot.accept('./App', () => {
    /* eslint-disable global-require */
    const NewApp = require('./App').App
    /* eslint-enable global-require */
    ReactDOM.render(
      <NewApp store={store} history={history} />,
      root
    )
  })
}
