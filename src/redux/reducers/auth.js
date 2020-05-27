import * as types from "../constants";
import { authorization } from "../actions/auth";

const initialState = {
  login: "",
  pass: "",
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.TYPE_TO_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case types.LOGGED_IN:
        return {
            ...state,
            authorized: action.payload.authorized
        }
    default:
      return state;
  }
};
