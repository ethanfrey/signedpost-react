import fetch from 'isomorphic-fetch';

import * as types from '../constants/actionTypes';
import {BASE_URL} from '../constants/config';

function requestPosts() {
  return {
    type: types.FETCH_POSTS_REQUEST,
    payload: ""
  };
}

function receivePosts(account, json) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: {
      account,
      items: json.items
    }
  };
}

function postError(message) {
  return {
    type: types.FETCH_POSTS_FAILURE,
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
export function loadPosts(account) {
  return function (dispatch) {
    dispatch(requestPosts());

    return fetch(BASE_URL + "/accounts/" + account + "/posts").
      then(status).
      then(response => response.json()).
      then(json => dispatch(receivePosts(account, json))).
      catch(error => dispatch(postError(error)));
  };
}
