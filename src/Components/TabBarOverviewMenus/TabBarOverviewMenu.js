import React from "react";
import styles from "./TabBarOverviewMenu.module.scss";
import { Button } from "@material-ui/core";

let TabBarOverviewMenu = () => {
  return (
    <div>
      <div className={styles.tabContainer}>
        <div className={styles.btnContainer}>
          <Button className={styles.btn}>Overview</Button>
        </div>
        <div className={styles.btnContaine}>
          <Button className={styles.btn}>Menus</Button>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default TabBarOverviewMenu;
