import React from "react";
import ReactDOM from "react-dom/client";
//REACT VE REACTDOM'UM JS'NIN ICERISINDE IMPORT YAPIMASI YETERLI
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
//ID'SI ROOT OLAN ELEMENTIN ICINE TUM 'APP' BASILIYOR.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
