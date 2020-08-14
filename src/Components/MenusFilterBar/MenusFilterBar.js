import React from "react";
import styles from "./MenusFilterBar.module.scss";

let MenusFilterBar = () => {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.listContainer}>
          <li>Pizza</li>
          <li>Pasta</li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default MenusFilterBar;
