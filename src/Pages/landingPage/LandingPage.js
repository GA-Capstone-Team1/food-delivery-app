import React, { useState, useEffect } from "react";
import styles from "./LandingPage.module.scss";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { getCityId } from "../../Redux/Services/Actions";
import { connect } from "react-redux";

const LandingPage = ({ cityId, SelectedCity }) => {
  return (
    <div className={styles.container}>
      <SearchBar></SearchBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cityId: state.service.cityId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SelectedCity: (query) => getCityId(query),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
