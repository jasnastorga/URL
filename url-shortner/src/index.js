import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//connect app to firebase
import { BrowserRouter } from "react-router-dom";
import { initializeApp} from "firebase/app";

// FIREBASE SDK
const firebaseConfig = {
  apiKey: "AIzaSyDTGkoUGedmev7a-T5Vb3YQo6EMH3AhffY",
  authDomain: "url-shortner-351f8.firebaseapp.com",
  projectId: "url-shortner-351f8",
  storageBucket: "url-shortner-351f8.appspot.com",
  messagingSenderId: "342734951514",
  appId: "1:342734951514:web:d5262b8f98ea4ac392f463",
  measurementId: "G-8CN6NS5M3T"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
