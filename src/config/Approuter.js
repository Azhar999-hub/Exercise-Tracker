import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "../screens/Dashboard";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

const Approuter = () => {
  const [user, setLoginUser] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
