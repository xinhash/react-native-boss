import { ActionCreator, Dispatch } from "redux";

import {
  UserAuthStart,
  UserAuthSuccess,
  UserAuthFailed,
  UserInfo,
  Login
} from "./types";

import { login } from "./api";

const authenticateUserStart: ActionCreator<UserAuthStart> = () => ({
  type: "@@user/USER_AUTH_START",
  payload: {
    data: null
  }
});

const authenticateUserSuccess: ActionCreator<UserAuthSuccess> = (
  data: UserInfo
) => ({
  type: "@@user/USER_AUTH_SUCCESS",
  payload: {
    data
  }
});

const authenticateUserFailure: ActionCreator<UserAuthFailed> = errors => ({
  type: "@@user/USER_AUTH_FAILURE",
  payload: {
    data: null
  }
});

export const authenticate = (userObj: Login) => async (dispatch: Dispatch) => {
  try {
    dispatch(authenticateUserStart());
    const response = await (await login(JSON.stringify(userObj))).json();
    if (response) {
      dispatch(authenticateUserSuccess(response.auth_token));
      return { success: true };
    }
    throw new Error("Unable to authenticate user");
  } catch (error) {
    dispatch(authenticateUserFailure(error));
  }
};
