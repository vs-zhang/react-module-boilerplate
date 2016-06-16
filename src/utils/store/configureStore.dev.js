import { createStore, compose, applyMiddleware } from 'redux'
import * as main from '../../components/main/index'
import { DevTools } from '../devtools'
import { persistState } from 'redux-devtools'
import thunk from 'redux-thunk'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

const enhancer = compose(
  applyMiddleware(
    thunk
  ),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)

export default function configureStore() {
  return createStore(main.reducer, {}, enhancer)
}
