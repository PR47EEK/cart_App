import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsPIuQSULCmnIVl2kK8GcXj27KZrOtcaY",
  authDomain: "cart-d4412.firebaseapp.com",
  projectId: "cart-d4412",
  storageBucket: "cart-d4412.appspot.com",
  messagingSenderId: "702975621645",
  appId: "1:702975621645:web:eca9970e08307ebab57344",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
