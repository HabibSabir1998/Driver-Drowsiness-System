import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.register();

//function swDev() {
//  let swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
//  navigator.serviceWorker.register(swUrl).then((res) => {
//    console.warn("res", res);
//  });
//}

//swDev();
