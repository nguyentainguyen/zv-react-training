import React from "react";

CloseButton.propTypes = {};

function CloseButton({ closeModal }) {
  return <button onClick={closeModal}>Close</button>;
}

export default CloseButton;
