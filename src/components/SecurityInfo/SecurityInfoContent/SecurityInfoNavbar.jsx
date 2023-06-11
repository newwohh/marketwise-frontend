import React from "react";
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
import MailIcon from "@mui/icons-material/Mail";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/profit(1).png";
import { Link } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function SecurityInfoNavbar() {
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

  return (
    <header>
      {isMatch ? (
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#002244", height: "60px" }}
        >
          <Toolbar
            sx={{ display: "flex", alignItems: "center", height: "100px" }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ width: "40px", height: "40px" }}
              />
            </Link>
            <Button
              sx={{
                color: "white",
                width: "100px",
                height: "40px",
                marginLeft: "40px",
                "&:hover": {
                  border: "1px solid white",
                },
              }}
            >
              Log in
            </Button>
            <Button
              href="/explore"
              sx={{
                color: "white",
                width: "100px",
                height: "40px",
                marginLeft: "40px",
                "&:hover": {
                  border: "1px solid white",
                },
              }}
            >
              Explore
            </Button>
          </Toolbar>
        </AppBar>
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
      )}
    </header>
  );
}

export default SecurityInfoNavbar;
