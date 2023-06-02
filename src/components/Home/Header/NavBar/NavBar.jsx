import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { Link } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BarChartIcon from "@mui/icons-material/BarChart";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function NavBar() {
  const [collapse, setCollapse] = useState(false);
  const [expandIcon, setExpandIcon] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 1000) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });
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
                Trade View
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
                        to="/heatmap/cryptocurrency"
                        className={classes.listitemlink}
                      >
                        <LocalFireDepartmentIcon
                          className={classes.productlisticon}
                        />
                        <Typography variant="">Heat Map</Typography>
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center" className={classes.listitem}>
                      <Link className={classes.listitemlink}>
                        <BarChartIcon className={classes.productlisticon} />
                        Charts
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center" className={classes.listitem}>
                      <Link className={classes.listitemlink}>
                        {" "}
                        <BookIcon className={classes.productlisticon} />
                        Blogs
                      </Link>
                    </ListItem>
                    <ListItem alignItems="center" className={classes.listitem}>
                      <Link className={classes.listitemlink}>
                        {" "}
                        <FeaturedPlayListIcon
                          className={classes.productlisticon}
                        />
                        Features
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
                          <Link className={classes.listitemlinkoverview}>
                            <ShowChartIcon className={classes.overviewicon} />
                            Share Market
                          </Link>
                        </ListItem>
                        <ListItem className={classes.listitemoverview}>
                          <Link className={classes.listitemlinkoverview}>
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
                Community
              </Button>
            </div>
            <div className={classes.navdivthree}>
              <Person2Icon />
              <Button
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
