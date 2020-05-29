import React from "react";
import PropTypes from "prop-types";

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

function Todo({ onClick, completed, text }) {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}

export default Todo;
