import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { onGetUser } from "../actions/index";

ProtectedPage.propTypes = {};

function ProtectedPage({ onGetUser, login, user }) {
  console.log("ProtectedPage -> user", user);
  const tokenCurrent = localStorage.getItem("token");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    onGetUser(tokenCurrent);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setRedirect(true);
  }

  const renderRedirect = () => {
    if (redirect === true) {
      return <Redirect to="/login"></Redirect>;
    }
  };

  if (!localStorage.getItem("token")) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div>
      {renderRedirect()}
      <h2>User Detail:</h2>
      <ul>
        <li>Full Name: {user.fullName}</li>
        <li>Email: {user.email}</li>
        <li>password: {user.password}</li>
        <li>id: {user.id}</li>
        <li>role: {user.role}</li>
      </ul>
      <input type="button" value="Logout" onClick={handleLogout}></input>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    login: state.login
  };
};

export default connect(mapStateToProps, {
  onGetUser
})(ProtectedPage);
