import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Paper } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import './SearchDish.css';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({

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
  
  
  }));

export default function SearchDish() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const classes = useStyles();
  return (
    <FormGroup row className="container">
      <Paper className="space">
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search dishes..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      </Paper>
      <Paper className="space">  
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedC} onChange={handleChange} name="checkedG" />}
        label="Veg"
      />
     </Paper>
     <Paper className="space">
     <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label="Favourite"
      />
     </Paper>
    </FormGroup>
  );
}
