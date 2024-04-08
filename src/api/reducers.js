import { combineReducers } from 'redux';
import { getUserReducer } from "../controler/user.reducer";


import { CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL } from './actions';

const initialState = { isLoading: false, data: null, err: null };

const sendNetworkFail = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NETWORK_FAIL:
      return {
        err: action.payload.err,
      };
    case CLEAR_NETWORK_FAIL:
      return {
        err: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ sendNetworkFail, getUserReducer});
export default rootReducer;
