import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { GetUser, LogOut } from "../actions/index";

ProtectedPage.propTypes = {};

function ProtectedPage({ GetUser, login, user, LogOut }) {
  console.log("ProtectedPage -> user", user);
  const tokenCurrent = login.token;
  const [isBusy, setBusy] = useState(true);

  useEffect(() => {
    GetUser(tokenCurrent);
    setTimeout(() => setBusy(false), 1000);
  }, []);

  function handleLogout() {
    LogOut();
  }

  if (!login.successful) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div>
      {isBusy ? (
        <h1>....loading</h1>
      ) : (
        <>
          <h2>User Detail:</h2>
          <ul>
            <li>Full Name: {user.data.fullName}</li>
            <li>Email: {user.data.email}</li>
            <li>password: {user.data.password}</li>
            <li>id: {user.data.id}</li>
            <li>role: {user.data.role}</li>
          </ul>
          <input type="button" value="Logout" onClick={handleLogout}></input>
        </>
      )}
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
  GetUser,
  LogOut
})(ProtectedPage);
