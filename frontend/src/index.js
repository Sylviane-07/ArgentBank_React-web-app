import React from "react";
import ReactDOM from "react-dom/client";
//Import Files
import App from "./App";
//Styles
import "./index.css";
//Redux
import { store, persistor } from "./redux/store"
import { Provider } from "react-redux";
//Redux-Persist
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);