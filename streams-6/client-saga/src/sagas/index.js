import { put, takeLatest, all } from 'redux-saga/effects';

import streams from '../apis/streams';
import {
  FETCH_STREAMS, RECEIVED_STREAMS
} from '../actions/types';

function* fetchStreams() {
  const response = yield streams.get('/streams');
  yield put({
    type: RECEIVED_STREAMS, payload: response.data
  });
}

function* actionWatcher() {
  yield takeLatest(FETCH_STREAMS, fetchStreams)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}
