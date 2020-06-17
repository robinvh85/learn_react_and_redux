import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_STREAMS_REQUEST,
  FETCH_STREAMS_SUCCESS,
  FETCH_STREAM_REQUEST,
  UPDATE_STREAM_REQUEST,
  UPDATE_STREAM_SUCCESS,
  FETCH_STREAM_SUCCESS,
  CREATE_STREAM_REQUEST,
  CREATE_STREAM_SUCCESS
} from '../actions/types';

import history from '../history';

function* fetchStreams() {
  const response = yield axios.get('/streams');

  yield put({ type: FETCH_STREAMS_SUCCESS, payload: response.data });
}

function* fetchStream({ payload }) {
  const response = yield axios.get(`/streams/${payload}`);

  yield put({ type: FETCH_STREAM_SUCCESS, payload: response.data })
}

function* editStream({ payload }) {
  const { id, formValues } = payload;
  const response = yield axios.patch(`/streams/${id}`, formValues);

  yield put({ type: UPDATE_STREAM_SUCCESS, payload: response.data });
}

function* createStream({ payload }) {
  const { formValues, userId } = payload;
  const response = yield axios.post('/streams', {...formValues, userId });

  yield put({ type: CREATE_STREAM_SUCCESS, payload: response.data });
  yield history.push('/streams');
}

export default function* actionWatcher() {
	yield takeLatest(FETCH_STREAMS_REQUEST, fetchStreams);
  yield takeLatest(FETCH_STREAM_REQUEST, fetchStream);
  yield takeLatest(UPDATE_STREAM_REQUEST, editStream);
  yield takeLatest(CREATE_STREAM_REQUEST, createStream);
};
