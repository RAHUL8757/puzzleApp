import { 
    REQUEST_USERS, 
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_FAIL
  } from './user.action';
   const initialState = {
    isLoading: false,
    getUserData: null, 
    err: null
  };
  
  export const getUserReducer = (state = initialState, action)  => {
    switch (action.type) {
      case REQUEST_USERS:
        return {
          isLoading: true,
          getStatusData: null,
          err: null,
        };
      case REQUEST_USERS_SUCCESS:
        return  {
          isLoading: false,
          getStatusData: action.payload,
          err: null,
        };
      case REQUEST_USERS_FAIL:
        return {
          isLoading: false,
          getStatusData: null,
          err: action.payload.err,
        };
      default:
        return state;
    }
  };