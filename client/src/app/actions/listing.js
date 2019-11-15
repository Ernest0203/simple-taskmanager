import axios from 'axios';
import * as notification from './notification.js';
import { tokenConfig } from './auth.js';

export const fetchData = args => dispatch => {
  axios.get('/items', { params: { ...args } })
    .then((res) => {
      dispatch({ type: 'FETCH_DATA_SUCCESS', data: res.data })
  }).catch(error => notification.error(dispatch)(error.response.data));
}

export const applyFilter = args => dispatch => {
  axios.get('/items', { params: { ...args } })
    .then((res) => {
      const updatedData = { data: res.data, sortSelected: Object.keys(args)[0] }
      dispatch({ type: 'APPLY_FILTER_SUCCESS', data: updatedData });
  }).catch(error => notification.error(dispatch)(error.response.data));
}

export const createItem = args => dispatch => {
  axios.post('/items', args)
    .then((res) =>{
      notification.confirm(dispatch)('Task was created');
      dispatch({ type: 'ADD_ITEM', data: res.data })
    })
    .catch((error) => notification.error(dispatch)(error.response.data));
}

export const editItem = args => (dispatch, getState) => {
  axios.put('/items', args, tokenConfig(getState))
    .then((res) => {
      notification.confirm(dispatch)('Task was edited successfully');
      dispatch({ type: 'EDIT_ITEM', data: res.data })
    })
    .catch((error) => notification.error(dispatch)(error.response.data));
}

export const modalToggle = arg => dispatch => {
  dispatch({ type: 'MODAL_TOGGLE' , data: arg});
}
