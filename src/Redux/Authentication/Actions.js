import {
  USER_DETAILS,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  AUTHENTICATED,
} from "./ActionTypes";

export const userDetails = (email, uid, name) => {
  return {
    type: USER_DETAILS,
    payload: { email, uid, name },
  };
};

export const loginError = (value) => {
  return {
    type: LOGIN_ERROR,
    payload: value,
  };
};

export const signupError = (value) => {
  return {
    type: SIGNUP_ERROR,
    payload: value,
  };
};

export const isAuthenticated = (value) => {
  return {
    type: AUTHENTICATED,
    payload: value,
  };
};
