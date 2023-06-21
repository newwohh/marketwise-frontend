import React, { useState, useEffect } from "react";
import { useContext } from "react";
import useStyles from "../../../../styles/Home/NavBarStyles";
import {
  AppBar,
  Collapse,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  Container,
  List,
  ListItem,
  useMediaQuery,
  Box,
  CircularProgress,
  Avatar,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BarChartIcon from "@mui/icons-material/BarChart";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import {
  ExpandLess,
  ExpandMore,
  Logout,
  PersonAdd,
  Settings,
} from "@mui/icons-material";
import BookIcon from "@mui/icons-material/Book";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import logo from "./../../../../assets/profit(1).png";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { backendBaseUrl } from "../../../../constants/constants";
import { MyContext } from "../../../../context/Context";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function NavBar() {
  let name;
  const { user } = useContext(MyContext);
  const [collapse, setCollapse] = useState(false);
  const [expandIcon, setExpandIcon] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openFor = Boolean(anchorEl);
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);
  const navigation = useNavigate();
  const changeBackground = () => {
    if (window.scrollY >= 1000) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const openCollapse = () => {
    setCollapse(!collapse);
  };
  const expand = () => {
    setExpandIcon(!expandIcon);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const directHeatmap = async () => {
    const request = await fetch(backendBaseUrl + "api/v1/users/heatmap", {
      credentials: "include",
    });
    const response = await request.json();
    if (response.status === "success") {
      navigation("/heatmap/stocks");
    } else {
      navigation("/login");
    }
  };

  !user ? (name = "please wait") : (name = user.user.name);
  return (
    <nav style={{ backgroundColor: "hsla(0, 0%, 0%, 0)" }}>
      {isMatch ? (
        <Box>
          <CssBaseline />
          <AppBar
            position="fixed"
            open={open}
            sx={{
              backgroundColor: "hsla(0, 0%, 0%, 0)",
              boxShadow: "none",
              border: "none",
            }}
          >
            <Toolbar sx={{ backgroundColor: "hsla(0, 0%, 0%, 0)" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  mr: 2,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                MarketWise
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              backgroundColor: "#002244",
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Products", "Community", "About"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["Log-in"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 !== 0 ? "error getting icon" : <Person2Icon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      ) : (
        <AppBar
          sx={{
            backgroundColor: "hsla(0, 0%, 0%, 0)",
            boxShadow: "none",
            border: "none",
          }}
        >
          <CssBaseline />
          <Toolbar className={navbar ? classes.toolbar : classes.shownav}>
            <div className={classes.navdivone}>
              <img src={logo} alt="logo" className={classes.logoimg} />
              <Typography variant="h5" className={classes.logo}></Typography>
            </div>
            <div className={classes.navdivtwo}>
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
              <Collapse
                in={collapse}
                timeout="auto"
                unmountOnExit
                className={classes.collapse}
                sx={{ width: 300, position: "absolute" }}
              >
                <Container
                  className={classes.expanded}
                  sx={{
                    width: 300,
                    position: "absolute",
                    marginLeft: "170px",
                  }}
                  onMouseLeave={openCollapse}
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                    }}
                  >
                    <ListItem alignItems="center" className={classes.listitem}>
                      <Link
                        className={classes.listitemlink}
                        onClick={() => directHeatmap()}
                      >
                        <LocalFireDepartmentIcon
                          className={classes.productlisticon}
                        />
                        <Typography variant="">Heat Map</Typography>
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center" className={classes.listitem}>
                      <Link to="subscription" className={classes.listitemlink}>
                        <BarChartIcon className={classes.productlisticon} />
                        Subscription
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center" className={classes.listitem}>
                      <Link to="/blogs" className={classes.listitemlink}>
                        {" "}
                        <BookIcon className={classes.productlisticon} />
                        Blogs
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center" className={classes.listitem}>
                      <Link
                        to="/investsimulator"
                        className={classes.listitemlink}
                      >
                        {" "}
                        <FeaturedPlayListIcon
                          className={classes.productlisticon}
                        />
                        Invest Simulator
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center" className={classes.listitem}>
                      <Link className={classes.listitemlink} onClick={expand}>
                        <ViewCompactIcon className={classes.productlisticon} />
                        Overview of Markets
                      </Link>
                      {expandIcon ? (
                        <ExpandLess
                          sx={{ marginLeft: "7px", color: "black" }}
                        />
                      ) : (
                        <ExpandMore
                          sx={{ marginLeft: "7px", color: "black" }}
                        />
                      )}
                    </ListItem>
                    <Collapse
                      in={expandIcon}
                      timeout="auto"
                      unmountOnExit
                      className={classes.collapse}
                    >
                      <List>
                        <ListItem className={classes.listitemoverview}>
                          <Link
                            to="stocks"
                            className={classes.listitemlinkoverview}
                          >
                            <ShowChartIcon className={classes.overviewicon} />
                            Share Market
                          </Link>
                        </ListItem>
                        <ListItem className={classes.listitemoverview}>
                          <Link
                            to="cryptocurrency"
                            className={classes.listitemlinkoverview}
                          >
                            <CurrencyBitcoinIcon
                              className={classes.overviewicon}
                            />
                            CryptoCurrency
                          </Link>
                        </ListItem>
                        <ListItem className={classes.listitemoverview}>
                          <Link className={classes.listitemlinkoverview}>
                            <CurrencyExchangeIcon
                              className={classes.overviewicon}
                            />
                            Foreign Exchange
                          </Link>
                        </ListItem>
                      </List>
                    </Collapse>
                  </List>
                </Container>
              </Collapse>
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
            <div className={classes.navdivthree}>
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
                <Link
                  to={"/profile/writeblogs"}
                  style={{ color: "black", textDecoration: "none" }}
                >
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
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
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
