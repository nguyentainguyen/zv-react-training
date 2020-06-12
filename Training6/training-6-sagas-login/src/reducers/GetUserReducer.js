import { types } from "../actions/index.js";

const initialState = {
  data: [],
  loaded: false
};

export function getUserReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_SUCCESS:
      return { ...state, data: action.payload, loaded: action.loaded };

    default:
      return state;
  }
}
