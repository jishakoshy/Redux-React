// userActions.js

import axios from 'axios';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';


export const registerUserRequest = () => ({
  type: REGISTER_USER_REQUEST,
});

export const registerUserSuccess = (userData) => ({
  type: REGISTER_USER_SUCCESS,  
  payload: userData,
});

export const registerUserFailure = (error) => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
});


export const 
registerUser = (userData) => {
  return async (dispatch) => {
    dispatch(registerUserRequest());

    try {
      const response = await axios.post('http://127.0.0.1:8000/register/', userData);
      dispatch(registerUserSuccess(response.data));
    } catch (error) {
      dispatch(registerUserFailure(error.message));
    }
  };
};

