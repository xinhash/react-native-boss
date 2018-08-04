import { Reducer } from "redux";

import { UserState, UserActions } from "./types";

const initialState: UserState = {
  is_authenticated: false,
  data: {},
  errors: [],
  loading: false
};

const userReducer: Reducer<UserState> = (
  state: UserState = initialState,
  action
) => {
  switch ((action as UserActions).type) {
    case "@@user/USER_AUTH_START":
      return {
        ...state,
        loading: true,
        ...action.payload
      };
    case "@@user/USER_AUTH_SUCCESS":
      return {
        ...state,
        loading: false,
        is_authenticated: true,
        ...action.payload
      };
    case "@@user/USER_AUTH_FAILURE":
      return {
        ...state,
        data: null,
        is_authenticated: false,
        errors: action.data,
        loading: false
      };
    default:
      return initialState;
  }
};

export default userReducer;
