import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(combineReducers, {});
if (process.env.NODE_ENV === "development") {
  store = createStore(
    combineReducers,
    composeEnhancers(applyMiddleware(thunk))
  );
} else {
  store = createStore(combineReducers, compose(applyMiddleware(thunk)));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
