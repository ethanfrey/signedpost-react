import initialState from './initialState';
import {FETCH_USERS_SUCCESS} from '../constants/actionTypes';

export default function userListReducer(state = initialState.users, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      // just replace the old version
      return action.payload.items;
    default:
      return state;
  }
}
