import React, { Component } from "react";
import PropTypes from "prop-types";

class Keylog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ""
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  //   shouldComponentUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  handleKeyLog = () => {
    const keyLog = document.querySelector("p");
    document.addEventListener("keyup", logKey);
    function logKey(event) {
      keyLog.textContent += ` ${event.code}`;
      console.log(keyLog.textContent);
    }
    this.setState({ key: keyLog.textContent });
  };

  render() {
    return (
      <div>
        <input type="text" onKeyPress={this.handleKeyLog}></input>
        <p></p>
      </div>
    );
  }
}

Keylog.propTypes = {};

export default Keylog;
