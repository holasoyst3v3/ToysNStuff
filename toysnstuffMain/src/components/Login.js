import React from "react";
import { useFormik } from "formik";

function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log("submit clicked");
  };
  const validate = (values) => {
    console.log("validation");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit" disabled={!formik.isValid}>
          Join
        </button>
      </form>
    </div>
  );
}

export default Login;
