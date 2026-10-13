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
    icon: <SchoolIcon sx={{ fontSize: 28, color: "#2563EB" }} />,
    bg: "rgba(37, 99, 235, 0.08)",
    border: "rgba(37, 99, 235, 0.2)",
    title: "Trading Academy",
    desc: "Master market fundamentals, candlestick patterns, and risk control with curated, interactive learning paths.",
    link: "/education",
    cta: "Explore Lessons",
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28, color: "#10B981" }} />,
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.2)",
    title: "Portfolio Intelligence",
    desc: "Uncover macro trends, analyze sectoral momentum, and optimize your asset allocation with institutional data.",
    link: "/grow",
    cta: "Explore Strategies",
  },
  {
    icon: <CalculateIcon sx={{ fontSize: 28, color: "#8B5CF6" }} />,
    bg: "rgba(139, 92, 246, 0.08)",
    border: "rgba(139, 92, 246, 0.2)",
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
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", maxWidth: 680, mx: "auto", mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#2563EB",
              fontWeight: 700,
              display: "block",
              mb: 1,
            }}
          >
            Comprehensive Ecosystem
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.85rem", md: "2.5rem" },
              fontWeight: 800,
              color: "#0F172A",
              mb: 2,
            }}
          >
            Explore Endless Possibilities with MarketWise
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", lineHeight: 1.6 }}>
            Every tool you need to track global markets, analyze market cycles, and refine your trading strategies in one unified interface.
          </Typography>
        </Box>

        {/* 3-Column Features Grid */}
        <Grid container spacing={3.5}>
          {features.map((feat, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: { xs: 3, md: 3.5 },
                  borderRadius: "18px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px -6px rgba(0, 0, 0, 0.08)",
                    borderColor: feat.border,
                  },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: "12px",
                      backgroundColor: feat.bg,
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
                    sx={{ fontWeight: 700, color: "#0F172A", mb: 1.5, fontSize: "1.25rem" }}
                  >
                    {feat.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.65, mb: 3 }}>
                    {feat.desc}
                  </Typography>
                </CardContent>

                <Button
                  component={RouterLink}
                  to={feat.link}
                  endIcon={<ArrowForwardIcon sx={{ fontSize: "16px !important" }} />}
                  sx={{
                    alignSelf: "flex-start",
                    p: 0,
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "#2563EB",
                    "&:hover": { backgroundColor: "transparent", color: "#1D4ED8" },
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
