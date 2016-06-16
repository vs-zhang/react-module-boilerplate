import * as main from '../../components/main/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default function configureStore() {
  return createStore(main.reducer, {}, applyMiddleware(thunk))
}
