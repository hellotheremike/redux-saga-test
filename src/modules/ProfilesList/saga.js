import {
    take, put, call, throttle, select,
} from 'redux-saga/effects';
import * as t from './constants';

import getUsersService from './services/getUsersService';
import { setUsers, setError } from './actions';


// Selectors
const getTimestamp = state => state.profiles.apiLoadTimestamp;

// Actions
function* getUsersAction() {
    // Try loading a failed resource 3 times
    for (let i = 0; i < 3; i++) {
        try {
            yield put({ type: t.PROFILES_LOAD_START });

            const timestamp = yield select(getTimestamp);
            const { users, list } = yield call(getUsersService, timestamp);

            yield put({ type: t.PROFILES_LOAD_COMPLETE });
            yield put(setUsers(users, list));

            return true;
        } catch (e) {
            // Error
        }
    }

    // If load failes, set error
    yield put(setError('Failed to load 3 times'));
}


// Watcher
export default function* profilesSagaWatcher() {
    // Make sure profile is initiated
    yield take(t.PROFILES_INIT);

    // Throttle api action to onyl be called once evey 5 sek
    yield throttle(5000, t.PROFILES_LOAD, getUsersAction);
}
