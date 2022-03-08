import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootRouter from './root-reducer';

const middlewares = [logger];

const store = createStore(rootRouter, applyMiddleware(...middlewares));

export default store;
