import React, { Fragment, useState } from "react";
import styles from "./Login.module.scss";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import NavBar from "../../Layout/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { TextField, Checkbox, Typography, Button } from "@material-ui/core";
import { useFormik } from "formik";
import {
  userDetails,
  loginError,
  isAuthenticated,
} from "../../Redux/Authentication/Actions";
import { setloader } from "../../Redux/UIModals/Actions";

const Login = () => {
  const [showpassword, setShowpassword] = useState(false);
  const dispatch = useDispatch();
  // const loader = useSelector((state) => state.ui.loader);
  const error = useSelector((state) => state.auth.loginError);
  const email = useSelector((state) => state.auth.email);
  const uid = useSelector((state) => state.auth.uid);

  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };

  console.log(email, uid);

  const onSubmit = (values) => {
    handleSubmit(values);
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email Required")
      .email("Invalid Email Format"),
    password: yup.string().required("Password Required"),
  });
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleSubmit = (values) => {
    console.log("submitted");
    dispatch(setloader(true));
    firebase
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        console.log(res);
        dispatch(
          userDetails(res.user.email, res.user.uid, res.user.displayName)
        );
        dispatch(loginError(""));
        dispatch(setloader(false));
        dispatch(isAuthenticated(true));
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(loginError(err.message));
        dispatch(setloader(false));
        clearError();
      });
  };

  function clearError() {
    setTimeout(() => {
      dispatch(loginError(""));
    }, 10000);
  }

  const handleSignup = () => {
    history.push("/signup");
  };

  return (
    <Fragment>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.signupPage}>
          <div className={styles.formContainer}>
            <div>
              <p className={styles.text}> Log In </p>
              <p className={styles.already}>
                Not a member <Link onClick={() => handleSignup()}>Sign In</Link>
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

              <div className={styles.PasswordForm}>
                <TextField
                  className={styles.passInput}
                  type={showpassword === true ? "text" : "password"}
                  name="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                  style={
                    formik.errors.password && formik.touched.password
                      ? {
                          border: "2px solid rgb(255, 61, 61)",
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
              <div className={styles.checkContainer}>
                <Checkbox
                  className={styles.Checkbox}
                  value={showpassword}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  labelStyle={{ color: "#ffa500" }}
                  iconStyle={{ color: "#ffa500" }}
                  onClick={() => setShowpassword(!showpassword)}
                />
                <Typography className={styles.filterName}>
                  Show Password
                </Typography>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  className={styles.button}
                  style={{ display: "block" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Log In
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
