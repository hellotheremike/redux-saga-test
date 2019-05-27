import {
    take, put, call, throttle, select,
} from 'redux-saga/effects';
import * as t from './constants';

import getUsersService from './services/getUsersService';
import { setUsers, setError } from './actions';

// // Selectors
const getTimestamp = state => state.profiles.apiLoadTimestamp;

//  Actions
function* getUsersAction() {
    yield put({ type: t.PROFILES_LOAD_START });

    const timestamp = yield select(getTimestamp);
    const { response, error } = yield call(getUsersService, timestamp);

    if (response) {
        const { users, list } = response;
        yield put({ type: t.PROFILES_LOAD_COMPLETE });
        yield put(setUsers(users, list));
    }

    if (error) {
        yield put(setError(error.message));
    }
}

// Retry 3 times if failed
// function* getUsersAction() {
//     // Try loading a failed resource 3 times
//     for (let i = 0; i < 3; i++) {
//         try {
//             yield put({ type: t.PROFILES_LOAD_START });

//             const timestamp = yield select(getTimestamp);
//             const { response } = yield call(getUsersService, timestamp);
//             const { users, list } = response;

//             yield put({ type: t.PROFILES_LOAD_COMPLETE });
//             yield put(setUsers(users, list));

//             return true;
//         } catch (e) {
//             // Error
//         }
//     }

//     // If load failes, set error
//     yield put(setError('Failed to load 3 times'));
// }

function* crashingSaga() {
    throw new Error('This error will crash this saga!');
}

// Watchers
function* getUserWatcher() {
    yield take(t.PROFILES_INIT);

    // Throttle api action to only be called once evey 5 sek
    yield throttle(500, t.PROFILES_LOAD, getUsersAction);
}


// Watcher
export default function* root() {
    /* Throw random error to restart saga */
    // throw new Error('This error will crash this saga');

    /* Generator that will fail and crash */
    // yield call(crashingSaga);

    /* Generator that works */

    yield call(getUserWatcher);
}
