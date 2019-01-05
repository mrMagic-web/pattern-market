import axios from 'axios';
import { ADD_POST, GET_ERRORS, GET_POSTS,GET_POST, POST_LOADING, DELETE_POST } from './types';

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

// Get post
export const getPost = (id: string) => (dispatch: any) => {
  dispatch(setPostLoading());
  axios.get(`/api/post/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data
      })
        
    }).catch((err: any) => dispatch({
      type: GET_POST,
      payload: null
    }))
}

// Set loading state
export const deletePost = (id: string) => (dispatch:any) => {
  axios.delete(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      })
        
    }).catch((err: any) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

// Set loading state
export const addLike = (id: string) => (dispatch:any) => {
  axios.post(`/api/posts/like/${id}`)
    .then(res => { dispatch(getPosts())})
    .catch((err: any) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}

// Set loading state
export const removeLike = (id: string) => (dispatch:any) => {
  axios.post(`/api/posts/unlike/${id}`)
    .then(res => { dispatch(getPosts())})
    .catch((err: any) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
}
// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  }
}