export const types = {
  LOGIN_REQUESTING: "LOGIN_REQUESTING",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  GET_USER: "GET_USER",
  LOG_OUT: "LOG_OUT"
};

export const loginRequest = values => ({
  type: types.LOGIN_REQUESTING,
  values
});

export const getUser = token => ({
  type: types.GET_USER,
  token
});

export const logOut = () => ({
  type: types.LOG_OUT
});
