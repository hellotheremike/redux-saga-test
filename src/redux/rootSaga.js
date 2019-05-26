import { all } from 'redux-saga/effects';
import profilesSagaWatcher from '../modules/ProfilesList/saga';

export default function* rootSaga() {
    yield all([
        profilesSagaWatcher(),
    ]);
}
