export const types = {
  API_CALL_REQUEST: "API_CALL_REQUEST",
  API_CALL_SUCCESS: "API_CALL_SUCCESS",
  API_CALL_FAILURE: "API_CALL_FAILURE",
  DELETE_TODO: "DELETE_TODO",
  DELETE_TODO_SUCCESS: "DELETE_TODO_SUCCESS",
  ADD_TODO: "ADD_TODO",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  EDIT_TODO: "EDIT_TODO",
  EDIT_TODO_SUCCESS: "EDIT_TODO_SUCCESS"
};

export const onRequestTodo = () => ({
  type: types.API_CALL_REQUEST
});

export const onDeleteTodo = id => ({
  type: types.DELETE_TODO,
  id
});

export const onAddTodo = value => ({
  type: types.ADD_TODO,
  value
});

export const onEditTodo = (id, name) => ({
  type: types.EDIT_TODO,
  id,
  name
});
