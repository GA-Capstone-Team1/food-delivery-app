import React from "react";
import styles from "./Loader.module.scss";
import { CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

let Loader = () => {
  const loader = useSelector((state) => state.ui.loader);
  return (
    <div
      style={loader === true ? { display: "flex" } : { display: "none" }}
      className={styles.container}
    >
      <CircularProgress className={styles.loader} color="#ffa500" />
      <Typography variant="subtitle2">Loading..</Typography>
    </div>
  );
};

export default Loader;
