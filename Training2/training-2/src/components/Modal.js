import React from "react";
import "./Modal.css";

class Modal extends React.PureComponent {
  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;

    if (isOpen && !prevProps.isOpen) {
      document.addEventListener("keydown", this.handleKeyPress);
      document.addEventListener("keydown", this.handleKeyPress);
    }

    if (!isOpen && prevProps.isOpen) {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
  }
  handleKeyPress = e => {
    this.props.handleAddKeylog(e);
  };
  render() {
    const { children, passKeyLog, isOpen } = this.props;
    const showHideClassName = isOpen ? "modal modal-show" : "modal modal-hide";
    return (
      <div
        className={showHideClassName}
        id="modal"
        tabIndex="0"
        onKeyDown={passKeyLog}
      >
        <section className="modal-main">{children}</section>
      </div>
    );
  }
}

export default Modal;
