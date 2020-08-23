import React from "react";
import styles from "./LandingPage.module.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { getCityId } from "../../Redux/Services/Actions";
import { connect } from "react-redux";
import pizza from "../../images/pizza2.png";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const LandingPage = ({ cityId, SelectedCity, authenticated, userName }) => {
  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };

  const handleSignup = () => {
    history.push("/signup");
  };

  let name;
  if (userName !== null || userName !== undefined) {
    name = userName;
  }

  console.log(authenticated, userName);
  return (
    <div className={styles.container}>
      <div className={styles.mobileLoginSignup}>
        {authenticated === true ? (
          <Typography className={styles.userName}>
            Welcome <strong>{name}</strong>{" "}
          </Typography>
        ) : (
          <>
            <Typography
              onClick={() => handleLogin()}
              className={styles.login}
              variant="subtitle1"
            >
              <strong>Login</strong>
            </Typography>
            <Typography
              onClick={() => handleSignup()}
              className={styles.signup}
              variant="subtitle1"
            >
              <strong>Signup</strong>
            </Typography>
          </>
        )}
      </div>
      <div className={styles.left}>
        <div className={styles.headline}>
          <Typography className={styles.subHead} variant="h3">
            Tired of waiting for the Food?
          </Typography>
          <Typography className={styles.text} variant="h4">
            {" "}
            Healthy & Natural Food at Your Door Step
          </Typography>
          <Typography
            className={styles.subText}
            variant="h6"
            color="textSecondary"
          >
            Foodie lets you order your Food from the best Chefs, Restaurants,
            Cafes, etc. from your location.
          </Typography>
        </div>
        <div className={styles.searchBar}>
          <SearchBar></SearchBar>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          {authenticated === true ? (
            <Typography variant="subtitle1">
              Welcome <strong>{name}</strong>{" "}
            </Typography>
          ) : (
            <>
              <Typography
                className={styles.login}
                variant="subtitle1"
                onClick={() => handleLogin()}
              >
                <strong>Login</strong>
              </Typography>
              <Typography
                className={styles.signup}
                onClick={() => handleSignup()}
                variant="subtitle1"
              >
                <strong>Signup</strong>
              </Typography>
            </>
          )}
        </div>
        <div className={styles.image}>
          <img className={styles.pizzaImage} src={pizza} alt="Pizza.png"></img>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityId: state.service.cityId,
    authenticated: state.auth.authenticated,
    userName: state.auth.userName,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SelectedCity: (query) => getCityId(query),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
