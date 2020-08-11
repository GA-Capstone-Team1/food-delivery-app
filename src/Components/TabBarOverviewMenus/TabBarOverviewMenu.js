import React from "react";
import styles from "./TabBarOverviewMenu.module.scss";
import { Button } from "@material-ui/core";
import { overview, menus } from "../../Redux/UIModals/Actions";
import { connect } from "react-redux";

let TabBarOverviewMenu = ({ setMenus, setOverview, overview, menus }) => {
  let menu, overvie;
  if (menus === true) {
    menu = "2px solid orange";
    overvie = "none";
  } else {
    overvie = "2px solid orange";
    menu = "none";
  }

  return (
    <>
      <div className={styles.tabContainer}>
        <div className={styles.btnContainer} style={{ borderBottom: overvie }}>
          <Button className={styles.btn} onClick={() => setOverview()}>
            Overview
          </Button>
        </div>
        <div className={styles.btnContaine} style={{ borderBottom: menu }}>
          <Button className={styles.btn} onClick={() => setMenus()}>
            Menus
          </Button>
        </div>
      </div>
      <div className={styles.line}></div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    overview: state.ui.overview,
    menus: state.ui.menus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setOverview: () => dispatch(overview()),
    setMenus: () => dispatch(menus()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TabBarOverviewMenu);
