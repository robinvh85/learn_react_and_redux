import streams from '../apis/streams';
import {
  CREATE_STREAM_REQUEST,
  FETCH_STREAMS_REQUEST,
  FETCH_STREAMS_SUCCESS,
  FETCH_STREAM_REQUEST,
  FETCH_STREAM_SUCCESS,
  DELETE_STREAM,
  UPDATE_STREAM_REQUEST,
  UPDATE_STREAM_SUCCESS
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

export const receivedStreams = (streams) => (
  {
    type: FETCH_STREAMS_SUCCESS,
    payload: streams
  }
);

export const fetchStream = (id) => (
  {
    type: FETCH_STREAM_REQUEST,
    payload: id
  }
);

export const receivedStream = (stream) => (
  {
    type: FETCH_STREAM_SUCCESS,
    payload: stream
  }
)

export const editStream = (id, formValues) => (
  {
    type: UPDATE_STREAM_REQUEST,
    payload: { id, formValues }
  }
);

export const updatedStream = (stream) => (
  {
    type: UPDATE_STREAM_SUCCESS,
    payload: stream
  }
);

export const deleteStream = (id) => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id })
}
