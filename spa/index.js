import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";
import { App } from "./App";

import Context from "./Context";

ReactDOM.render(
  <Context.Provider>
    <App />
  </Context.Provider>,
  document.getElementById("app")
);
