import { types } from "../actions/index.js";

const initialState = {
  requesting: false,
  errors: [],
  token: null
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUESTING:
      return {
        requesting: true,
        errors: []
      };
    case types.LOGIN_SUCCESS:
      return {
        errors: [],
        requesting: false,
        token: action.token
      };

    case types.LOGIN_ERROR:
      return {
        errors: state.errors.concat([
          {
            body: action.error.toString(),
            time: new Date()
          }
        ]),
        requesting: false
      };

    case types.LOG_OUT:
      return {
        errors: [],
        requesting: false,
        token: null
      };

    default:
      return state;
  }
}
