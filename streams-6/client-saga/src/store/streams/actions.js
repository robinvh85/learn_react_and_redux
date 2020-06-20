export const types = {
  CREATE_STREAM_REQUEST: 'CREATE_STREAM_REQUEST',
  CREATE_STREAM_SUCCESS: 'CREATE_STREAM_SUCCESS',
  FETCH_STREAMS_REQUEST: 'FETCH_STREAMS_REQUEST',
  FETCH_STREAMS_SUCCESS: 'FETCH_STREAMS_SUCCESS',
  FETCH_STREAM_REQUEST: 'FETCH_STREAM_REQUEST',
  FETCH_STREAM_SUCCESS: 'FETCH_STREAM_SUCCESS',
  UPDATE_STREAM_REQUEST: 'UPDATE_STREAM_REQUEST',
  UPDATE_STREAM_SUCCESS: 'UPDATE_STREAM_SUCCESS',
  DELETE_STREAM: 'DELETE_STREAM'
}

export const createStream = (formValues, userId) => (
  {
    type: types.CREATE_STREAM_REQUEST,
    payload: { formValues, userId }
  }
);

export const fetchStreams = () => (
  {
    type: types.FETCH_STREAMS_REQUEST
  }
);

export const fetchStream = (id) => (
  {
    type: types.FETCH_STREAM_REQUEST,
    payload: id
  }
);

export const editStream = (id, formValues) => (
  {
    type: types.UPDATE_STREAM_REQUEST,
    payload: { id, formValues }
  }
);

// export const deleteStream = (id) => async dispatch => {
//   await streams.delete(`/streams/${id}`);
//   dispatch({ type: DELETE_STREAM, payload: id })
// }
