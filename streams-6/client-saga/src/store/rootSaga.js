import { all } from 'redux-saga/effects';
import streams from './streams/saga';

export default function* rootSaga() {
  yield all([
    streams()
  ]);
}
