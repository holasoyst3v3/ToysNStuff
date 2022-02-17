import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import Swal from "sweetalert2";

function Login(props) {
  let navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values, onSubmitProps) => {
    axios
      .post("http://localhost:3001/login", values)
      .then((res) => {
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('user_id', res.data.user_id)
        props.logFunction()
        navigate("/items");
      })
      // .catch((err) => console.log(err.response.data))
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "WOWZA!",
          text: err.response.data,
        });
      });
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username Required";
    }
    if (!values.password) {
      errors.password = "Password Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  
  return (
    <div>
      <h2>Login with your credentials below!</h2>
      <h3>If you are not signed up with us, register today!!</h3>
      <button className="nav">
            <Link to="/Register">Register!</Link>
          </button>
      <div>
      <form name="regform" onSubmit={formik.handleSubmit}>
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
      <div>
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </div>
    </div>
  );
}

export default Login;
