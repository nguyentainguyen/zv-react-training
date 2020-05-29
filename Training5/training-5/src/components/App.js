import React from "react";
import Footer from "./Footer";
import "../App.css";

import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="App">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
