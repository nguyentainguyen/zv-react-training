import React from "react";
import "./Modal.css";
import Button from "./Button";

function Modal({ closeModal, content }) {
  return (
    <div className="modal">
      {content}
      <Button closeModal={closeModal}></Button>
    </div>
  );
}

export default Modal;
