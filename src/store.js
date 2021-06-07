import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import rootReducer from './reducers';

export const history = createHistory();
const middleware = [
  // thunk,
  routerMiddleware(history)
];

const createStoreWithMiddleware = compose(
  applyMiddleware(...middleware)(createStore)
);

export function configure(initialState) {
// Create the redux store and add middleware to it
  var configStore = createStoreWithMiddleware(
    rootReducer,
    initialState,
  )
  return configStore;
};