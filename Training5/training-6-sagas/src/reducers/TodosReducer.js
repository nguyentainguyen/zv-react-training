import { types } from "../actions/index";

const initialState = {
  fetching: false,
  todo: [],
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
    case types.API_CALL_SUCCESS:
      return { ...state, fetching: false, todo: action.todo };
    case types.API_CALL_FAILURE:
      return { ...state, fetching: false, todo: null, error: action.error };
    case types.DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(todo => todo.id !== action.id)
      };
    case types.ADD_TODO_SUCCESS:
      state.todo.push(action.payload);
      return {
        ...state,
        todo: state.todo
      };
    case types.EDIT_TODO:
      return {
        ...state,
        todo: state.todo
      };
    default:
      return state;
  }
}
