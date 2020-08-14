import React, { Fragment, useState } from "react";
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

const SignUp = () => {
  const [showpassword, setShowpassword] = useState(false);

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
    name: yup.string().required("required"),
    email: yup.string().email("Invalid email format").required("required"),
    password: yup.string().required("required"),
    reEnterPassword: yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log("Visited Fields", formik.touched);

  const handleSubmit = ({ email, password, name }) => {
    console.log("submitted");
    dispatch(setloader(true));

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        res.user.updateProfile({
          displayName: name,
        });
        dispatch(
          userDetails(res.user.email, res.user.uid, res.user.displayName)
        );
        dispatch(signupError(""));
        dispatch(setloader(false));
        dispatch(isAuthenticated(true));
        history.replace("/");
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

  return (
    <Fragment>
      <NavBar></NavBar>
      <div className={styles.container}>
        <div className={styles.signupPage}>
          <div className={styles.formContainer}>
            <div className={styles.headContainer}>
              <p className={styles.text}> Sign In </p>
              <p className={styles.already}>
                Already a member <Link>Log In</Link>
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

              <div className={styles.Usernameform}>
                <TextField
                  className={styles.Usernameform}
                  type="text"
                  name="name"
                  id="namee"
                  label="Username"
                  variant="outlined"
                  style={{ backgroundColor: "#ffffff" }}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className={styles.PasswordForm}>
                <TextField
                  //   className={styles.PasswordForm}
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
              <div className={styles.RewritePasswordForm}>
                <TextField
                  //   className={styles.Usernameform}
                  type={showpassword === true ? "text" : "password"}
                  name="reEnterPassword"
                  id="reEnterPassword"
                  label="Password"
                  variant="outlined"
                  style={{ backgroundColor: "#d1d1d1" }}
                  onChange={formik.handleChange}
                  value={formik.values.reEnterPassword}
                  onBlur={formik.handleBlur}
                />
                {/* {formik.errors.password && formik.touched.password ? (
                  <div>{formik.errors.password}</div>
                ) : null} */}
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
    </Fragment>
  );
};

export default SignUp;
