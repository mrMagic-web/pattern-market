import axios from 'axios';
import { ADD_POST, GET_ERRORS, GET_POSTS, POST_LOADING } from './types';

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

//
export const getPosts = () => (dispatch: any) => {
  dispatch(setPostLoading());
  axios.get('/api/posts')
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
        
    }).catch((err: any) => dispatch({
      type: GET_POSTS,
      payload: null
    }))
}

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  }
}