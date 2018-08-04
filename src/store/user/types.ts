import { Action } from "redux";

export interface Login {
  email: string;
  password: string;
}

export interface UserState {
  is_authenticated: boolean;
  data: UserInfo;
  errors: any[];
  loading: boolean;
}

export interface UserInfo {
  name?: string;
  email?: string;
  token?: string;
  role?: string;
}

export interface UserAuthStart extends Action {
  type: "@@user/USER_AUTH_START";
  payload: {
    data: null;
  };
}

export interface UserAuthSuccess extends Action {
  type: "@@user/USER_AUTH_SUCCESS";
  payload: {
    data: UserInfo;
  };
}

export interface UserAuthFailed extends Action {
  type: "@@user/USER_AUTH_FAILURE";
  payload: {
    data: null;
  };
}

export type UserActions = UserAuthStart | UserAuthSuccess | UserAuthFailed;
