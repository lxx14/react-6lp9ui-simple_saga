import { all, fork } from 'redux-saga/effects';
import { WatcherSaga } from './saga.js'

export default function* index() {
  yield all([
    fork(WatcherSaga),
  ]);
}