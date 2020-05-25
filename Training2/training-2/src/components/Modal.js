import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modal">
      <button onClick={closeModal}>Close</button>
    </div>
  );
}

export default Modal;
