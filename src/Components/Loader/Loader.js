import React from "react";
import styles from "./Loader.module.scss";
import { CircularProgress } from "@material-ui/core";

let Loader = () => {
  return (
    <div className={styles.container}>
      <CircularProgress color="#ffa500" />
    </div>
  );
};

export default Loader;
