import { applyMiddleware, compose, createStore } from 'redux';
import { mainReducer } from './../Redux/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../Sagas/index'

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middlewares = [
    sagaMiddleware
];

window.__REDUX_DEVTOOLS_EXTENSION__ = window.__REDUX_DEVTOOLS_EXTENSION__ || {};

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  mainReducer,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;