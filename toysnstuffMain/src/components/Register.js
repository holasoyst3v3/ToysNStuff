import React from "react";
import { useFormik } from "formik";
import axios from "axios";

function Register() {
  const initialValues = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => {
    axios.post('http://localhost:3001/register', values)
    .then((res) => {
        console.log(res.data)
    })
  };
  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First Name Required";
    }
    if (!values.username) {
      errors.username = "Username Required";
    }
    if (!values.password) {
      errors.password = "Password Required";
    } else if (values.password.length > 10) {
      errors.password = "Password must be greater than 10 characters";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm your password please";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords does not match";
    }
    return errors
  };

  // console.log("validation");

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return <div>
      <h2>SIGN UP!</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="first Name"
          name="firstname"
          onChange={formik.handleChange}
          value={formik.values.firstname}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname}
        />
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <button type="submit" disabled={!formik.isValid}>
          Join
        </button>
      </form>
      <div>
          {formik.errors.firstname ? <div>{formik.errors.firstname}</div> : null}
          {formik.errors.username ? <div>{formik.errors.username}</div> : null}
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
      </div>
    </div>
}

export default Register;
