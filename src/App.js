import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { CoreLayout, HomeLayout, AboutLayout } from './Layouts/Main'


export const App = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={CoreLayout}>
          <IndexRoute component={HomeLayout} />
          <Route path="about" component={AboutLayout} />
        </Route>
      </Router>
    </div>
  </Provider>
)

App.propTypes = {
  store: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
}
