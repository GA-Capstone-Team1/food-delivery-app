import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
//import Switch from '@material-ui/core/Switch';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import logo from "../../images/reslogo2.png";
import { CardMedia, Tooltip } from "@material-ui/core";
import Cart from "../../Components/Cart/Cart";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function Navbar() {
  const history = useHistory();
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const authenticated = useSelector((state) => state.auth.authenticated);
  const userName = useSelector((state) => state.auth.userName);

  useEffect(() => {}, [userName]);

  console.log(userName, authenticated);
  const handleSignIn = () => {
    history.push("/signup");
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#ffc120" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <CardMedia image={logo}></CardMedia>
            <Typography>OrderNow</Typography>
          </IconButton>

          <Typography variant="h6" className={classes.title}></Typography>
          <div>
            <Tooltip
              title={
                <div className={styles.tooltip}>
                  <Cart></Cart>
                </div>
              }
              className={{
                tooltip: styles.customTooltip,
                arrow: styles.customTooltip,
              }}
              style={{ color: "#ffffff" }}
            >
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                style={{ marginRight: "5px" }}
              >
                <ShoppingCartRoundedIcon />
                <Typography className={styles.signInText}>Cart</Typography>
              </IconButton>
            </Tooltip>
            {authenticated ? (
              <>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  style={{ marginLeft: "0px" }}
                >
                  <AccountCircle />
                  <Typography className={styles.signInText}>
                    {userName}
                  </Typography>
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Orders</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => handleSignIn()}
                color="inherit"
                style={{ marginLeft: "0px" }}
                className={styles.signin}
              >
                <AccountCircle />
                <Typography className={styles.signInText}>SignIn</Typography>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
