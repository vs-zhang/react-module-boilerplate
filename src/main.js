import React from 'react'
import ReactDOM from 'react-dom'
import './style/app.scss'
import { AppLayout } from './Layouts/App/App'

import configureStore from './utils/store/configureStore'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const store = configureStore()
const root = document.getElementById('app')
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <AppLayout store={store} history={history} />,
  root
)

if (module.hot) {
  module.hot.accept('./Layouts/App/App', () => {
    /* eslint-disable global-require */
    const NewAppLayout = require('./Layouts/App/App').AppLayout
    /* eslint-enable global-require */
    ReactDOM.render(
      <NewAppLayout store={store} history={history} />,
      root
    )
  })
}
