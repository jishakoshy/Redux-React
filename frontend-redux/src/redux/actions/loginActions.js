//loginActions   => user
import axios from 'axios';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Async Action Creator
export const loginUser = (username, password) => {
  return async (dispatch) => {
    dispatch(loginRequest()); 

    try {
      const response = await axios.post('http://127.0.0.1:8000/login', { username, password });

      dispatch(loginSuccess(response.data.user));

      return true;
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));

      return false;
    }
  };
};
