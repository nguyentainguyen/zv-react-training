import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUser, logOut } from "../actions/index";

ProtectedPage.propTypes = {};

function ProtectedPage({ getUser, login, user, logOut }) {
  useEffect(() => {
    getUser();
  }, []);

  function handleLogout() {
    logOut();
  }

  if (login.token === null) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div>
      {user.loaded ? (
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
      ) : (
        <h1>...loading</h1>
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
  getUser,
  logOut
})(ProtectedPage);
