import { types } from "../actions/index.js";

const initialState = {
  data: []
};

export function getUserReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER:
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
