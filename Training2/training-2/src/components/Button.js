import React from "react";

Button.propTypes = {};

function Button({ closeModal }) {
  return <button onClick={closeModal}>Close</button>;
}

export default Button;
