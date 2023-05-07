import React from "react";
import ReactDOM from "react-dom/client";
//Import Files
import App from "./App";
//Styles
import "./index.css";
//Redux
import { store } from "./redux/store"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);