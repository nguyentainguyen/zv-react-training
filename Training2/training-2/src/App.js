import React, { useState } from "react";
import "./App.css";
import CloseButton from "./components/CloseButton";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [keyLog, setKeyLog] = useState([]);

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

      <Modal
        handleAddKeylog={e => {
          setKeyLog([...keyLog, e.key]);
        }}
        isOpen={isOpen}
      >
        <p>Hello</p>
        <CloseButton closeModal={closeModal} />
      </Modal>

      <p>Keylog results:{keyLog}</p>
      <p id="demo"></p>
    </div>
  );
}

export default App;
