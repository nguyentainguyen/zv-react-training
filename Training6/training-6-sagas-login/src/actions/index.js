export const types = {
  LOGIN_REQUESTING: "LOGIN_REQUESTING",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  GET_USER: "GET_USER",
  LOG_OUT: "LOG_OUT"
};

export const LoginRequest = values => ({
  type: types.LOGIN_REQUESTING,
  values
});

export const GetUser = token => ({
  type: types.GET_USER,
  token
});

export const LogOut = () => ({
  type: types.LOG_OUT
});
