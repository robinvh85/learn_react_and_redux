import { combineReducers } from 'redux';
import auth from './auth/reducer';
import streams from './streams/reducer';

export default combineReducers({
  auth,
  streams
});
