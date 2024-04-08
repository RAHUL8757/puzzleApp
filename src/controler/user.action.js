export const REQUEST_USERS = 'REQUEST_USERS';
export const REQUEST_USERS_SUCCESS = 'REQUEST_USERS_SUCCESS';
export const REQUEST_USERS_FAIL = 'REQUEST_USERS_FAIL';

export const getUserRequest = () => {
  return {type: REQUEST_USERS, payload: ''};
};
export const getUserSuccess = (data) => {
  return {type: REQUEST_USERS_SUCCESS, payload: data};
};
export const getUserFail = (err) => {
  return {type: REQUEST_USERS_FAIL, payload: {err}};
};