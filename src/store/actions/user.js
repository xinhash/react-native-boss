import {USER_AUTH_START, USER_AUTH_SUCCESS, USER_AUTH_FAILURE} from '../constants';


export function authenticate(userObj) {
  return dispatch => {
    dispatch(authenticateUserStart())
    return fetch(`/api/v1/login`, {
      method: "POST",
      body: JSON.stringify(userObj)
    })
	.then(res => res.json())
	.then(data => dispatch(authenticateUserSuccess(data)))
	.catch(error => dispatch(authenticateUserFailure(error)))
  }
}

function authenticateUserStart() {
  return {
    type: USER_AUTH_START,
    data: null
  }
}

function authenticateUserSuccess(data) {
  return {
    type: USER_AUTH_SUCCESS,
    data
  }
}

function authenticateUserFailure(errors) {
  return {
    type: USER_AUTH_FAILURE,
    data: errors
  }
}
