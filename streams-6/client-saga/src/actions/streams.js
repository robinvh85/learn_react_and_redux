import streams from '../apis/streams';
import {
  CREATE_STREAM_REQUEST,
  FETCH_STREAMS_REQUEST,
  FETCH_STREAM_REQUEST,
  DELETE_STREAM,
  UPDATE_STREAM_REQUEST
} from './types';

export const createStream = (formValues, userId) => (
  {
    type: CREATE_STREAM_REQUEST,
    payload: { formValues, userId }
  }
);

export const fetchStreams = () => (
  {
    type: FETCH_STREAMS_REQUEST
  }
);

export const fetchStream = (id) => (
  {
    type: FETCH_STREAM_REQUEST,
    payload: id
  }
);

export const editStream = (id, formValues) => (
  {
    type: UPDATE_STREAM_REQUEST,
    payload: { id, formValues }
  }
);

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id })
}
