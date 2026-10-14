import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalculateIcon from "@mui/icons-material/Calculate";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const features = [
  {
    icon: <SchoolIcon sx={{ fontSize: 26, color: "#60A5FA" }} />,
    iconBg: "rgba(37, 99, 235, 0.12)",
    accentColor: "#60A5FA",
    hoverBorder: "rgba(96, 165, 250, 0.35)",
    hoverShadow: "0 16px 32px -8px rgba(37, 99, 235, 0.2)",
    title: "Trading Academy",
    desc: "Master market fundamentals, candlestick patterns, and risk control with curated, interactive learning paths.",
    link: "/education",
    cta: "Explore Lessons",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 26, color: "#34D399" }} />,
    iconBg: "rgba(16, 185, 129, 0.12)",
    accentColor: "#34D399",
    hoverBorder: "rgba(52, 211, 153, 0.35)",
    hoverShadow: "0 16px 32px -8px rgba(16, 185, 129, 0.2)",
    title: "Portfolio Intelligence",
    desc: "Uncover macro trends, analyze sectoral momentum, and optimize your asset allocation with institutional data.",
    link: "/grow",
    cta: "Explore Strategies",
  },
  {
    icon: <CalculateIcon sx={{ fontSize: 26, color: "#C084FC" }} />,
    iconBg: "rgba(168, 85, 247, 0.12)",
    accentColor: "#C084FC",
    hoverBorder: "rgba(192, 132, 252, 0.35)",
    hoverShadow: "0 16px 32px -8px rgba(168, 85, 247, 0.2)",
    title: "Investment Simulator",
    desc: "Backtest your ideas and model compounding portfolio returns against real-world assets without capital risk.",
    link: "/investsimulator",
    cta: "Launch Simulator",
  },
];

function ContentTop() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#0B0F19",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", maxWidth: 680, mx: "auto", mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#60A5FA",
              fontWeight: 700,
              display: "block",
              mb: 1.5,
              fontSize: "0.75rem",
            }}
          >
            Comprehensive Ecosystem
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.85rem", sm: "2.35rem", md: "2.75rem" },
              fontWeight: 800,
              color: "#F8FAFC",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Explore Endless Possibilities with MarketWise
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              lineHeight: 1.65,
            }}
          >
            Every tool you need to track global markets, analyze market cycles, and refine your trading strategies in one unified interface.
          </Typography>
        </Box>

        {/* 3 Simple, Clean Cards */}
        <Grid container spacing={3}>
          {features.map((feat, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: { xs: 3, md: 3.5 },
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: feat.hoverBorder,
                    boxShadow: feat.hoverShadow,
                    "& .card-cta-icon": {
                      transform: "translateX(4px)",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      backgroundColor: feat.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    {feat.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#F8FAFC",
                      mb: 1.5,
                      fontSize: "1.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feat.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#94A3B8",
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {feat.desc}
                  </Typography>
                </CardContent>

                <Button
                  component={RouterLink}
                  to={feat.link}
                  endIcon={
                    <ArrowForwardIcon
                      className="card-cta-icon"
                      sx={{
                        fontSize: "16px !important",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  }
                  sx={{
                    alignSelf: "flex-start",
                    p: 0,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: feat.accentColor,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                    },
                  }}
                >
                  {feat.cta}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ContentTop;
