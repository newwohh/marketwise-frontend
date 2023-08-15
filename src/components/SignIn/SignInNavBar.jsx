import React from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import logo from "../../assets/profit(1).png";
// import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import useSignIn from "../../styles/SignIn/SignInStyles";
import { styled, useTheme } from "@mui/material/styles";
import Person2Icon from "@mui/icons-material/Person2";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function SignInNavbar() {
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const signInClass = useSignIn;
  return (
    <header>
      <nav>
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
              <Toolbar
                sx={{ backgroundColor: "hsla(0, 0%, 0%, 0)", color: "black" }}
              >
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
                <ListItem key={"Log-in"} disablePadding>
                  <ListItemButton href="/signin">
                    <ListItemIcon>{<Person2Icon />}</ListItemIcon>
                    <ListItemText primary={"Log-in"} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Drawer>
          </Box>
        ) : (
          <AppBar
            sx={{
              backgroundColor: "#F0F8FF",
              boxShadow: "none",
              padding: "20px",
            }}
          >
            <div style={signInClass.signinNav}>
              <div>
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
              <div>
                <Button sx={{ color: "black", marginRight: "30px" }}>
                  Get Started
                </Button>
                <Button sx={{ color: "black" }}>Sign up</Button>
              </div>
            </div>
          </AppBar>
        )}
      </nav>
    </header>
  );
}

export default SignInNavbar;
