import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Chip,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CalculateIcon from "@mui/icons-material/Calculate";
import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

// Ticker tape static fallback / default data
const defaultTickers = [
  { symbol: "BTC/USD", name: "Bitcoin", price: "$68,420.50", change: "+3.42%", up: true, link: "/cryptocurrency" },
  { symbol: "ETH/USD", name: "Ethereum", price: "$3,520.10", change: "+2.18%", up: true, link: "/cryptocurrency" },
  { symbol: "NVDA", name: "Nvidia", price: "$134.80", change: "+4.15%", up: true, link: "/stocks" },
  { symbol: "SPY", name: "S&P 500", price: "$574.80", change: "+0.45%", up: true, link: "/stocks" },
  { symbol: "EUR/USD", name: "Euro / USD", price: "1.0872", change: "-0.14%", up: false, link: "/forex" },
  { symbol: "SOL/USD", name: "Solana", price: "$182.40", change: "+6.85%", up: true, link: "/cryptocurrency" },
  { symbol: "AAPL", name: "Apple", price: "$228.60", change: "-0.32%", up: false, link: "/stocks" },
  { symbol: "TSLA", name: "Tesla", price: "$218.40", change: "+1.85%", up: true, link: "/stocks" },
  { symbol: "GOLD", name: "Spot Gold", price: "$2,654.10", change: "+0.72%", up: true, link: "/stocks" },
  { symbol: "GBP/USD", name: "British Pound", price: "1.3045", change: "+0.21%", up: true, link: "/forex" },
  { symbol: "MSFT", name: "Microsoft", price: "$422.50", change: "+0.85%", up: true, link: "/stocks" },
  { symbol: "BNB/USD", name: "BNB", price: "$594.20", change: "+1.12%", up: true, link: "/cryptocurrency" },
];

function ContentTop() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTimeframe, setActiveTimeframe] = useState("1D");
  const { prices } = useSelector((state) => state.marketwise);

  // Merge real prices into ticker tape if available
  const tickers =
    Array.isArray(prices) && prices.length >= 6
      ? prices.slice(0, 10).map((p) => {
          const change = parseFloat(p.percent_change_24h || p.percent_change_7d || 0);
          return {
            symbol: `${p.symbol || "COIN"}/USD`,
            name: p.name || p.symbol,
            price: `$${Number(p.price_usd || 0).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`,
            change: `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`,
            up: change >= 0,
            link: `/cryptocurrency/chart/${p.id || p.name.toLowerCase()}`,
          };
        })
      : defaultTickers;

  // Double tickers array for continuous infinite scroll
  const marqueeItems = [...tickers, ...tickers];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#080B11",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* 1. TradingView-Style Continuous Streaming Ticker Tape */}
      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          py: 1.2,
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(11, 15, 25, 0.8)",
          backdropFilter: "blur(12px)",
          position: "relative",
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "tradingViewMarquee 35s linear infinite",
            "&:hover": {
              animationPlayState: "paused",
            },
            "@keyframes tradingViewMarquee": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: "translateX(-50%)" },
            },
          }}
        >
          {marqueeItems.map((item, index) => (
            <Box
              key={index}
              component={RouterLink}
              to={item.link}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.2,
                px: 2.5,
                py: 0.5,
                textDecoration: "none",
                borderRight: "1px solid rgba(255, 255, 255, 0.06)",
                transition: "background-color 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 700,
                  fontSize: "0.78rem",
                  color: "#F8FAFC",
                  letterSpacing: "0.02em",
                }}
              >
                {item.symbol}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.78rem",
                  fontFamily: "monospace",
                  color: "#E2E8F0",
                }}
              >
                {item.price}
              </Typography>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.3,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  color: item.up ? "#34D399" : "#F87171",
                  backgroundColor: item.up ? "rgba(16, 185, 129, 0.12)" : "rgba(239, 68, 68, 0.12)",
                  px: 0.8,
                  py: 0.2,
                  borderRadius: "4px",
                }}
              >
                {item.up ? (
                  <TrendingUpIcon sx={{ fontSize: 12 }} />
                ) : (
                  <TrendingDownIcon sx={{ fontSize: 12 }} />
                )}
                {item.change}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* 2. Interactive Product Showcase Header */}
      <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 11 }, pb: { xs: 8, md: 12 } }}>
        <Box sx={{ textAlign: "center", maxWidth: 760, mx: "auto", mb: { xs: 5, md: 6 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              px: 2,
              py: 0.6,
              borderRadius: "9999px",
              backgroundColor: "rgba(37, 99, 235, 0.12)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              mb: 2.5,
              boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)",
            }}
          >
            <FiberManualRecordIcon sx={{ fontSize: 10, color: "#34D399" }} />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#93C5FD",
                fontSize: "0.72rem",
              }}
            >
              Institutional Trading Suite
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" },
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              mb: 2.5,
            }}
          >
            Where Market Intelligence{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #60A5FA 0%, #38BDF8 50%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Meets Execution
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.7,
              maxWidth: 620,
              mx: "auto",
            }}
          >
            Explore our real-time charting engine, live cross-asset heatmaps, risk-free compounding simulator, and algorithmic education track.
          </Typography>
        </Box>

        {/* 3. TradingView-Style Interactive Segmented Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 1.5 },
            mb: 4,
          }}
        >
          {[
            { label: "Supercharts & Analysis", icon: <CandlestickChartIcon fontSize="small" /> },
            { label: "Market Heatmaps", icon: <LocalFireDepartmentIcon fontSize="small" /> },
            { label: "Paper Simulator", icon: <CalculateIcon fontSize="small" /> },
            { label: "Trader Academy", icon: <SchoolIcon fontSize="small" /> },
          ].map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <Button
                key={idx}
                onClick={() => setActiveTab(idx)}
                startIcon={tab.icon}
                sx={{
                  px: { xs: 2, sm: 3 },
                  py: 1.2,
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: { xs: "0.82rem", sm: "0.88rem" },
                  textTransform: "none",
                  backgroundColor: isActive ? "rgba(37, 99, 235, 0.2)" : "rgba(15, 23, 42, 0.6)",
                  color: isActive ? "#60A5FA" : "#94A3B8",
                  border: "1px solid",
                  borderColor: isActive ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isActive ? "0 0 16px rgba(37, 99, 235, 0.25)" : "none",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: isActive ? "rgba(37, 99, 235, 0.25)" : "rgba(255, 255, 255, 0.05)",
                    color: isActive ? "#93C5FD" : "#FFFFFF",
                  },
                }}
              >
                {tab.label}
              </Button>
            );
          })}
        </Box>

        {/* 4. Interactive Showcase Workbench Window */}
        <Box
          sx={{
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            backgroundColor: "#0B0F19",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(37, 99, 235, 0.1)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Workbench Titlebar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 2, sm: 3 },
              py: 1.5,
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(15, 23, 42, 0.8)",
            }}
          >
            {/* macOS traffic lights & title */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box sx={{ display: "flex", gap: 0.8 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#EF4444" }} />
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#10B981" }} />
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: "#94A3B8",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  fontFamily: "monospace",
                  display: { xs: "none", sm: "block" },
                }}
              >
                terminal.marketwise.app · {activeTab === 0 ? "SUPERCHARTS_PRO" : activeTab === 1 ? "HEATMAP_MATRIX" : activeTab === 2 ? "PAPER_ENGINE" : "ACADEMY_CORE"}
              </Typography>
            </Box>

            {/* Timeframe & Mode Controls */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ display: "flex", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "8px", p: 0.3 }}>
                {["15M", "1H", "4H", "1D", "1W"].map((tf) => (
                  <Button
                    key={tf}
                    size="small"
                    onClick={() => setActiveTimeframe(tf)}
                    sx={{
                      minWidth: 32,
                      px: 1,
                      py: 0.2,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      borderRadius: "6px",
                      color: activeTimeframe === tf ? "#FFFFFF" : "#64748B",
                      backgroundColor: activeTimeframe === tf ? "#2563EB" : "transparent",
                      "&:hover": { backgroundColor: activeTimeframe === tf ? "#1D4ED8" : "rgba(255, 255, 255, 0.05)" },
                    }}
                  >
                    {tf}
                  </Button>
                ))}
              </Box>
              <IconButton size="small" sx={{ color: "#64748B", "&:hover": { color: "#FFFFFF" } }}>
                <FullscreenIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          {/* Tab 0: Supercharts & Analysis Live Showcase */}
          {activeTab === 0 && (
            <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
              {/* Asset Header Info Bar */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 2, mb: 3 }}>
                <Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.5 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                      Bitcoin / U.S. Dollar
                    </Typography>
                    <Chip label="BTC/USD" size="small" sx={{ fontWeight: 700, backgroundColor: "rgba(255, 255, 255, 0.08)", color: "#F8FAFC", borderRadius: "6px" }} />
                    <Chip label="BINANCE" size="small" sx={{ fontWeight: 600, fontSize: "0.65rem", backgroundColor: "rgba(245, 158, 11, 0.15)", color: "#FBBF24", borderRadius: "6px" }} />
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5 }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFFFFF", fontFamily: "monospace" }}>
                      $68,420.50
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: "#34D399", fontFamily: "monospace" }}>
                      +$2,260.40 (+3.42%)
                    </Typography>
                  </Box>
                </Box>

                {/* Live Stats Pills */}
                <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 3 } }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: "#64748B", fontSize: "0.68rem", display: "block" }}>
                      24H HIGH
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#F8FAFC", fontWeight: 700, fontFamily: "monospace", fontSize: "0.85rem" }}>
                      $69,120.00
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "#64748B", fontSize: "0.68rem", display: "block" }}>
                      24H LOW
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#F8FAFC", fontWeight: 700, fontFamily: "monospace", fontSize: "0.85rem" }}>
                      $65,840.20
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: "#64748B", fontSize: "0.68rem", display: "block" }}>
                      24H VOLUME
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#60A5FA", fontWeight: 700, fontFamily: "monospace", fontSize: "0.85rem" }}>
                      32,450 BTC
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Realistic SVG Candlestick & Volume Chart Canvas */}
              <Box
                sx={{
                  height: { xs: 220, sm: 300, md: 340 },
                  width: "100%",
                  position: "relative",
                  backgroundColor: "rgba(2, 6, 23, 0.75)",
                  borderRadius: "14px",
                  p: 2,
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  overflow: "hidden",
                }}
              >
                {/* Horizontal Price Grid Lines */}
                {[20, 45, 70].map((top, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      position: "absolute",
                      top: `${top}%`,
                      left: 0,
                      right: 0,
                      borderTop: "1px dashed rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      justifyContent: "flex-end",
                      pr: 1,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: "#475569", fontSize: "0.65rem", fontFamily: "monospace", mt: -1.2 }}>
                      ${(69000 - idx * 1200).toLocaleString()}
                    </Typography>
                  </Box>
                ))}

                {/* Moving Average Line Curves */}
                <svg viewBox="0 0 800 240" width="100%" height="100%" preserveAspectRatio="none" style={{ position: "absolute", top: 0, left: 0 }}>
                  <path
                    d="M 20 180 Q 150 150, 280 120 T 520 85 T 780 40"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2"
                    opacity="0.85"
                  />
                  <path
                    d="M 20 200 Q 180 170, 320 145 T 560 110 T 780 65"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    opacity="0.75"
                  />
                </svg>

                {/* Candlestick Bars Visualization */}
                <Box
                  sx={{
                    position: "relative",
                    height: "75%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 2,
                  }}
                >
                  {[
                    { wick: [120, 190], body: [135, 175], green: false },
                    { wick: [110, 180], body: [130, 165], green: true },
                    { wick: [95, 160], body: [115, 150], green: true },
                    { wick: [80, 145], body: [95, 130], green: true },
                    { wick: [90, 150], body: [100, 135], green: false },
                    { wick: [70, 135], body: [85, 120], green: true },
                    { wick: [65, 130], body: [80, 110], green: true },
                    { wick: [75, 140], body: [90, 125], green: false },
                    { wick: [55, 120], body: [70, 105], green: true },
                    { wick: [45, 110], body: [60, 95], green: true },
                    { wick: [50, 115], body: [65, 100], green: false },
                    { wick: [30, 95], body: [45, 80], green: true },
                    { wick: [25, 85], body: [35, 70], green: true },
                    { wick: [15, 75], body: [25, 60], green: true },
                  ].map((c, i) => (
                    <Box key={i} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 14, height: "100%", position: "relative" }}>
                      {/* Upper/Lower Wick */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: `${c.wick[0] / 2}%`,
                          bottom: `${100 - c.wick[1] / 2}%`,
                          width: 1.5,
                          backgroundColor: c.green ? "#34D399" : "#F87171",
                        }}
                      />
                      {/* Candle Body */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: `${c.body[0] / 2}%`,
                          height: `${(c.body[1] - c.body[0]) / 2}%`,
                          width: "80%",
                          minWidth: 6,
                          maxWidth: 12,
                          backgroundColor: c.green ? "#34D399" : "#F87171",
                          borderRadius: "2px",
                          boxShadow: c.green ? "0 0 6px rgba(52, 211, 153, 0.4)" : "none",
                        }}
                      />
                    </Box>
                  ))}
                </Box>

                {/* Volume Histogram at Bottom */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 8,
                    left: 16,
                    right: 48,
                    height: 45,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    zIndex: 1,
                  }}
                >
                  {[30, 45, 65, 80, 50, 70, 90, 40, 85, 95, 60, 80, 100, 75].map((v, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 8,
                        height: `${v}%`,
                        backgroundColor: i % 3 === 0 ? "rgba(248, 113, 113, 0.35)" : "rgba(52, 211, 153, 0.35)",
                        borderRadius: "2px 2px 0 0",
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Bottom Feature Strip & CTA */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 2, mt: 3, pt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
                  <Typography variant="caption" sx={{ color: "#94A3B8", display: "flex", alignItems: "center", gap: 0.6 }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 14, color: "#34D399" }} /> 100+ Indicators & Overlays
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#94A3B8", display: "flex", alignItems: "center", gap: 0.6 }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 14, color: "#34D399" }} /> Sub-Millisecond Data Stream
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#94A3B8", display: "flex", alignItems: "center", gap: 0.6 }}>
                    <CheckCircleOutlineIcon sx={{ fontSize: 14, color: "#34D399" }} /> Multi-Timeframe Synced Charts
                  </Typography>
                </Box>
                <Button
                  component={RouterLink}
                  to="/cryptocurrency"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                    fontWeight: 700,
                    borderRadius: "10px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    boxShadow: "0 0 20px rgba(37, 99, 235, 0.4)",
                    "&:hover": { background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)" },
                  }}
                >
                  Launch Supercharts
                </Button>
              </Box>
            </Box>
          )}

          {/* Tab 1: Market Heatmaps Live Showcase */}
          {activeTab === 1 && (
            <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5, flexWrap: "wrap", gap: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 0.5 }}>
                    Real-Time Sector Heatmap Matrix
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                    Visualizing capital flows and percentage deviations across global crypto and equities.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Chip label="Crypto Volume" size="small" sx={{ backgroundColor: "rgba(37, 99, 235, 0.2)", color: "#60A5FA", fontWeight: 700 }} />
                  <Chip label="S&P 500" size="small" sx={{ backgroundColor: "rgba(255, 255, 255, 0.05)", color: "#94A3B8", fontWeight: 600 }} />
                </Box>
              </Box>

              {/* Dynamic Heatmap Treemap Matrix Grid */}
              <Grid container spacing={1.5} sx={{ height: { xs: 260, sm: 320 } }}>
                <Grid item xs={12} sm={6} md={5} sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      height: "100%",
                      backgroundColor: "rgba(16, 185, 129, 0.2)",
                      border: "1px solid rgba(16, 185, 129, 0.5)",
                      borderRadius: "12px",
                      p: 2.5,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      transition: "transform 0.2s ease",
                      "&:hover": { transform: "scale(1.01)", borderColor: "#34D399" },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
                        Bitcoin (BTC)
                      </Typography>
                      <Chip label="+3.42%" size="small" sx={{ backgroundColor: "#10B981", color: "#FFFFFF", fontWeight: 800 }} />
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ fontWeight: 800, color: "#F8FAFC", fontFamily: "monospace" }}>
                        $68,420.50
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#34D399", fontWeight: 700 }}>
                        Market Cap: $1.34 Trillion · Vol: $38.2B
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4} sx={{ height: "100%" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1.5 }}>
                    <Box
                      sx={{
                        flex: 1,
                        backgroundColor: "rgba(16, 185, 129, 0.16)",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                        borderRadius: "12px",
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
                          Ethereum (ETH)
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace" }}>
                          $3,520.10
                        </Typography>
                      </Box>
                      <Chip label="+2.18%" size="small" sx={{ backgroundColor: "rgba(16, 185, 129, 0.3)", color: "#34D399", fontWeight: 700 }} />
                    </Box>

                    <Box
                      sx={{
                        flex: 1,
                        backgroundColor: "rgba(16, 185, 129, 0.25)",
                        border: "1px solid rgba(16, 185, 129, 0.6)",
                        borderRadius: "12px",
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
                          Solana (SOL)
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#94A3B8", fontFamily: "monospace" }}>
                          $182.40
                        </Typography>
                      </Box>
                      <Chip label="+6.85%" size="small" sx={{ backgroundColor: "#10B981", color: "#FFFFFF", fontWeight: 800 }} />
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={3} sx={{ height: "100%", display: { xs: "none", md: "block" } }}>
                  <Box sx={{ display: "flex", flexDirection: "column", height: "100%", gap: 1.5 }}>
                    <Box
                      sx={{
                        flex: 1,
                        backgroundColor: "rgba(239, 68, 68, 0.14)",
                        border: "1px solid rgba(239, 68, 68, 0.35)",
                        borderRadius: "12px",
                        p: 1.5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: "#FFFFFF" }}>
                          AAPL
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                          $228.60
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: "#F87171", fontWeight: 700 }}>
                        -0.32%
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        flex: 1,
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        border: "1px solid rgba(16, 185, 129, 0.45)",
                        borderRadius: "12px",
                        p: 1.5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: "#FFFFFF" }}>
                          NVDA
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                          $134.80
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: "#34D399", fontWeight: 700 }}>
                        +4.15%
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        flex: 1,
                        backgroundColor: "rgba(16, 185, 129, 0.15)",
                        border: "1px solid rgba(16, 185, 129, 0.35)",
                        borderRadius: "12px",
                        p: 1.5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: "#FFFFFF" }}>
                          TSLA
                        </Typography>
                        <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                          $218.40
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: "#34D399", fontWeight: 700 }}>
                        +1.85%
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>

              {/* Bottom Action */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3, pt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                  Filter by Market Cap, P/E Ratio, or 24h Volatility across 500+ assets.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/heatmap/cryptocurrency"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                    fontWeight: 700,
                    borderRadius: "10px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                  }}
                >
                  Explore Live Heatmap
                </Button>
              </Box>
            </Box>
          )}

          {/* Tab 2: Paper Simulator Live Showcase */}
          {activeTab === 2 && (
            <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, flexWrap: "wrap", gap: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 0.5 }}>
                    Zero-Risk Paper Trading Terminal
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                    Execute orders against live orderbooks with $100,000 in simulated margin capital.
                  </Typography>
                </Box>
                <Chip
                  label="LIVE PAPER ENGINE"
                  size="small"
                  sx={{ backgroundColor: "rgba(168, 85, 247, 0.2)", color: "#C084FC", fontWeight: 800, border: "1px solid rgba(168, 85, 247, 0.4)" }}
                />
              </Box>

              {/* Simulation Metrics Dashboard */}
              <Grid container spacing={2.5} sx={{ mb: 3 }}>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ p: 2.5, borderRadius: "14px", backgroundColor: "rgba(15, 23, 42, 0.75)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 600 }}>
                      PORTFOLIO BALANCE
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFFFFF", fontFamily: "monospace", my: 0.5 }}>
                      $108,420.50
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#34D399", fontWeight: 700 }}>
                      +$8,420.50 (+8.42% Total ROI)
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ p: 2.5, borderRadius: "14px", backgroundColor: "rgba(15, 23, 42, 0.75)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 600 }}>
                      WIN RATE (30D)
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#34D399", fontFamily: "monospace", my: 0.5 }}>
                      71.4%
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                      30 Wins / 12 Losses
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box sx={{ p: 2.5, borderRadius: "14px", backgroundColor: "rgba(15, 23, 42, 0.75)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                    <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 600 }}>
                      PROFIT FACTOR
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#60A5FA", fontFamily: "monospace", my: 0.5 }}>
                      2.65
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                      Max Drawdown: -3.8%
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* Active Open Simulated Trades Strip */}
              <Box sx={{ backgroundColor: "rgba(2, 6, 23, 0.6)", borderRadius: "12px", p: 2, border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 700, letterSpacing: "0.06em", display: "block", mb: 1.5 }}>
                  ACTIVE SIMULATED POSITIONS
                </Typography>
                <Grid container spacing={2}>
                  {[
                    { asset: "BTC/USD", side: "LONG", size: "0.50 BTC", entry: "$64,200", pnl: "+$2,110.25", pnlPct: "+6.57%", green: true },
                    { asset: "NVDA", side: "LONG", size: "100 SHS", entry: "$124.50", pnl: "+$1,030.00", pnlPct: "+8.27%", green: true },
                    { asset: "EUR/USD", side: "SHORT", size: "100K UNITS", entry: "1.0920", pnl: "+$480.00", pnlPct: "+0.44%", green: true },
                  ].map((trade, i) => (
                    <Grid item xs={12} md={4} key={i}>
                      <Box sx={{ p: 1.5, borderRadius: "8px", backgroundColor: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", justifyContent: "space-between" }}>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 800, color: "#FFFFFF" }}>
                            {trade.asset} <span style={{ color: "#34D399", fontSize: "0.75rem" }}>{trade.side}</span>
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#64748B" }}>
                            Entry: {trade.entry}
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "right" }}>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: "#34D399", fontFamily: "monospace" }}>
                            {trade.pnl}
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#34D399" }}>
                            {trade.pnlPct}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Bottom Action */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3, pt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                  Test strategies without risking capital. Real-time compounding calculator included.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/investsimulator"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                    fontWeight: 700,
                    borderRadius: "10px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                  }}
                >
                  Open Simulator
                </Button>
              </Box>
            </Box>
          )}

          {/* Tab 3: Trader Academy Live Showcase */}
          {activeTab === 3 && (
            <Box sx={{ p: { xs: 2.5, sm: 4 } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3, flexWrap: "wrap", gap: 2 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#FFFFFF", mb: 0.5 }}>
                    Master The Markets: Structured Curriculum
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                    From candlestick psychology to risk algorithms and macroeconomic liquidity.
                  </Typography>
                </Box>
                <Chip label="40+ MODULES" size="small" sx={{ backgroundColor: "rgba(37, 99, 235, 0.2)", color: "#60A5FA", fontWeight: 800 }} />
              </Box>

              <Grid container spacing={2.5}>
                {[
                  {
                    module: "MODULE 01",
                    title: "Price Action & Order Flow Dynamics",
                    desc: "Analyze candlestick anatomy, liquidity sweeps, order blocks, and key support-resistance confluence.",
                    lessons: "14 Lessons · 3 Quizzes",
                    level: "FOUNDATIONAL",
                    badgeColor: "#60A5FA",
                  },
                  {
                    module: "MODULE 02",
                    title: "Risk-Reward & Position Architecture",
                    desc: "Master Kelly criterion, max drawdown mitigation, capital preservation rules, and portfolio hedging.",
                    lessons: "10 Lessons · 4 Case Studies",
                    level: "INTERMEDIATE",
                    badgeColor: "#34D399",
                  },
                  {
                    module: "MODULE 03",
                    title: "Quantitative Indicators & Divergences",
                    desc: "Exploit RSI/MACD momentum shifts, Bollinger squeeze setups, and intermarket cross correlations.",
                    lessons: "16 Lessons · Live Lab",
                    level: "ADVANCED",
                    badgeColor: "#C084FC",
                  },
                ].map((course, idx) => (
                  <Grid item xs={12} md={4} key={idx}>
                    <Box
                      sx={{
                        p: 3,
                        borderRadius: "14px",
                        backgroundColor: "rgba(15, 23, 42, 0.7)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "all 0.2s ease",
                        "&:hover": { borderColor: course.badgeColor, transform: "translateY(-3px)" },
                      }}
                    >
                      <Box>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1.5 }}>
                          <Typography variant="caption" sx={{ fontWeight: 800, color: course.badgeColor, letterSpacing: "0.08em" }}>
                            {course.module}
                          </Typography>
                          <Chip
                            label={course.level}
                            size="small"
                            sx={{
                              fontSize: "0.62rem",
                              fontWeight: 800,
                              backgroundColor: "rgba(255, 255, 255, 0.05)",
                              color: course.badgeColor,
                              borderRadius: "4px",
                            }}
                          />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#FFFFFF", mb: 1, fontSize: "1.1rem" }}>
                          {course.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6, mb: 2, fontSize: "0.85rem" }}>
                          {course.desc}
                        </Typography>
                      </Box>
                      <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>
                        {course.lessons}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Bottom Action */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 3, pt: 2, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                  Interactive courses built by experienced algorithmic and discretionary traders.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/education"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                    fontWeight: 700,
                    borderRadius: "10px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                  }}
                >
                  Start Learning Now
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default ContentTop;
