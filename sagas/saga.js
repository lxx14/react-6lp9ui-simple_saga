import { call, put, delay, takeEvery } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';

import { GO_WATCHER } from '../actions';

export function* WorkerSaga() {
  try {
    console.log('hello!')
  } catch (e) {

  }
}

export function* WatcherSaga() {
  yield takeEvery(GO_WATCHER, WorkerSaga);
}