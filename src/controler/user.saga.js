// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import { fetchUsersList } from '../api/api';

// function* FetchUsersList() {
//     try {
//       const users = yield call(fetchUsersList);
//       console.log(users,'users---------');
//       yield put({ type: 'RECEIVE_USERS', users });
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   export default function* rootSaga() {
//     yield takeEvery('REQUEST_USERS', FetchUsersList);
//   }

import {call, put, takeLatest} from 'redux-saga/effects';

import { fetchUsersList } from '../api/api';
import { REQUEST_USERS, getUserSuccess, getUserFail } from './user.action';
import { sendNetworkFail } from '../api/actions';

export function* watchGetStatus() {
  yield takeLatest(REQUEST_USERS, handleGetStatus);
}

function* handleGetStatus() {
  const response = yield call(fetchUsersList, '');
  let code = null
  if (response.data != null){
    code = response.data.results;
  }
  if(code?.length > 0){
    yield put(getUserSuccess(code));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR' && response.problem !== 'SERVER_ERROR') {
      var message = response.problem;
      if (response.data != null){
         message = response.data.message;
     }
      yield put(getUserFail(message));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getUserFail(response.problem));
    }
  }
}