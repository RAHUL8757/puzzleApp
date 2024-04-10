import {all} from 'redux-saga/effects';
import {watchGetStatus} from '../controler/user.saga';

export default function* rootSaga() {
  yield all([watchGetStatus()]);
}
