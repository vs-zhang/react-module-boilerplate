import { createStore } from 'redux';
import * as main from '../../modules/main/index'

export default function configureStore() {
  return createStore(main.reducer, {});
}