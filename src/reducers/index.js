// // Set up your root reducer here...
//  import { combineReducers } from 'redux';
//  export default combineReducers;

import { combineReducers } from 'redux';
import userReducer from './userListReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  users: userReducer,
  routing: routerReducer
});

export default rootReducer;