import React, { useState, useContext, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
  Chip,
} from "@mui/material";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CalculateIcon from "@mui/icons-material/Calculate";
import SchoolIcon from "@mui/icons-material/School";
import ArticleIcon from "@mui/icons-material/Article";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import logo from "../../../../assets/logo.png";
import { MyContext } from "../../../../context/Context";
import { userLogout } from "../../../../api";

function NavBar({ transparent } = {}) {
  const { user } = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isLanding = Boolean(transparent) || location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isLanding) {
      setScrolled(false);
      return;
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLanding]);

  // Desktop Menu states
  const [marketsAnchor, setMarketsAnchor] = useState(null);
  const [toolsAnchor, setToolsAnchor] = useState(null);
  const [userAnchor, setUserAnchor] = useState(null);

  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);

  const userName = user?.user?.name || user?.name || "Trader";
  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    setUserAnchor(null);
    setMobileOpen(false);
    await userLogout();
  };

  const isActive = (path) => location.pathname === path;

  return (
    <AppBar
      position={isLanding ? "fixed" : "sticky"}
      elevation={0}
      sx={{
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isLanding
          ? scrolled
            ? "rgba(15, 23, 42, 0.82)"
            : "transparent"
          : "rgba(255, 255, 255, 0.88)",
        backdropFilter: isLanding
          ? scrolled
            ? "blur(16px)"
            : "none"
          : "blur(16px)",
        WebkitBackdropFilter: isLanding
          ? scrolled
            ? "blur(16px)"
            : "none"
          : "blur(16px)",
        borderBottom: isLanding
          ? "none"
          : "1px solid rgba(226, 232, 240, 0.8)",
        boxShadow: isLanding
          ? scrolled
            ? "0 4px 24px rgba(0, 0, 0, 0.35)"
            : "none"
          : "0 1px 3px 0 rgba(0, 0, 0, 0.04)",
        color: isLanding ? "#FFFFFF" : "#0F172A",
        transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, justifyContent: "space-between" }}>
          {/* Logo & Brand */}
          <Box
            component={RouterLink}
            to="/"
            disableRipple
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              mr: 3,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="MarketWise Logo"
              sx={{
                width: 36,
                height: 36,
                borderRadius: "9px",
                objectFit: "contain",
                boxShadow: "0 0 12px rgba(37, 99, 235, 0.25)",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                fontSize: "1.25rem",
                letterSpacing: "-0.03em",
                background: isLanding
                  ? "linear-gradient(135deg, #FFFFFF 0%, #60A5FA 100%)"
                  : "linear-gradient(135deg, #0F172A 0%, #2563EB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MarketWise
            </Typography>
            <Chip
              label="PRO"
              size="small"
              sx={{
                height: 20,
                fontSize: "0.65rem",
                fontWeight: 700,
                backgroundColor: isLanding ? "rgba(96, 165, 250, 0.15)" : "rgba(37, 99, 235, 0.1)",
                color: isLanding ? "#60A5FA" : "#2563EB",
                border: isLanding ? "1px solid rgba(96, 165, 250, 0.3)" : "none",
                borderRadius: "6px",
              }}
            />
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1 }}>
            <Button
              component={RouterLink}
              to="/"
              sx={{
                color: isActive("/")
                  ? (isLanding ? "#60A5FA" : "#2563EB")
                  : (isLanding ? "#CBD5E1" : "#475569"),
                fontWeight: isActive("/") ? 700 : 500,
                px: 1.5,
                "&:hover": {
                  color: isLanding ? "#FFFFFF" : "#2563EB",
                  backgroundColor: isLanding ? "rgba(255, 255, 255, 0.08)" : "rgba(37, 99, 235, 0.04)",
                },
              }}
            >
              Home
            </Button>

            {/* Markets Dropdown */}
            <Button
              onClick={(e) => setMarketsAnchor(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18, color: isLanding ? "#94A3B8" : "inherit" }} />}
              sx={{
                color: ["/cryptocurrency", "/stocks", "/heatmap/cryptocurrency", "/heatmap/stocks"].includes(location.pathname)
                  ? (isLanding ? "#60A5FA" : "#2563EB")
                  : (isLanding ? "#CBD5E1" : "#475569"),
                fontWeight: 500,
                px: 1.5,
                "&:hover": {
                  color: isLanding ? "#FFFFFF" : "#2563EB",
                  backgroundColor: isLanding ? "rgba(255, 255, 255, 0.08)" : "rgba(37, 99, 235, 0.04)",
                },
              }}
            >
              Markets
            </Button>
            <Menu
              anchorEl={marketsAnchor}
              open={Boolean(marketsAnchor)}
              onClose={() => setMarketsAnchor(null)}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 220,
                  borderRadius: "14px",
                  border: "1px solid #E2E8F0",
                  p: 0.5,
                },
              }}
            >
              <MenuItem
                component={RouterLink}
                to="/cryptocurrency"
                onClick={() => setMarketsAnchor(null)}
                sx={{ borderRadius: "8px", py: 1 }}
              >
                <ListItemIcon>
                  <CurrencyBitcoinIcon fontSize="small" sx={{ color: "#F59E0B" }} />
                </ListItemIcon>
                <ListItemText primary="Cryptocurrency" secondary="Live prices & metrics" />
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/stocks"
                onClick={() => setMarketsAnchor(null)}
                sx={{ borderRadius: "8px", py: 1 }}
              >
                <ListItemIcon>
                  <ShowChartIcon fontSize="small" sx={{ color: "#10B981" }} />
                </ListItemIcon>
                <ListItemText primary="Stock Market" secondary="Equities & indices" />
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/heatmap/cryptocurrency"
                onClick={() => setMarketsAnchor(null)}
                sx={{ borderRadius: "8px", py: 1 }}
              >
                <ListItemIcon>
                  <LocalFireDepartmentIcon fontSize="small" sx={{ color: "#EF4444" }} />
                </ListItemIcon>
                <ListItemText primary="Market Heatmaps" secondary="Visual market momentum" />
              </MenuItem>
            </Menu>

            {/* Tools Dropdown */}
            <Button
              onClick={(e) => setToolsAnchor(e.currentTarget)}
              endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18, color: isLanding ? "#94A3B8" : "inherit" }} />}
              sx={{
                color: ["/investsimulator", "/education", "/grow"].includes(location.pathname)
                  ? (isLanding ? "#60A5FA" : "#2563EB")
                  : (isLanding ? "#CBD5E1" : "#475569"),
                fontWeight: 500,
                px: 1.5,
                "&:hover": {
                  color: isLanding ? "#FFFFFF" : "#2563EB",
                  backgroundColor: isLanding ? "rgba(255, 255, 255, 0.08)" : "rgba(37, 99, 235, 0.04)",
                },
              }}
            >
              Tools & Learn
            </Button>
            <Menu
              anchorEl={toolsAnchor}
              open={Boolean(toolsAnchor)}
              onClose={() => setToolsAnchor(null)}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: 230,
                  borderRadius: "14px",
                  border: "1px solid #E2E8F0",
                  p: 0.5,
                },
              }}
            >
              <MenuItem
                component={RouterLink}
                to="/investsimulator"
                onClick={() => setToolsAnchor(null)}
                sx={{ borderRadius: "8px", py: 1 }}
              >
                <ListItemIcon>
                  <CalculateIcon fontSize="small" sx={{ color: "#2563EB" }} />
                </ListItemIcon>
                <ListItemText primary="Invest Simulator" secondary="Paper trade & forecast" />
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/education"
                onClick={() => setToolsAnchor(null)}
                sx={{ borderRadius: "8px", py: 1 }}
              >
                <ListItemIcon>
                  <SchoolIcon fontSize="small" sx={{ color: "#8B5CF6" }} />
                </ListItemIcon>
                <ListItemText primary="Learn Academy" secondary="Trading fundamentals" />
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/grow"
                onClick={() => setToolsAnchor(null)}
                sx={{ borderRadius: "8px", py: 1 }}
              >
                <ListItemIcon>
                  <ArticleIcon fontSize="small" sx={{ color: "#06B6D4" }} />
                </ListItemIcon>
                <ListItemText primary="Portfolio Growth" secondary="Strategy insights" />
              </MenuItem>
            </Menu>

            <Button
              component={RouterLink}
              to="/subscription"
              sx={{
                color: isActive("/subscription")
                  ? (isLanding ? "#60A5FA" : "#2563EB")
                  : (isLanding ? "#CBD5E1" : "#475569"),
                fontWeight: isActive("/subscription") ? 700 : 500,
                px: 1.5,
                "&:hover": {
                  color: isLanding ? "#FFFFFF" : "#2563EB",
                  backgroundColor: isLanding ? "rgba(255, 255, 255, 0.08)" : "rgba(37, 99, 235, 0.04)",
                },
              }}
            >
              Pricing
            </Button>
            <Button
              component={RouterLink}
              to="/about"
              sx={{
                color: isActive("/about")
                  ? (isLanding ? "#60A5FA" : "#2563EB")
                  : (isLanding ? "#CBD5E1" : "#475569"),
                fontWeight: isActive("/about") ? 700 : 500,
                px: 1.5,
                "&:hover": {
                  color: isLanding ? "#FFFFFF" : "#2563EB",
                  backgroundColor: isLanding ? "rgba(255, 255, 255, 0.08)" : "rgba(37, 99, 235, 0.04)",
                },
              }}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/chat"
              sx={{
                color: isActive("/chat")
                  ? (isLanding ? "#60A5FA" : "#2563EB")
                  : (isLanding ? "#CBD5E1" : "#475569"),
                fontWeight: isActive("/chat") ? 700 : 500,
                px: 1.5,
                "&:hover": {
                  color: isLanding ? "#FFFFFF" : "#2563EB",
                  backgroundColor: isLanding ? "rgba(255, 255, 255, 0.08)" : "rgba(37, 99, 235, 0.04)",
                },
              }}
            >
              AI Assistant
            </Button>
          </Box>

          {/* User Status / CTA Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 1.5 }}>
            {user ? (
              <>
                <IconButton
                  onClick={(e) => setUserAnchor(e.currentTarget)}
                  sx={{
                    p: 0.5,
                    border: isLanding ? "2px solid rgba(255, 255, 255, 0.25)" : "2px solid #E2E8F0",
                    transition: "border-color 0.2s",
                    "&:hover": { borderColor: "#2563EB" },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 36,
                      height: 36,
                      bgcolor: "#2563EB",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                    }}
                  >
                    {userInitial}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={userAnchor}
                  open={Boolean(userAnchor)}
                  onClose={() => setUserAnchor(null)}
                  PaperProps={{
                    elevation: 3,
                    sx: {
                      mt: 1.5,
                      minWidth: 200,
                      borderRadius: "14px",
                      border: "1px solid #E2E8F0",
                      p: 0.5,
                    },
                  }}
                >
                  <Box sx={{ px: 2, py: 1.5 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#0F172A" }}>
                      {userName}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#64748B" }}>
                      {user?.user?.email || "Account Active"}
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem
                    component={RouterLink}
                    to="/profile"
                    onClick={() => setUserAnchor(null)}
                    sx={{ borderRadius: "8px" }}
                  >
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    Profile
                  </MenuItem>
                  <MenuItem
                    component={RouterLink}
                    to="/subscription"
                    onClick={() => setUserAnchor(null)}
                    sx={{ borderRadius: "8px" }}
                  >
                    <ListItemIcon>
                      <CardMembershipIcon fontSize="small" />
                    </ListItemIcon>
                    Subscription
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleLogout} sx={{ borderRadius: "8px", color: "#EF4444" }}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" sx={{ color: "#EF4444" }} />
                    </ListItemIcon>
                    Log Out
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to="/login"
                  sx={{
                    color: isLanding ? "#F8FAFC" : "#0F172A",
                    fontWeight: 600,
                    px: 2,
                    "&:hover": {
                      backgroundColor: isLanding ? "rgba(255, 255, 255, 0.1)" : "rgba(15, 23, 42, 0.05)",
                      color: isLanding ? "#FFFFFF" : "#0F172A",
                    },
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={RouterLink}
                  to="/sign-up"
                  variant="contained"
                  sx={{
                    px: 2.5,
                    py: 0.85,
                    borderRadius: "10px",
                    fontWeight: 600,
                    backgroundColor: "#2563EB",
                    color: "#FFFFFF",
                    boxShadow: isLanding
                      ? "0 4px 14px rgba(37, 99, 235, 0.45)"
                      : "0 4px 12px rgba(37, 99, 235, 0.25)",
                    "&:hover": {
                      backgroundColor: "#1D4ED8",
                    },
                  }}
                >
                  Get Started
                </Button>
              </>
            )}
          </Box>

          {/* Mobile Hamburger Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ color: isLanding ? "#FFFFFF" : "#0F172A", p: 1 }}
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 290,
            p: 2.5,
            backgroundColor: "#0B0F19",
            color: "#F8FAFC",
            borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box component="img" src={logo} alt="MarketWise" sx={{ width: 32, height: 32, borderRadius: "8px", objectFit: "contain" }} />
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#F8FAFC" }}>
              MarketWise
            </Typography>
          </Box>
          <IconButton onClick={() => setMobileOpen(false)} size="small" sx={{ color: "#94A3B8", "&:hover": { color: "#FFFFFF" } }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2, borderColor: "rgba(255, 255, 255, 0.08)" }} />

        <List sx={{ p: 0 }}>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/cryptocurrency"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CurrencyBitcoinIcon fontSize="small" sx={{ color: "#F59E0B" }} />
              </ListItemIcon>
              <ListItemText primary="Cryptocurrency" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/stocks"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <ShowChartIcon fontSize="small" sx={{ color: "#10B981" }} />
              </ListItemIcon>
              <ListItemText primary="Stocks" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/heatmap/cryptocurrency"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LocalFireDepartmentIcon fontSize="small" sx={{ color: "#EF4444" }} />
              </ListItemIcon>
              <ListItemText primary="Heatmaps" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/investsimulator"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CalculateIcon fontSize="small" sx={{ color: "#2563EB" }} />
              </ListItemIcon>
              <ListItemText primary="Simulator" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/education"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <SchoolIcon fontSize="small" sx={{ color: "#8B5CF6" }} />
              </ListItemIcon>
              <ListItemText primary="Learn Academy" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/subscription"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <CardMembershipIcon fontSize="small" sx={{ color: "#0EA5E9" }} />
              </ListItemIcon>
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/chat"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <SupportAgentIcon fontSize="small" sx={{ color: "#10B981" }} />
              </ListItemIcon>
              <ListItemText primary="AI Assistant" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/about"
              onClick={() => setMobileOpen(false)}
              sx={{ borderRadius: "8px", py: 1 }}
            >
              <ListItemIcon sx={{ minWidth: 36 }}>
                <HelpOutlineIcon fontSize="small" sx={{ color: "#64748B" }} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </List>

        <Box sx={{ mt: "auto", pt: 3 }}>
          <Divider sx={{ mb: 2, borderColor: "rgba(255, 255, 255, 0.08)" }} />
          {user ? (
            <Button
              fullWidth
              variant="outlined"
              color="error"
              onClick={handleLogout}
              startIcon={<LogoutIcon />}
              sx={{ borderRadius: "10px" }}
            >
              Log Out
            </Button>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button
                fullWidth
                component={RouterLink}
                to="/login"
                variant="outlined"
                onClick={() => setMobileOpen(false)}
                sx={{
                  borderRadius: "10px",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "#F8FAFC",
                  "&:hover": { borderColor: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.05)" },
                }}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                component={RouterLink}
                to="/sign-up"
                variant="contained"
                onClick={() => setMobileOpen(false)}
                sx={{
                  borderRadius: "10px",
                  backgroundColor: "#2563EB",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  "&:hover": { backgroundColor: "#1D4ED8" },
                }}
              >
                Get Started
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
