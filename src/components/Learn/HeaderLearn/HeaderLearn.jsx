import React from "react";
import logo from "../../../assets/profit(1).png";
import HeaderLearnStyles from "../../../styles/Learn/HeaderLearnStyles";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  useMediaQuery,
  Box,
} from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import StartIcon from "@mui/icons-material/Start";
import CategoryIcon from "@mui/icons-material/Category";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function HeaderLearn(props) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const HeaderLearnClasses = HeaderLearnStyles();
  return (
    <div>
      {isMatch ? (
        <div>
          <nav>
            <AppBar
              sx={{
                backgroundColor: "hsla(0, 0%, 0%, 0)",
                boxShadow: "none",
              }}
            >
              <Toolbar
                sx={{
                  backgroundColor: "hsla(0, 0%, 0%, 0)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className={HeaderLearnClasses.learnnavfirstdiv}>
                  <img
                    className={HeaderLearnClasses.logoimg}
                    src={logo}
                    alt="logo"
                  ></img>
                  <Button
                    href="/education"
                    sx={{
                      color: "white",
                      border: "1px solid grey",
                      borderRadius: "15px",
                      marginLeft: "15px",
                      "&:hover": {
                        border: "2px solid white",
                      },
                    }}
                  >
                    Start here
                  </Button>
                </div>
                <div className={HeaderLearnClasses.learnnavcenterdiv}>
                  <Typography variant="h4" sx={{ fontFamily: "Mangal" }}>
                    Trade View
                  </Typography>
                </div>
                <div>
                  <NavLink
                    className={HeaderLearnClasses.learnnavlink}
                    to="trade"
                  >
                    About Tradeview
                  </NavLink>
                  <NavLink className={HeaderLearnClasses.learnnavlink}>
                    Log-in
                  </NavLink>
                  <NavLink className={HeaderLearnClasses.learnnavlink}>
                    Sign-up
                  </NavLink>
                </div>
              </Toolbar>
            </AppBar>
          </nav>
        </div>
      ) : (
        <Box>
          <CssBaseline />
          <AppBar
            position="fixed"
            open={open}
            sx={{
              backgroundColor: "#002244",
              boxShadow: "none",
              border: "none",
            }}
          >
            <Toolbar sx={{ backgroundColor: "#002244" }}>
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
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Start Here" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton href="/">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>
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
      )}
    </div>
  );
}

export default HeaderLearn;
