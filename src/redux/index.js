import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, spawn } from 'redux-saga/effects';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

function* watcher(saga) {
    while (true) {
        try {
            yield call(saga);
            break;
        } catch (error) {
            console.error('Saga crash:', error);
        }
    }
}

function* root() {
    for (let i = 0; i < rootSaga.length; i++) {
        yield spawn(watcher, rootSaga[i]);
    }
}


export default () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
            ),
        ),
    );

    sagaMiddleware.run(root);

    return store;
};
