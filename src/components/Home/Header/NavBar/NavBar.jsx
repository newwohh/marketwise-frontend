import React, { useState, useEffect } from "react";
import { useContext } from "react";
import useStyles from "../../../../styles/Home/NavBarStyles";
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  CircularProgress,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import logo from "./../../../../assets/profit(1).png";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useTheme } from "@mui/material/styles";
import { MyContext } from "../../../../context/Context";
import NavbarMobile from "./NavbarMobile";
import MarketCollapse from "./MarketCollapse";
import { userLogout } from "../../../../api";

function NavBar() {
  let name;
  const { user } = useContext(MyContext);
  const [collapse, setCollapse] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openFor = Boolean(anchorEl);
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const changeBackground = () => {
    if (window.scrollY >= 1000) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const openCollapse = () => {
    setCollapse(!collapse);
  };

  !user ? (name = "please wait") : (name = user.user.name);
  return (
    <nav style={{ backgroundColor: "hsla(0, 0%, 0%, 0)" }}>
      {isMatch ? (
        <NavbarMobile />
      ) : (
        <AppBar
          sx={{
            backgroundColor: "hsla(0, 0%, 0%, 0)",
            boxShadow: "none",
            border: "none",
          }}
        >
          <CssBaseline />
          <Toolbar style={navbar ? classes.toolbar : classes.shownav}>
            <div style={classes.navdivone}>
              <img src={logo} alt="logo" style={classes.logoimg} />
              <Typography variant="h5" style={classes.logo}></Typography>
            </div>
            <div style={classes.navdivtwo}>
              <Button
                href="/"
                // color="inherit"
                variant="text"
                sx={{
                  marginLeft: "15px",
                  fontWeight: 300,
                  borderRadius: "10px",
                  color: "white",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "gainsboro",
                  },
                }}
              >
                Home
              </Button>
              <Button
                variant="text"
                href="/about"
                sx={{
                  marginLeft: "15px",
                  fontWeight: 300,
                  borderRadius: "10px",
                  color: "white",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "gainsboro",
                  },
                }}
              >
                About
              </Button>
              <Button
                color="inherit"
                sx={{
                  marginLeft: "15px",
                  fontWeight: 300,
                  borderRadius: "10px",
                  color: "white",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "gainsboro",
                  },
                }}
                onClick={openCollapse}
                onMouseEnter={openCollapse}
              >
                Products
              </Button>
              <MarketCollapse collapse={collapse} openCollapse={openCollapse} />
              <Button
                color="inherit"
                // variant="outlined"
                sx={{
                  marginLeft: "15px",
                  fontWeight: 300,
                  borderRadius: "10px",
                  color: "white",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "gainsboro",
                  },
                }}
              >
                News
              </Button>
              <Button
                color="inherit"
                sx={{
                  marginLeft: "15px",
                  fontWeight: 300,
                  borderRadius: "10px",
                  color: "white",
                  "&:hover": {
                    color: "black",
                    backgroundColor: "gainsboro",
                  },
                }}
              >
                Community
              </Button>
            </div>
            <div style={classes.navdivthree}>
              <Link
                style={{
                  color: "white",
                  display: "flex",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {user ? (
                  <IconButton onClick={handleClick} size="small">
                    <Avatar
                      sx={{
                        color: "white",
                        marginLeft: "5px",
                      }}
                    >
                      {!user || user === null ? (
                        <CircularProgress />
                      ) : (
                        name[0].toUpperCase()
                      )}
                    </Avatar>
                  </IconButton>
                ) : (
                  <Person2Icon />
                )}
              </Link>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openFor}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Link
                  to={"/profile"}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <MenuItem>
                    <Avatar /> Profile
                  </MenuItem>
                </Link>
                <Link style={{ color: "black", textDecoration: "none" }}>
                  <MenuItem>
                    <Avatar /> Write Blog
                  </MenuItem>
                </Link>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <Link
                  onClick={() => userLogout()}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Link>
              </Menu>
              <Button
                href="/login"
                sx={{
                  width: "170px",
                  height: "40px",
                  fontWeight: 1000,
                  borderRadius: 10,
                  marginLeft: "7px",
                  color: "white",
                  border: "2px solid #F5F5F5",
                  "&:hover": {
                    backgroundColor: "#F5F5F5",
                    color: "black",
                    border: "2px solid #F5F5F5",
                  },
                }}
                variant="outlined"
              >
                Get Started
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </nav>
  );
}

export default NavBar;
