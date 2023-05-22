import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { Box } from "@mui/material";

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Signup = () => {
  let navigation = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let goToLogin = () => {
    navigation("/Login");
    console.log("Run");
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name, value);
  //   setUser({ ...user, [name]: value });
  // };

  //   const signUp = () => {
  //     const { name, email, password } = user
  //     if( name && email && password){
  //         axios.post("http://localhost:5000/signup", user)
  //         .then( res => {
  //           // alert("Sign Up Successfull")
  //             alert(res.data.message)
  //             navigation("/login")
  //         })
  //     } else {
  //         alert("invalid input")
  //     }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
    fetch("http://localhost:5000/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Registration Successful");
          window.location.href = "./Login";
        } else {
          alert("Something went wrong");
        }
      });
  };

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
            SignUp <FingerprintIcon fontSize="large" />
          </h2>
          {/* {console.log("user",user)} */}
          <form onSubmit={handleSubmit}>
            <div className="form-row py-2 pt-5">
              <div className="col-lg-10 offset-1">
                <input
                  name="name"
                  type="text"
                  className="inp px-3"
                  placeholder="User Name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row py-2 ">
              <div className="col-lg-10 offset-1">
                <input
                  type="email"
                  className="inp  px-3"
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
                  className="inp px-3"
                  placeholder="User Password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-row py-2 ">
              <div className="col-lg-10 offset-1">
                <button type="submit" className="btn-one  px-3">
                  SignUp
                </button>
              </div>
            </div>
          </form>
          <Box className="mt-2 d-flex justify-content-center align-items-center">
            <p>
              Already have an account!{" "}
              <a
                href=" "
                style={{ textDecoration: "none" }}
                onClick={goToLogin}>
                Login
              </a>
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Signup;
