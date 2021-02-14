import React from "react";
import {render} from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import App from "./components/app/app";
import root from "./store/reducers/root.js";
import {createAPI} from "./api/api";

const api = createAPI();

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
