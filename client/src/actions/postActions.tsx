import axios from 'axios';
import { ADD_POST, GET_ERRORS } from './types';

export const addPost = (postData: any) => (dispatch: any) => {
  axios.post('/api/posts', postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
        
    }).catch((err: any) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}