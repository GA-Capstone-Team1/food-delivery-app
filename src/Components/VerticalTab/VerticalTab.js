import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { selectedMenu } from "../../Redux/Restaurant/Actions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     'aria-controls': `vertical-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid rgb(255, 193, 32)`,
  },
}));

function VerticalTabs({ activeMenu }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const values = ["pizza", "pasta", "fries", "sandwich"];
  const handleChange = (event, newValue) => {
    setValue(newValue);
    activeMenu(values[newValue]);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Pizza" />
        <Tab label="Pasta" />
        <Tab label="fries" />
        <Tab label="sandwich" />
      </Tabs>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    activeMenu: (value) => dispatch(selectedMenu(value)),
  };
};

export default connect(null, mapDispatchToProps)(VerticalTabs);
