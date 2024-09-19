// adminauthActions.js
import axios from 'axios';

const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
const ADMIN_LOGIN_FAIL = 'ADMIN_LOGIN_FAIL';

export const adminLogin = (username, password, navigate) => async (dispatch) => { // Accept navigate
  try {
    const response = await axios.post('http://127.0.0.1:8000/login/', { username, password });
    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: response.data, 
    });
    
    navigate('/admindash'); 
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: error.response.data.message || 'Error occurred while logging in',
    });
  }
};
