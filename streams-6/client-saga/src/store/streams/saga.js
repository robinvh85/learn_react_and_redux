import { put, takeLatest } from 'redux-saga/effects';
import axios from '../../api';

import { types } from './actions';
import history from '../../history';

function* fetchStreams() {
  const response = yield axios.get('/streams');

  yield put({ type: types.FETCH_STREAMS_SUCCESS, payload: response.data });
}

function* fetchStream({ payload }) {
  const response = yield axios.get(`/streams/${payload}`);

  yield put({ type: types.FETCH_STREAM_SUCCESS, payload: response.data })
}

function* editStream({ payload }) {
  const { id, formValues } = payload;
  const response = yield axios.patch(`/streams/${id}`, formValues);

  yield put({ type: types.UPDATE_STREAM_SUCCESS, payload: response.data });
}

function* createStream({ payload }) {
  const { formValues, userId } = payload;
  const response = yield axios.post('/streams', {...formValues, userId });

  yield put({ type: types.CREATE_STREAM_SUCCESS, payload: response.data });
  yield history.push('/streams');
}

export default function* actionWatcher() {
	yield takeLatest(types.FETCH_STREAMS_REQUEST, fetchStreams);
  yield takeLatest(types.FETCH_STREAM_REQUEST, fetchStream);
  yield takeLatest(types.UPDATE_STREAM_REQUEST, editStream);
  yield takeLatest(types.CREATE_STREAM_REQUEST, createStream);
};
