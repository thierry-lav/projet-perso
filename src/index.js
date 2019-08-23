import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createOvermind } from "overmind";
import { config } from "./overmind";
import { Provider } from "overmind-react";

const overmind = createOvermind(config);

ReactDOM.render(
  <Provider value={overmind}>
    <App />
  </Provider>,
  document.getElementById("root")
);
