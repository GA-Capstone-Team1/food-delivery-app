import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import TuneIcon from "@material-ui/icons/Tune";
import styles from "./SearchBar.module.scss";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "2px 4px",
    // // marginTop:'20px',
    // display: "flex",
    // alignItems: "center",
    // width: 100%,
    // justifyContent: "center",
  },
  root1: {
    // padding: "2px 4px",
    // // marginTop:'20px',
    // display: "flex",
    // alignItems: "center",
    // width: 345,
    // justifyContent: "center",
  },
  input: {
    // marginLeft: theme.spacing(2),
    // flex: 1,
  },
  iconButton: {
    // padding: 10,
  },
  divider: {
    // height: 28,
    // margin: 4,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  const opensearch = () => {
    console.log("clicked");
  };

  const toggleFilter = () => {};

  return (
    <div className={styles.searchbar}>
      <Paper component="form" className={styles.root}>
        <InputBase
          onClick={() => opensearch()}
          className={styles.input}
          placeholder="Enter location "
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton className={classes.iconButton} aria-label="mylocation">
          <MyLocationIcon />
        </IconButton>
      </Paper>
      <Paper component="form" className={styles.root}>
        <InputBase
          className={styles.input}
          placeholder="Search for restaurant, cuisine or dish..."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Button className={styles.btn} variant="contained" color="primary">
        Search
      </Button>
      <Paper className={styles.filterContainer} onClick={() => toggleFilter()}>
        <Typography>Filter</Typography>
        <IconButton className={styles.tuneButton} aria-label="mylocation">
          <TuneIcon className={styles.tuneIcon} />
        </IconButton>
      </Paper>
    </div>
  );
}
