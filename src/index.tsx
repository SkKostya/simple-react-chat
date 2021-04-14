import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./import.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAIyPyky-SUBZFnsOO5xcL7Ym0zOeqRZYg",
  authDomain: "react-simple-chat-e20d8.firebaseapp.com",
  databaseURL: "https://react-simple-chat-e20d8-default-rtdb.firebaseio.com",
  projectId: "react-simple-chat-e20d8",
  storageBucket: "react-simple-chat-e20d8.appspot.com",
  messagingSenderId: "427434539112",
  appId: "1:427434539112:web:957e56e253ac220dd2e3dd",
  measurementId: "G-M74BJ46886"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Context = createContext<any>(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
