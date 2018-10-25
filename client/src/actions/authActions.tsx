import axios from "axios";
import * as jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";

// register user
export const registerUser = (userData: any, history: any) => (
  dispatch: any
) => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = (userData: object) => (dispatch: any) => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorege
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // set token to Auth header
      setAuthToken(token);

      // decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Set logged in user
export const setCurrentUser = (decoded: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// log out user
export const logOutUser = () => (dispatch: any) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");

  // Remove auth header for future requests
  setAuthToken(false);

  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
