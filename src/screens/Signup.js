import FingerprintIcon from "@mui/icons-material/Fingerprint";

import React, { useState } from "react";

import { useFormik } from "formik";

import * as Yup from "yup";

import { Link } from "react-router-dom";

const Signup = () => {
  // let [email, setEmail] = useState("");

  let { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(4, "Please provide atleast  four characters")
          .max(20, "too long names are not allowed")
          .required("Name can not be empty"),
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Required"),
        password: Yup.string()
          .min(8, "min 8 characters")
          .max(15, "max 15 characters")
          .required("Please provide a valid password"),
      }),
      onSubmit: (value) => {
        console.log(value);
      },
    });

  // handleSubmit = (e) => {
  //   const email = e.target.email.value;
  //   const name = e.target.name.value;
  //   const password = e.target.password.value;

  //   console.log("User Name: " + name);
  //   console.log("User Email: " + email);
  //   console.log("User Password: " + password);
  // };

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
          <form onSubmit={handleSubmit}>
            <div className="form-row py-1 pt-5">
              <div className="col-lg-10 offset-1">
                <input
                  type="text"
                  className="inp px-3"
                  placeholder="User Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  id="name"
                  name="name"
                />
                <p style={{ color: "red" }}>
                  {touched.name && errors.name ? errors.name : null}
                </p>
              </div>
            </div>
            <div className="form-row py-1 ">
              <div className="col-lg-10 offset-1">
                <input
                  type="email"
                  className="inp  px-3"
                  placeholder="User Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                  name="email"
                />
                <p style={{ color: "red" }}>
                  {touched.email && errors.email ? errors.email : null}
                </p>
              </div>
            </div>
            <div className="form-row py-1 ">
              <div className="col-lg-10 offset-1">
                <input
                  type="password"
                  className="inp px-3"
                  placeholder="User Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  id="password"
                  name="password"
                />
                <p style={{ color: "red" }}>
                  {touched.password && errors.password ? errors.password : null}
                </p>
              </div>
            </div>
            <div className="form-row py-1 ">
              <div className="col-lg-10 offset-1">
                <button className="btn-one  px-3">SignUp</button>
              </div>
            </div>
          </form>
          <p>
            i'm already a member! &nbsp;
            <Link className="text-primary" style={{ textDecoration: "none" }}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
