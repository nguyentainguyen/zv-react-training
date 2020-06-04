import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  onDeleteTodo,
  onRequestTodo,
  onAddTodo,
  onEditTodo
} from "../actions/index";
import AddTodo from "./AddTodo";

TodoList.propTypes = {};

function TodoList({
  fetching,
  todo,
  onRequestTodo,
  onDeleteTodo,
  error,
  onAddTodo,
  onEditTodo
}) {
  const [editValue, setEditValue] = useState("");
  const onDeleteClick = id => {
    onDeleteTodo(id);
  };
  const handleEditChange = (event, id) => {
    setEditValue(event.currentTarget.innerText);
    console.log("handleEditChange -> editValueFFFFFF", { editValue });
    onEditTodo(id, editValue);
  };

  return (
    <div>
      <AddTodo handleSubmit={onAddTodo} />
      <ul>
        {todo.map(todoChild => (
          <li key={todoChild.id}>
            <div
              contentEditable="true"
              suppressContentEditableWarning="true"
              onInput={e => handleEditChange(e, todoChild.id)}
            >
              {todoChild.name}
            </div>

            <button onClick={() => onDeleteClick(todoChild.id)}>Delete</button>
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

export default connect(mapStateToProps, {
  onRequestTodo,
  onDeleteTodo,
  onAddTodo,
  onEditTodo
})(TodoList);
