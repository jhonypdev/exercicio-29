import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { SSRProvider } from "react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SSRProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SSRProvider>
);
