import React, { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import CloseButton from "./components/CloseButton";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Open Modal</button>
      {isOpen && (
        <Modal>
          Hello
          <CloseButton closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;
