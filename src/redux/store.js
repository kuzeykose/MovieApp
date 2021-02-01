import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './ducks/index';
import { composeWithDevTools } from 'redux-devtools-extension'

import { createPromise } from 'redux-promise-middleware';

import thunk from "redux-thunk";

const promiseMiddleware = createPromise({ promiseTypeDelimiter: '_' });
const middlewares = [thunk, promiseMiddleware];


const composedEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

export default createStore(
  rootReducer,
  composedEnhancer
);