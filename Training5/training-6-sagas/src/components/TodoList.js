import React from "react";
import { connect } from "react-redux";
TodoList.propTypes = {};

function TodoList({ fetching, todo, onRequestTodo, onDeleteTodo, error }) {
  console.log(todo);
  return (
    <div>
      <ul>
        {todo.map(todoChild => (
          <li key={todoChild.id}>
            {todoChild.name}
            <button onClick={onDeleteTodo}>Delete</button>
          </li>
        ))}
      </ul>

      {fetching ? (
        <button disabled>Fetching...</button>
      ) : (
        <button onClick={onRequestTodo}>fetch todo</button>
      )}

      {error && <p style={{ color: "red" }}>something went wrong!</p>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    todo: state.todo,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestTodo: () => dispatch({ type: "API_CALL_REQUEST" }),
    onDeleteTodo: () => dispatch({ type: "DELETE_TODO" })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
