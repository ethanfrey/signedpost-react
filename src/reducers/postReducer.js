import initialState from './initialState';
import {FETCH_POSTS_SUCCESS} from '../constants/actionTypes';

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      // just replace the old version
      return Object.assign({}, state, {[action.payload.account]: action.payload.items});
    default:
      return state;
  }
}
