import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import About from './pages/About';
import Customer from './pages/Customer';
import Success from './pages/Success';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />}></Route>
  <Route path="/Login" element={<Login />}></Route>
  <Route path="/About" element={<About />}></Route>
  <Route path="/Customer" element={<Customer />}></Route>
  <Route path="/Success" element={<Success />}></Route>
</Routes>
</BrowserRouter>
);

