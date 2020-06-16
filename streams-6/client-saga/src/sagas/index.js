import { put, takeLatest, all } from 'redux-saga/effects';

import streams from '../apis/streams';
import {
  FETCH_STREAMS_REQUEST,
  FETCH_STREAM_REQUEST,
  UPDATE_STREAM_REQUEST,
  CREATE_STREAM_REQUEST,
  CREATE_STREAM_SUCCESS
} from '../actions/types';
import { receivedStreams, receivedStream, updatedStream } from '../actions/streams';
import history from '../history';

function* fetchStreams() {
  const response = yield streams.get('/streams');

  yield put(receivedStreams(response.data));
}

function* fetchStream({ payload }) {
  const response = yield streams.get(`/streams/${payload}`);

  yield put(receivedStream(response.data))
}

function* editStream({ payload }) {
  const { id, formValues } = payload;
  const response = yield streams.patch(`/streams/${id}`, formValues);

  yield put(updatedStream(response.data))
}

function* createStream({ payload }) {
  const { formValues, userId } = payload;
  const response = yield streams.post('/streams', {...formValues, userId });

  yield put({ type: CREATE_STREAM_SUCCESS, payload: response.data });
  yield history.push('/streams')
}

function* actionWatcher() {
  yield takeLatest(FETCH_STREAMS_REQUEST, fetchStreams);
  yield takeLatest(FETCH_STREAM_REQUEST, fetchStream);
  yield takeLatest(UPDATE_STREAM_REQUEST, editStream);
  yield takeLatest(CREATE_STREAM_REQUEST, createStream);
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}
