import React, { Fragment } from "react";
import styles from "./Signup.module.scss";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import NavBar from "../../Layout/Navbar/Navbar";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import {
  userDetails,
  signupError,
  isAuthenticated,
} from "../../Redux/Authentication/Actions";
import { setloader } from "../../Redux/UIModals/Actions";
import Loader from "../../Components/Loader/Loader";

const SignUp = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
    reEnterPassword: "",
  };

  const history = useHistory();
  const error = useSelector((state) => state.auth.signupError);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    handleSubmit(values);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Username Required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email Required"),
    password: yup.string().required("Password Required"),
    reEnterPassword: yup.string().required("Password Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleSubmit = ({ email, password, name }) => {
    dispatch(setloader(true));

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        res.user.updateProfile({
          displayName: name,
        });
        console.log(res);
        console.log(res.user.email, res.user.uid, res.user.displayName);

        dispatch(userDetails(res.user.email, res.user.uid));
        dispatch(signupError(""));
        dispatch(setloader(false));
        dispatch(isAuthenticated(true));
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
        dispatch(signupError(err.message));
        clearError();
      });
  };

  function clearError() {
    setTimeout(() => {
      dispatch(signupError(""));
    }, 10000);
  }

  if (
    formik.touched.reEnterPassword &&
    formik.values.password !== formik.values.reEnterPassword
  ) {
    formik.errors.reEnterPassword = "Password dosen't match";
  }

  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <Fragment>
      <NavBar></NavBar>
      <Loader></Loader>
      <div className={styles.container}>
        <div className={styles.signupPage}>
          <div className={styles.formContainer}>
            <div className={styles.headContainer}>
              <p className={styles.text}> Sign Up </p>
              <p className={styles.already}>
                Already a member{" "}
                <Link onClick={() => handleLogin()}>Log In</Link>
              </p>
            </div>
            {error ? (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            ) : null}
            <form onSubmit={formik.handleSubmit} className={styles.formGroup}>
              <div className={styles.Emailform}>
                <TextField
                  className={styles.emailInput}
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  variant="outlined"
                  style={
                    formik.errors.email && formik.touched.email
                      ? {
                          border: "2px solid rgb(255, 61, 61)",
                          borderRadius: "10px",
                          color: "rgb(255, 61, 61)",
                        }
                      : { backgroundColor: "#d1d1d1" }
                  }
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div className={styles.error}>{formik.errors.email}</div>
                ) : null}
              </div>

              <div className={styles.Usernameform}>
                <TextField
                  className={styles.emailInput}
                  type="text"
                  name="name"
                  id="namee"
                  label="Username"
                  variant="outlined"
                  style={
                    formik.errors.name && formik.touched.name
                      ? {
                          border: "1px solid rgb(255, 61, 61)",
                          borderRadius: "10px",
                          color: "rgb(255, 61, 61)",
                        }
                      : { backgroundColor: "#d1d1d1" }
                  }
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <div className={styles.error}>{formik.errors.name}</div>
                ) : null}
              </div>
              <div className={styles.PasswordForm}>
                <TextField
                  type="password"
                  className={styles.passInput}
                  name="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                  style={
                    formik.errors.password && formik.touched.password
                      ? {
                          border: "1px solid rgb(255, 61, 61)",
                          borderRadius: "10px",
                          color: "rgb(255, 61, 61)",
                        }
                      : { backgroundColor: "#d1d1d1" }
                  }
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <div className={styles.error}>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className={styles.RewritePasswordForm}>
                <TextField
                  type="password"
                  className={styles.passInput}
                  name="reEnterPassword"
                  id="reEnterPassword"
                  label="Confirm Password"
                  variant="outlined"
                  style={
                    formik.errors.reEnterPassword &&
                    formik.touched.reEnterPassword
                      ? {
                          border: "1px solid rgb(255, 61, 61)",
                          borderRadius: "10px",
                          color: "rgb(255, 61, 61)",
                        }
                      : { backgroundColor: "#d1d1d1" }
                  }
                  onChange={formik.handleChange}
                  value={formik.values.reEnterPassword}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.reEnterPassword &&
                formik.touched.reEnterPassword ? (
                  <div className={styles.error}>
                    {formik.errors.reEnterPassword}
                  </div>
                ) : null}
              </div>
              <Button
                disabled={!formik.isValid}
                type="submit"
                className={styles.button}
                variant="contained"
              >
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
      )
    </Fragment>
  );
};

export default SignUp;
