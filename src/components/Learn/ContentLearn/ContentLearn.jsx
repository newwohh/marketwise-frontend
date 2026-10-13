import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Paper,
  Grid,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import MonitorIcon from "@mui/icons-material/Monitor";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { contentLearnData } from "../../../dev-data/data";
import ContentSection from "./ContentSection";

function ContentLearn() {
  const sectionIds = [
    "what-is-trading",
    "open-account",
    "read-trading",
    "learn-analyze",
    "practice-trading",
    "manage-risk",
  ];

  const quickJump = [
    { label: "What is Trading", id: "what-is-trading", icon: <ShowChartIcon fontSize="small" /> },
    { label: "Trading Accounts", id: "open-account", icon: <AccountBalanceIcon fontSize="small" /> },
    { label: "Market Reading", id: "read-trading", icon: <AutoStoriesIcon fontSize="small" /> },
    { label: "Technical Analysis", id: "learn-analyze", icon: <LocalLibraryIcon fontSize="small" /> },
    { label: "Practice Simulator", id: "practice-trading", icon: <MonitorIcon fontSize="small" /> },
    { label: "Risk Management", id: "manage-risk", icon: <ShieldOutlinedIcon fontSize="small" /> },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 740, mx: "auto", mb: { xs: 5, md: 8 } }}>
          <Chip
            icon={<SchoolIcon sx={{ fontSize: "16px !important", color: "#2563EB" }} />}
            label="TRADING ACADEMY & KNOWLEDGE BASE"
            size="small"
            sx={{
              fontWeight: 800,
              fontSize: "0.72rem",
              bgcolor: "rgba(37, 99, 235, 0.08)",
              color: "#2563EB",
              mb: 2,
              borderRadius: "6px",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.1rem", md: "3rem" },
              color: "#0F172A",
              letterSpacing: "-0.03em",
              mb: 2,
            }}
          >
            The Ultimate Guide to Trading
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", lineHeight: 1.7, fontSize: "1.05rem" }}>
            Whether you are taking your first steps into crypto or refining equity swing trading strategies, our structured curriculum provides actionable principles.
          </Typography>
        </Box>

        {/* Quick Jump Bar */}
        <Paper
          elevation={0}
          sx={{
            p: 2.5,
            mb: 6,
            borderRadius: "18px",
            border: "1px solid #E2E8F0",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
          }}
        >
          <Typography variant="caption" sx={{ fontWeight: 800, color: "#64748B", letterSpacing: "0.08em", display: "block", mb: 1.5, textTransform: "uppercase" }}>
            Curriculum Quick Navigation
          </Typography>
          <Grid container spacing={1.5}>
            {quickJump.map((item, idx) => (
              <Grid item xs={6} sm={4} md={2} key={idx}>
                <Chip
                  icon={item.icon}
                  label={item.label}
                  clickable
                  onClick={() => handleScrollTo(item.id)}
                  sx={{
                    width: "100%",
                    height: 38,
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    bgcolor: "#F8FAFC",
                    border: "1px solid #E2E8F0",
                    color: "#334155",
                    "&:hover": {
                      bgcolor: "rgba(37, 99, 235, 0.08)",
                      borderColor: "#2563EB",
                      color: "#2563EB",
                    },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Curriculum Sections */}
        <Box>
          {contentLearnData.map((el, i) => (
            <ContentSection
              el={el}
              key={i}
              sectionId={sectionIds[i] || `section-${i}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default ContentLearn;
