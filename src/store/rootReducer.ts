import { combineReducers, Reducer } from "redux";

import userReducer from "./user/reducer";
import { UserState } from "./user/types";

export interface ApplicationState {
  user: UserState;
}

const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({
  user: userReducer
});

export default rootReducer;
