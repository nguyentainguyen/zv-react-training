export const types = {
  LOGIN_REQUESTING: "LOGIN_REQUESTING",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  GET_USER: "GET_USER"
};

export const onLoginRequest = values => ({
  type: types.LOGIN_REQUESTING,
  values
});

export const onGetUser = token => ({
  type: types.GET_USER,
  token
});
