import _ from 'lodash';

import { types } from './actions';

export default (state ={}, action) => {
  switch (action.type) {
    case types.FETCH_STREAMS_SUCCESS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case types.FETCH_STREAM_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case types.CREATE_STREAM_SUCCESS:
      console.log("CREATED_STREAM", action)
      return { ...state, [action.payload.id]: action.payload };
    case types.UPDATE_STREAM_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    case types.DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
