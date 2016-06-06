import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import reducer from '../reducers';

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools()
  );

  return createStore(reducer, initialState, enhancer);
}
