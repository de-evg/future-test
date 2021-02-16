import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from "./components/app/app";
import root from "./store/reducers/root.js";
import Api from "./api/api";

const BACKEND_URL = `http://www.filltext.com`;

const api = new Api(BACKEND_URL);

const store = createStore(
  root, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
