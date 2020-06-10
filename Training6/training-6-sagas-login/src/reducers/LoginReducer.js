import { types } from "../actions/index.js";

const initialState = {
  requesting: false,
  successful: false,
  errors: [],
  token: null
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUESTING:
      return {
        requesting: true,
        successful: false,
        errors: []
      };
    case types.LOGIN_SUCCESS:
      return {
        errors: [],
        requesting: false,
        successful: true,
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
        requesting: false,
        successful: false
      };

    case types.LOG_OUT:
      return {
        errors: [],
        requesting: false,
        successful: false,
        token: []
      };

    default:
      return state;
  }
}
