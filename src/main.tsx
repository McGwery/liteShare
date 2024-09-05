import "./styles/app.css";
import "./styles/custom.css"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 <React.StrictMode>
    <App />
  </React.StrictMode>,
);