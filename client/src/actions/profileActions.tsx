import axios from "axios";
import { GET_PROFILE } from "./types";

// register user
export const registerUser = (userData: any, history: any) => (
  dispatch: any
) => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: err.response.data
      })
    );
};
