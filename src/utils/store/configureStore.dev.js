import { createStore } from 'redux';
import * as main from '../../components/main/index'
import { compose } from 'redux'
import { DevTools } from '../devtools'
import { persistState } from 'redux-devtools';

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

const enhancer = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);

export default function configureStore() {
  return createStore(main.reducer, {}, enhancer);
}