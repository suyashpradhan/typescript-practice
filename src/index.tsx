import React from "react";
import ReactDOM from "react-dom";
import { API } from "./API";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <API />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
