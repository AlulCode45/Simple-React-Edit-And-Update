import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Swal from "sweetalert2";
import App from "./App";
// import { DevSupport } from "@react-buddy/ide-toolbox";
// import { ComponentPreviews, useInitial } from "./dev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
