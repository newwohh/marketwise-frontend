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
import { Link as RouterLink } from "react-router-dom";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CalculateIcon from "@mui/icons-material/Calculate";
import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const exploreCategories = [
  {
    icon: <CurrencyBitcoinIcon sx={{ fontSize: 32, color: "#F59E0B" }} />,
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.25)",
    title: "Cryptocurrency Hub",
    desc: "Real-time spot order flow, market cap rankings, and token metrics for major layer-1s and DeFi protocols.",
    link: "/cryptocurrency",
    action: "Explore Crypto",
  },
  {
    icon: <ShowChartIcon sx={{ fontSize: 32, color: "#10B981" }} />,
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.25)",
    title: "Global Stock Markets",
    desc: "Institutional directory of public companies, primary exchange MICs, and corporate dividend calendars.",
    link: "/stocks",
    action: "Explore Equities",
  },
  {
    icon: <LocalFireDepartmentIcon sx={{ fontSize: 32, color: "#EF4444" }} />,
    bg: "rgba(239, 68, 68, 0.08)",
    border: "rgba(239, 68, 68, 0.25)",
    title: "Liquidity Heatmaps",
    desc: "Visual market sentiment and volume clustering across active digital assets and equities.",
    link: "/heatmap/cryptocurrency",
    action: "View Heatmaps",
  },
  {
    icon: <CalculateIcon sx={{ fontSize: 32, color: "#2563EB" }} />,
    bg: "rgba(37, 99, 235, 0.08)",
    border: "rgba(37, 99, 235, 0.25)",
    title: "Investment Simulator",
    desc: "Simulate multi-year compounding trajectories and evaluate risk profiles before committing capital.",
    link: "/investsimulator",
    action: "Open Simulator",
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 32, color: "#8B5CF6" }} />,
    bg: "rgba(139, 92, 246, 0.08)",
    border: "rgba(139, 92, 246, 0.25)",
    title: "Trading Academy",
    desc: "Curated learning paths covering candlestick patterns, Fibonacci levels, and portfolio risk management.",
    link: "/education",
    action: "Start Learning",
  },
  {
    icon: <CurrencyExchangeIcon sx={{ fontSize: 32, color: "#06B6D4" }} />,
    bg: "rgba(6, 182, 212, 0.08)",
    border: "rgba(6, 182, 212, 0.25)",
    title: "Foreign Exchange Pairs",
    desc: "Live currency crosses and interbank liquidity pairs for global macro tracking.",
    link: "/",
    action: "View Forex",
  },
];

function ContentExplore() {
  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#2563EB",
              fontWeight: 800,
              display: "block",
              mb: 1,
            }}
          >
            Discovery Hub
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: "#0F172A",
              letterSpacing: "-0.03em",
              mb: 1.5,
            }}
          >
            Explore Global Market Universes
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B" }}>
            Navigate seamlessly through cryptocurrencies, equities, visual heatmaps, and simulation toolsets.
          </Typography>
        </Box>

        {/* Categories Grid */}
        <Grid container spacing={3.5}>
          {exploreCategories.map((cat, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 3.5,
                  borderRadius: "20px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 12px 24px -6px rgba(0, 0, 0, 0.08)",
                    borderColor: cat.border,
                  },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "14px",
                      backgroundColor: cat.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    {cat.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#0F172A", mb: 1, fontSize: "1.25rem" }}>
                    {cat.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6, mb: 3 }}>
                    {cat.desc}
                  </Typography>
                </CardContent>

                <Button
                  component={RouterLink}
                  to={cat.link}
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    alignSelf: "flex-start",
                    p: 0,
                    fontWeight: 700,
                    color: "#2563EB",
                    fontSize: "0.9rem",
                    "&:hover": { bgcolor: "transparent", color: "#1D4ED8" },
                  }}
                >
                  {cat.action}
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ContentExplore;
