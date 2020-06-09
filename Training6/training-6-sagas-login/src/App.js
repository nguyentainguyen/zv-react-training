import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ProtectedPage from "./components/ProtectedPage";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/protected">
              <ProtectedPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;