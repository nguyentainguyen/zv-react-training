import { types } from "../actions/index";

const initialState = {
  fetching: false,
  todo: [],
  error: null
};

export function reducer(state = initialState, action) {
  console.log("reducer -> action", action);

  switch (action.type) {
    case types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.API_CALL_SUCCESS:
      return { ...state, fetching: false, todo: action.todo };
    case types.API_CALL_FAILURE:
      return { ...state, fetching: false, todo: null, error: action.error };
    default:
      return state;
  }
}
