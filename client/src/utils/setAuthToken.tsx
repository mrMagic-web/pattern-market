import axios from "axios";

const authorization: string = "Authorization";

const setAuthToken = (token: any) => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common[authorization] = token;
  } else {
    // Delete the auth header
    delete axios.defaults.headers.common[authorization];
  }
};

export default setAuthToken;
