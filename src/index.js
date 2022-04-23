import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import EcommerceContext from "./context/EcommerceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EcommerceContext>
    <App />
  </EcommerceContext>
);
