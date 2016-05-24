import { createStore } from 'redux';
import * as main from '../../components/main/index'

export default function configureStore() {
  return createStore(main.reducer, {});
}