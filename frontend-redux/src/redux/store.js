// redux/store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'; 
import userReducer from './reducers/userReducer'; 

const rootReducer = combineReducers({
  user: userReducer,
});

const initialState = {};
const middleware = [thunk]; 

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;


