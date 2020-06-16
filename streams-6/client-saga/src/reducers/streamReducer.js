import _ from 'lodash';

import {
  CREATE_STREAM_SUCCESS,
  DELETE_STREAM,
  FETCH_STREAMS_SUCCESS,
  FETCH_STREAM_SUCCESS,
  UPDATE_STREAM_SUCCESS
} from '../actions/types';

export default (state ={}, action) => {
  switch (action.type) {
    case FETCH_STREAMS_SUCCESS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM_SUCCESS:
      console.log("CREATED_STREAM", action)
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
