import {
  USER_DETAILS,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  AUTHENTICATED,
} from "./ActionTypes";

const initialState = {
  email: "",
  userName: "",
  address: "",
  contact: "",
  uid: "",
  loginError: "",
  signupError: "",
  authenticated: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: action.payload,
      };

    case USER_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        email: action.payload.email,
        userName: action.payload.name,
        uid: action.payload.uid,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        signupError: action.payload,
      };

    default:
      return state;
  }
};
