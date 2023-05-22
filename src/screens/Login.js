import LoginIcon from "@mui/icons-material/Login";
import { Box } from "@mui/material";

import userEvent from "@testing-library/user-event";

import axios from "axios";

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  let navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  let goToSignup =()=>{
    navigation(`/signup`);
    console.log("Run")
  }

  

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./Dashboard";
        }
      });
  }
    return (
    <div className="container">
      <div className="row g-0">
        <div className="col-lg-7">
          <img
            src="/images/formimg.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="col-lg-5 text-center py-4">
          <h2 className="animate__animated animate__heartBeat animate__infinite text-primary">
            Login <LoginIcon fontSize="large" />
            {/* {console.log("user", user)} */}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row py-2 pt-5">
              <div className="col-lg-10 offset-1">
                <input
                  type="email"
                  className="inp px-3"
                  placeholder="User Email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </div>
            </div>
            <div className="form-row py-2 ">
              <div className="col-lg-10 offset-1">
                <input
                  type="password"
                  className="inp  px-3"
                  placeholder="User Password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row py-2 ">
              <div className="col-lg-10 offset-1">
                <button className="btn-one  px-3">Login</button>
              </div>
            </div>
          </form>
          <Box className="mt-2 d-flex justify-content-center align-items-center">
            <p>Not a member? <a href=" " style={{ textDecoration: "none" }} onClick={goToSignup}>Signup</a></p>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
