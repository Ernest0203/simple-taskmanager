import axios from 'axios';
import * as notification from './notification.js';

export const login = args => dispatch => {
  const config = {
    headers: {
      "Content-type": "application/json"
    }
  };
  axios.post('/users',args, config)
    .then((res) =>  {
      notification.confirm(dispatch)('Successfully logged as Admin');
      dispatch({ type: 'MODAL_TOGGLE' });
      dispatch({ type: 'LOGIN_SUCCESS' , data: res.data })
    })
    .catch((error) => notification.error(dispatch)(error.response.data));
}

export const logout = () => {
  return { type: 'LOGOUT_SUCCESS' };
};

export const loadUser = () => (dispatch, getState) => {
  axios.get('/users', tokenConfig(getState))
    .then(res =>{
      dispatch({ type: 'USER_LOADED', data: res.data })
    })
    .catch((error) => console.log(error.response.data));
};

export const tokenConfig = getState => {
  // Get token from localstorage
  const token = getState().auth.token;
  
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};