import React from "react";
import {
  AppBar,
  CssBaseline,
  Button,
  Toolbar,
  useMediaQuery,
  Box,
  List,
  Typography,
  ListItem,
} from "@mui/material";
import logo from "../../assets/profit(1).png";
import useHeaderGrowStyles from "../../styles/Grow/HeaderGrowStyles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import StartIcon from "@mui/icons-material/Start";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CategoryIcon from "@mui/icons-material/Category";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Person2Icon from "@mui/icons-material/Person2";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function HeaderGrow() {
  const HeaderGrowClass = useHeaderGrowStyles();
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
          sx={{
            backgroundColor: "hsla(0, 0%, 0%, 0)",
            border: 0,
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "hsla(0, 0%, 0%, 0)",
              border: "none",
              height: "80px",
              boxShadow: "none",
            }}
          >
            <div className={HeaderGrowClass.navbargrow}>
              <div className={HeaderGrowClass.headersubdiv}>
                <img
                  src={logo}
                  alt="logoingrow"
                  className={HeaderGrowClass.logogrow}
                />
              </div>
              <div className={HeaderGrowClass.headersubdiv}>
                <Button href="/login" sx={{ color: "white" }}>
                  Log in
                </Button>
                <Button sx={{ color: "white", marginLeft: "30px" }}>
                  Products
                </Button>
              </div>
              <div className={HeaderGrowClass.headersubdiv}>
                <Button
                  sx={{
                    color: "white",
                    width: "200px",
                    borderRadius: "15px",
                    border: "1px solid white",
                    marginLeft: "35px",
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
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
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Register" />
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
    </header>
  );
}

export default HeaderGrow;
