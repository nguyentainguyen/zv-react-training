import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import todoApp from "./reducers";
import App from "./components/App";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import store from "./store";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   todoApp,
//   composeWithDevTools(),
//   applyMiddleware(sagaMiddleware)
// );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
