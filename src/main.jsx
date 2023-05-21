import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UiContextProvider from "./store/uiCtx.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UiContextProvider>
        <App />
      </UiContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
