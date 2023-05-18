import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="Dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
