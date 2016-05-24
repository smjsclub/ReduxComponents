import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware}from "redux";
import reduxLogger from "redux-logger";
import ProgressBar from "./components/progressBar";

const STORE = createStore(()=>{}, applyMiddleware(reduxLogger()));

render (
  <Provider store={STORE}>
    <ProgressBar steps={[
      {name: "regForm", label: "Sign Up", required: true},
      {name: "addressForm", label: "Add Address", required: false},
      {name: "confirm", label:"Confirmation", required: true}
    ]} />
  </Provider>,
  document.getElementById("container")
);
