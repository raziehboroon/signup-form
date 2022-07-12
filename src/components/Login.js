import React, { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import validate from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "./toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      notify("You Logged in Successfully.", "success");
    } else {
      setTouched({
        email: true,
        password: true,
      });
      notify("Invalid Data!", "failure");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}>Login</h1>
        {/* name */}
        <div className={styles.formField}>
          <label htmlFor="email">Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        {/* password */}
        <div className={styles.formField}>
          <label htmlFor="password">Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && (
            <span>{errors.password}</span>
          )}
        </div>
        {/* buttons */}
        <div className={styles.formButtons}>
          <Link to="/signup">SignUp</Link>
          {/* <a href="#login">SignUp</a> */}
          <button type="submit">Login</button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Login;
