import { all } from 'redux-saga/effects';
import streams from './streams';

export default function* rootSaga() {
  yield all([
    streams()
  ]);
}
