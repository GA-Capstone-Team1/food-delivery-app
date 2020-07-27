
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import './SearchBar.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    // marginTop:'20px',
    display: 'flex',
    alignItems: 'center',
    width: 185,
    justifyContent: 'center',
  },
  root1: {
    padding: '2px 4px',
    // marginTop:'20px',
    display: 'flex',
    alignItems: 'center',
    width: 345,
    justifyContent: 'center',
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (

    <div className="searchbar">
    <Paper component="form" className={classes.root}>
      
      <InputBase
        className={classes.input}
        placeholder="Enter location "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton className={classes.iconButton} aria-label="mylocation">
        <MyLocationIcon/>
      </IconButton>
      
    </Paper>
    <Paper component="form" className={classes.root1}>
      <InputBase
        className={classes.input}
        placeholder="Search for restaurant, cuisine or dish..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>

    </Paper>
    <Button variant="contained" color="primary">Search</Button>
    </div>
  );
}
