import fetch from 'isomorphic-fetch';

import * as types from '../constants/actionTypes';
import {BASE_URL} from '../constants/config';

function requestUsers() {
  return {
    type: types.FETCH_USERS_REQUEST,
    payload: ""
  };
}

function receiveUsers(json) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    payload: json
  };
}

function userError(message) {
  return {
    type: types.FETCH_USERS_FAILURE,
    payload: message,
    error: true
  };
}

function status(response) {  
  if (response.status >= 200 && response.status < 300) {  
    return Promise.resolve(response);
  } else {  
    return Promise.reject(new Error(response.statusText));
  }  
}

// example of a thunk using the redux-thunk middleware
export function loadUsers() {
  return function (dispatch) {
    dispatch(requestUsers());

    return fetch(BASE_URL + "/accounts").
      then(status).
      then(response => response.json()).
      then(json => dispatch(receiveUsers(json))).
      catch(error => dispatch(userError(error)));
  };
}
