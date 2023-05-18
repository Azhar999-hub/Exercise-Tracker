import LoginIcon from "@mui/icons-material/Login";

import React from "react";

import { useFormik } from "formik";

import * as Yup from "yup";

import { Link } from "react-router-dom";

const Login = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        password: "",
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(4, "Please provide atleast  four characters")
          .max(20, "too long names are not allowed")
          .required("Name can not be empty"),
        password: Yup.string()
          .min(8, "min 8 characters")
          .max(15, "max 15 characters")
          .required("Please provide a valid password"),
      }),
      onSubmit: (value) => {
        console.log(value);
      },
    });
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
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row py-2 pt-5">
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
            <div className="form-row py-2 ">
              <div className="col-lg-10 offset-1">
                <input
                  type="password"
                  className="inp  px-3"
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
            <div className="form-row py-2 ">
              <div className="col-lg-10 offset-1">
                <button className="btn-one  px-3">SignUp</button>
              </div>
            </div>
          </form>
          <p className="pt-2">
            Not a member? &nbsp;
            <Link className="text-primary" style={{ textDecoration: "none" }}>
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
