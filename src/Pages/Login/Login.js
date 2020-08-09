import React, { Fragment, useState } from "react";
import styles from "./Login.module.scss";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import NavBar from "../../Layout/Navbar/Navbar";
// import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
// import { setLoader } from "../../Redux/Index";
import * as yup from "yup";
import { TextField, Checkbox, Typography, Button } from "@material-ui/core";
// import {
//   userDetails,
//   loginError,
//   isAuthenticated,
// } from "../../Redux/Authentication/AuthActions";
import { useFormik } from "formik";

const Login = () => {
  const [showpassword, setShowpassword] = useState(false);
  //   const dispatch = useDispatch();
  //   const loader = useSelector((state) => state.board.loader);
  //   const error = useSelector((state) => state.auth.logInError);
  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    // handleSubmit(values);
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

  //   const handleSubmit = (values) => {
  //     console.log("submitted");
  //     dispatch(setLoader(true));
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword(values.email, values.password)
  //       .then((res) => {
  //         console.log(res);
  //         dispatch(
  //           userDetails(res.user.email, res.user.uid, res.user.displayName)
  //         );
  //         dispatch(loginError(""));
  //         dispatch(setLoader(false));
  //         dispatch(isAuthenticated(true));
  //         history.push("/");
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //         dispatch(loginError(err.message));
  //         dispatch(setLoader(false));
  //         clearError();
  //       });
  //   };

  //   function clearError() {
  //     setTimeout(() => {
  //       dispatch(loginError(""));
  //     }, 10000);

  return (
    <Fragment>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.signupPage}>
          <div className={styles.formContainer}>
            <div>
              <p className={styles.text}> Log In </p>
              <p className={styles.already}>
                Not a member <Link>Sign In</Link>
              </p>
            </div>
            {/* {error ? (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            ) : null} */}
            <form onSubmit={formik.handleSubmit} className={styles.formGroup}>
              <div className={styles.Emailform}>
                <TextField
                  className={styles.Emailform}
                  type="email"
                  name="email"
                  id="email"
                  label="Email"
                  variant="outlined"
                  style={{ backgroundColor: "#d1d1d1" }}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>

              <div className={styles.RewritePasswordForm}>
                <TextField
                  className={styles.Usernameform}
                  type={showpassword === true ? "text" : "password"}
                  name="password"
                  id="password"
                  label="Password"
                  variant="outlined"
                  style={{ backgroundColor: "#d1d1d1" }}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                {/* {formik.errors.password && formik.touched.password ? (
                  <div>{formik.errors.password}</div>
                ) : null} */}
              </div>
              <div className={styles.checkContainer}>
                <Checkbox
                  className={styles.Checkbox}
                  value="Password"
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  labelStyle={{ color: "#ffa500" }}
                  iconStyle={{ color: "#ffa500" }}
                />
                <Typography className={styles.filterName}>
                  Show Password
                </Typography>
              </div>
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
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
