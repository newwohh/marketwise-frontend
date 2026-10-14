import React from "react";
import { Box, Container, Grid, Typography, IconButton, Divider, Chip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle = {
    color: "#94A3B8",
    textDecoration: "none",
    fontSize: "0.875rem",
    lineHeight: 2,
    display: "block",
    transition: "color 0.2s ease",
    "&:hover": {
      color: "#60A5FA",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0B0F19",
        color: "#F8FAFC",
        borderTop: "1px solid #1E293B",
        pt: { xs: 8, md: 10 },
        pb: 5,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Brand & Overview */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
              <Box
                component="img"
                src={logo}
                alt="MarketWise Logo"
                sx={{ width: 36, height: 36, borderRadius: "9px", objectFit: "contain", boxShadow: "0 0 12px rgba(37, 99, 235, 0.25)" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                }}
              >
                MarketWise
              </Typography>
              <Chip
                label="LIVE"
                size="small"
                sx={{
                  height: 20,
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  backgroundColor: "rgba(16, 185, 129, 0.15)",
                  color: "#34D399",
                  borderRadius: "6px",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ color: "#94A3B8", lineHeight: 1.7, maxWidth: 360, mb: 3 }}
            >
              Institutional-grade market intelligence, live cryptocurrency and stock tracking, interactive heatmaps, and simulation tools built for the modern investor.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                aria-label="GitHub"
                sx={{
                  color: "#94A3B8",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  "&:hover": { color: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                sx={{
                  color: "#94A3B8",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  "&:hover": { color: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                sx={{
                  color: "#94A3B8",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  "&:hover": { color: "#FFFFFF", backgroundColor: "rgba(255, 255, 255, 0.1)" },
                }}
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Column 2: Markets */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.75rem",
                mb: 2,
              }}
            >
              Markets
            </Typography>
            <Box component={RouterLink} to="/cryptocurrency" sx={linkStyle}>
              Cryptocurrency
            </Box>
            <Box component={RouterLink} to="/stocks" sx={linkStyle}>
              Stock Market
            </Box>
            <Box component={RouterLink} to="/heatmap/cryptocurrency" sx={linkStyle}>
              Crypto Heatmaps
            </Box>
            <Box component={RouterLink} to="/heatmap/stocks" sx={linkStyle}>
              Stock Heatmaps
            </Box>
            <Box component={RouterLink} to="/explore" sx={linkStyle}>
              Explore Assets
            </Box>
          </Grid>

          {/* Column 3: Tools & Resources */}
          <Grid item xs={6} sm={4} md={2.5}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.75rem",
                mb: 2,
              }}
            >
              Tools & Learn
            </Typography>
            <Box component={RouterLink} to="/investsimulator" sx={linkStyle}>
              Investment Simulator
            </Box>
            <Box component={RouterLink} to="/education" sx={linkStyle}>
              Trading Academy
            </Box>
            <Box component={RouterLink} to="/grow" sx={linkStyle}>
              Growth Strategies
            </Box>
            <Box component={RouterLink} to="/blogs" sx={linkStyle}>
              Market Insights & Blog
            </Box>
            <Box component={RouterLink} to="/chat" sx={linkStyle}>
              AI Support Chat
            </Box>
          </Grid>

          {/* Column 4: Platform */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                color: "#FFFFFF",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.75rem",
                mb: 2,
              }}
            >
              Platform
            </Typography>
            <Box component={RouterLink} to="/about" sx={linkStyle}>
              About MarketWise
            </Box>
            <Box component={RouterLink} to="/subscription" sx={linkStyle}>
              Pricing & Plans
            </Box>
            <Box component={RouterLink} to="/user_protection" sx={linkStyle}>
              Security & Protection
            </Box>
            <Box component={RouterLink} to="/faq" sx={linkStyle}>
              Frequently Asked Questions
            </Box>
            <Box component={RouterLink} to="/profile" sx={linkStyle}>
              User Account
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#1E293B" }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: "#64748B" }}>
            © {currentYear} MarketWise. All rights reserved. For educational and tracking purposes only. Not financial advice.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#10B981",
                boxShadow: "0 0 8px #10B981",
              }}
            />
            <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 500 }}>
              Live Market Feeds Operational
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
