// import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SearchResult from "./components/SearchResult";
import ValidationCode from './components/ValidationCode';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ValidationCode" element={<ValidationCode />} />
      <Route path="/SearchResult" element={<SearchResult />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
