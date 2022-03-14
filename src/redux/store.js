import { createStore } from 'redux';
// import logger from 'redux-logger';

import rootRouter from './root-reducer';

// const middlewares = [logger];

const store = createStore(
  rootRouter,
  // applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
