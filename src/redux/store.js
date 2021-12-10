import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { setLocalStorage } from '@utils/localStorage';
import rootReducer from './reducers';

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  setLocalStorage('store', store.getState().favorites);
});

export default store;
