import { TEST_DISPATCH } from "./types";

// register user
export const registerUser = (userData: any) => {
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};
