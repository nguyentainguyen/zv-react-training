import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { onGetUser } from "../actions/index";

ProtectedPage.propTypes = {};

function ProtectedPage({ onGetUser, login, user }) {
  const tokenCurrent = localStorage.getItem("token");
  const [redirect, setRedirect] = useState(false);
  const [isBusy, setBusy] = useState(true);
  const [data, setData] = useState(user.data);

  useEffect(() => {
    onGetUser(tokenCurrent);
    setTimeout(() => setBusy(false), 1000);
    setData(user.data);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setRedirect(true);
    renderRedirect();
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
      {isBusy ? (
        <h1>....loading</h1>
      ) : (
        <>
          <h2>User Detail:</h2>
          <ul>
            <li>Full Name: {data.fullName}</li>
            <li>Email: {data.email}</li>
            <li>password: {data.password}</li>
            <li>id: {data.id}</li>
            <li>role: {data.role}</li>
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
  onGetUser
})(ProtectedPage);
