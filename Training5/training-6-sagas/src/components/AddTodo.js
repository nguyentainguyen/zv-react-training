import React, { useState } from "react";
AddTodo.propTypes = {};

function AddTodo({ handleSubmit }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const onHandleSubmit = e => {
    e.preventDefault();
    const value = { name, id };
    handleSubmit(value);
    clearInput();
  };

  function clearInput() {
    setName("");
  }

  const handleValueChange = e => {
    setName(e.target.value);
  };
  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        autoFocus
        value={name}
        key={""}
        onChange={handleValueChange}
      ></input>
      <input type="submit" value="Add Todo"></input>
    </form>
  );
}

export default AddTodo;
