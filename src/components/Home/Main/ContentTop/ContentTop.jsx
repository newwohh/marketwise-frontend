import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalculateIcon from "@mui/icons-material/Calculate";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import InsightsIcon from "@mui/icons-material/Insights";
import { Link as RouterLink } from "react-router-dom";

// Interactive Spotlight Card Component
function BentoCard({ feat, children }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Card
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: { xs: 3, md: 3.5 },
        borderRadius: "20px",
        border: "1px solid",
        borderColor: isHovered ? feat.borderColor : "rgba(255, 255, 255, 0.08)",
        background: isHovered
          ? `radial-gradient(380px circle at ${mousePos.x}px ${mousePos.y}px, ${feat.spotlight}, rgba(15, 23, 42, 0.85))`
          : "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(14px)",
        boxShadow: isHovered
          ? `0 20px 40px -12px rgba(0, 0, 0, 0.7), 0 0 24px ${feat.glow}`
          : "0 4px 20px rgba(0, 0, 0, 0.3)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.28s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.28s ease, border-color 0.28s ease",
        overflow: "hidden",
      }}
    >
      {/* Top glowing ambient highlight line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "15%",
          right: "15%",
          height: "1.5px",
          background: `linear-gradient(90deg, transparent 0%, ${feat.accent} 50%, transparent 100%)`,
          opacity: isHovered ? 1 : 0.3,
          transition: "opacity 0.3s ease",
        }}
      />
      {children}
    </Card>
  );
}

// 1. Trading Academy Interactive Candlestick Preview Widget
function AcademyWidget() {
  const candles = [
    { type: "green", wickTop: 6, bodyTop: 12, bodyHeight: 22, wickBottom: 40 },
    { type: "red", wickTop: 14, bodyTop: 18, bodyHeight: 18, wickBottom: 42 },
    { type: "green", wickTop: 8, bodyTop: 15, bodyHeight: 20, wickBottom: 38 },
    { type: "green", wickTop: 4, bodyTop: 10, bodyHeight: 25, wickBottom: 38 },
    { type: "red", wickTop: 10, bodyTop: 14, bodyHeight: 15, wickBottom: 34 },
    { type: "green", wickTop: 2, bodyTop: 6, bodyHeight: 28, wickBottom: 36 },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "rgba(2, 6, 23, 0.6)",
        borderRadius: "14px",
        p: 2,
        border: "1px solid rgba(255, 255, 255, 0.06)",
        mb: 2.5,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              backgroundColor: "#34D399",
              boxShadow: "0 0 6px #34D399",
            }}
          />
          <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.06em" }}>
            BTC/USD · 15M CHART
          </Typography>
        </Box>
        <Chip
          label="+4.2% Bullish Engulfing"
          size="small"
          sx={{
            height: 18,
            fontSize: "0.65rem",
            fontWeight: 700,
            backgroundColor: "rgba(16, 185, 129, 0.15)",
            color: "#34D399",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        />
      </Box>

      {/* Candlestick SVG visualization */}
      <Box sx={{ height: 60, width: "100%", display: "flex", alignItems: "flex-end", position: "relative" }}>
        {/* Horizontal reference dashed lines */}
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: 0,
            right: 0,
            borderTop: "1px dashed rgba(255, 255, 255, 0.1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "70%",
            left: 0,
            right: 0,
            borderTop: "1px dashed rgba(255, 255, 255, 0.06)",
          }}
        />

        <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          {candles.map((c, i) => {
            const isGreen = c.type === "green";
            const color = isGreen ? "#34D399" : "#F87171";
            return (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: 14,
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                {/* Wick */}
                <Box
                  sx={{
                    width: 1.5,
                    height: 48,
                    backgroundColor: color,
                    position: "absolute",
                    top: c.wickTop,
                  }}
                />
                {/* Candle Body */}
                <Box
                  sx={{
                    width: 10,
                    height: c.bodyHeight,
                    backgroundColor: color,
                    borderRadius: "2px",
                    position: "absolute",
                    top: c.bodyTop,
                    boxShadow: isGreen ? "0 0 8px rgba(52, 211, 153, 0.4)" : "none",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Lesson Tags */}
      <Box sx={{ display: "flex", gap: 0.8, flexWrap: "wrap", mt: 1.5 }}>
        {["Candlesticks", "Risk Models", "Order Flow"].map((tag, idx) => (
          <Box
            key={idx}
            sx={{
              px: 1,
              py: 0.3,
              borderRadius: "6px",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              color: "#93C5FD",
              fontSize: "0.68rem",
              fontWeight: 600,
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// 2. Portfolio Intelligence Sparkline Wave Widget
function IntelligenceWidget() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(2, 6, 23, 0.6)",
        borderRadius: "14px",
        p: 2,
        border: "1px solid rgba(255, 255, 255, 0.06)",
        mb: 2.5,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AutoGraphIcon sx={{ fontSize: 16, color: "#10B981" }} />
          <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.06em" }}>
            ALPHA PULSE · MOMENTUM
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: "#34D399", fontWeight: 800, fontFamily: "monospace", fontSize: "0.75rem" }}>
          +24.8% YTD
        </Typography>
      </Box>

      {/* SVG Wave Path with Gradient Fill */}
      <Box sx={{ height: 60, width: "100%", position: "relative" }}>
        <svg viewBox="0 0 280 60" width="100%" height="100%" preserveAspectRatio="none" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          {/* Fill path */}
          <path
            d="M 0 50 Q 40 45, 70 35 T 140 28 T 210 18 T 280 8 L 280 60 L 0 60 Z"
            fill="url(#waveGradient)"
          />
          {/* Stroke path */}
          <path
            d="M 0 50 Q 40 45, 70 35 T 140 28 T 210 18 T 280 8"
            fill="none"
            stroke="url(#strokeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Peak pulsing node */}
          <circle cx="280" cy="8" r="4" fill="#34D399" filter="drop-shadow(0 0 6px #34D399)" />
          <circle cx="280" cy="8" r="8" fill="none" stroke="#34D399" strokeWidth="1.5" opacity="0.6">
            <animate attributeName="r" values="4;10;4" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </Box>

      {/* KPI Stats Row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1.5, pt: 1, borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <Box>
          <Typography variant="caption" sx={{ color: "#64748B", fontSize: "0.65rem", display: "block" }}>
            SHARPE RATIO
          </Typography>
          <Typography variant="caption" sx={{ color: "#F8FAFC", fontWeight: 700, fontSize: "0.78rem", fontFamily: "monospace" }}>
            2.84
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "#64748B", fontSize: "0.65rem", display: "block" }}>
            WIN RATE
          </Typography>
          <Typography variant="caption" sx={{ color: "#34D399", fontWeight: 700, fontSize: "0.78rem", fontFamily: "monospace" }}>
            68.4%
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption" sx={{ color: "#64748B", fontSize: "0.65rem", display: "block" }}>
            MAX DRAWDOWN
          </Typography>
          <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 700, fontSize: "0.78rem", fontFamily: "monospace" }}>
            -4.2%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// 3. Investment Simulator Compounding Visualizer Widget
function SimulatorWidget() {
  const bars = [
    { height: 25, label: "Y1", val: "$11.8K" },
    { height: 40, label: "Y2", val: "$15.4K" },
    { height: 58, label: "Y3", val: "$20.9K" },
    { height: 75, label: "Y4", val: "$27.3K" },
    { height: 96, label: "Y5", val: "$34.8K" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "rgba(2, 6, 23, 0.6)",
        borderRadius: "14px",
        p: 2,
        border: "1px solid rgba(255, 255, 255, 0.06)",
        mb: 2.5,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <InsightsIcon sx={{ fontSize: 16, color: "#C084FC" }} />
          <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.06em" }}>
            SIMULATED RETURN (5YR)
          </Typography>
        </Box>
        <Chip
          label="+$24,820 Net"
          size="small"
          sx={{
            height: 18,
            fontSize: "0.65rem",
            fontWeight: 700,
            backgroundColor: "rgba(168, 85, 247, 0.15)",
            color: "#C084FC",
            border: "1px solid rgba(168, 85, 247, 0.3)",
          }}
        />
      </Box>

      {/* Compounding Growth Bars */}
      <Box sx={{ height: 60, width: "100%", display: "flex", alignItems: "flex-end", gap: 1, pt: 1 }}>
        {bars.map((bar, i) => (
          <Box
            key={i}
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              justifyContent: "flex-end",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: `${bar.height}%`,
                borderRadius: "4px 4px 0 0",
                background:
                  i === bars.length - 1
                    ? "linear-gradient(180deg, #A855F7 0%, #6366F1 100%)"
                    : "linear-gradient(180deg, rgba(168, 85, 247, 0.5) 0%, rgba(99, 102, 241, 0.25) 100%)",
                boxShadow: i === bars.length - 1 ? "0 0 12px rgba(168, 85, 247, 0.45)" : "none",
                transition: "height 0.4s ease",
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Bottom Capital Summary */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 1.5, pt: 1, borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <Typography variant="caption" sx={{ color: "#94A3B8", fontSize: "0.7rem" }}>
          Initial: <strong style={{ color: "#F8FAFC" }}>$10,000</strong>
        </Typography>
        <Typography variant="caption" sx={{ color: "#C084FC", fontWeight: 800, fontSize: "0.78rem", fontFamily: "monospace" }}>
          Projected: $34,820 (+248%)
        </Typography>
      </Box>
    </Box>
  );
}

const features = [
  {
    icon: <SchoolIcon sx={{ fontSize: 26, color: "#60A5FA" }} />,
    bg: "rgba(37, 99, 235, 0.12)",
    accent: "#60A5FA",
    borderColor: "rgba(59, 130, 246, 0.4)",
    spotlight: "rgba(37, 99, 235, 0.12)",
    glow: "rgba(37, 99, 235, 0.18)",
    badge: "EDUCATION",
    title: "Trading Academy",
    desc: "Master market fundamentals, candlestick patterns, and risk control with curated, interactive learning paths.",
    link: "/education",
    cta: "Explore Lessons",
    widget: <AcademyWidget />,
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 26, color: "#34D399" }} />,
    bg: "rgba(16, 185, 129, 0.12)",
    accent: "#34D399",
    borderColor: "rgba(16, 185, 129, 0.4)",
    spotlight: "rgba(16, 185, 129, 0.12)",
    glow: "rgba(16, 185, 129, 0.18)",
    badge: "INTELLIGENCE",
    title: "Portfolio Intelligence",
    desc: "Uncover macro trends, analyze sectoral momentum, and optimize your asset allocation with institutional data.",
    link: "/grow",
    cta: "Explore Strategies",
    widget: <IntelligenceWidget />,
  },
  {
    icon: <CalculateIcon sx={{ fontSize: 26, color: "#C084FC" }} />,
    bg: "rgba(168, 85, 247, 0.12)",
    accent: "#C084FC",
    borderColor: "rgba(168, 85, 247, 0.4)",
    spotlight: "rgba(168, 85, 247, 0.12)",
    glow: "rgba(168, 85, 247, 0.18)",
    badge: "SIMULATOR",
    title: "Investment Simulator",
    desc: "Backtest your ideas and model compounding portfolio returns against real-world assets without capital risk.",
    link: "/investsimulator",
    cta: "Launch Simulator",
    widget: <SimulatorWidget />,
  },
];

function ContentTop() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 9, md: 13 },
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #080B11 0%, #0B0F19 100%)",
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(37, 99, 235, 0.14) 0%, transparent 55%),
          radial-gradient(circle at 85% 60%, rgba(16, 185, 129, 0.08) 0%, transparent 45%),
          radial-gradient(circle at 15% 60%, rgba(168, 85, 247, 0.08) 0%, transparent 45%),
          radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 100% 100%, 32px 32px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Dynamic Keyframes for beacon pulse */}
      <style>
        {`
          @keyframes beaconPing {
            0% { transform: scale(1); opacity: 0.9; }
            100% { transform: scale(2.8); opacity: 0; }
          }
        `}
      </style>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", maxWidth: 740, mx: "auto", mb: { xs: 6, md: 8 } }}>
          {/* Glowing Beacon Pill */}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.2,
              px: 2,
              py: 0.65,
              borderRadius: "9999px",
              backgroundColor: "rgba(37, 99, 235, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.25)",
              mb: 2.5,
              boxShadow: "0 0 20px rgba(37, 99, 235, 0.15)",
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: "#34D399",
                boxShadow: "0 0 8px #34D399",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: -2,
                  borderRadius: "50%",
                  border: "1.5px solid #34D399",
                  animation: "beaconPing 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#93C5FD",
                fontSize: "0.72rem",
              }}
            >
              Comprehensive Ecosystem
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              mb: 2.5,
            }}
          >
            Explore Endless Possibilities with{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #60A5FA 0%, #38BDF8 50%, #34D399 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              MarketWise
            </Box>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#94A3B8",
              fontSize: { xs: "0.95rem", md: "1.08rem" },
              lineHeight: 1.7,
              maxWidth: 640,
              mx: "auto",
            }}
          >
            Every tool you need to track global markets, analyze market cycles, and refine your trading strategies in one unified interface.
          </Typography>
        </Box>

        {/* 3-Column Bento Cards Grid */}
        <Grid container spacing={3.5}>
          {features.map((feat, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <BentoCard feat={feat}>
                <CardContent sx={{ p: "0 !important" }}>
                  {/* Card Header: Icon & Category Badge */}
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "14px",
                        backgroundColor: feat.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `1px solid ${feat.borderColor}`,
                        boxShadow: `0 0 16px ${feat.glow}`,
                      }}
                    >
                      {feat.icon}
                    </Box>
                    <Chip
                      label={feat.badge}
                      size="small"
                      sx={{
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        color: feat.accent,
                        border: `1px solid ${feat.borderColor}`,
                        borderRadius: "6px",
                      }}
                    />
                  </Box>

                  {/* Title & Description */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      color: "#F8FAFC",
                      mb: 1,
                      fontSize: "1.3rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feat.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6, mb: 2.5, minHeight: 48 }}>
                    {feat.desc}
                  </Typography>

                  {/* Live Interactive Feature Widget Preview */}
                  {feat.widget}
                </CardContent>

                {/* Card Action Link */}
                <Button
                  component={RouterLink}
                  to={feat.link}
                  endIcon={
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "16px !important",
                        transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  }
                  sx={{
                    alignSelf: "flex-start",
                    p: 0,
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    color: feat.accent,
                    mt: 1,
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#FFFFFF",
                      "& .MuiButton-endIcon": {
                        transform: "translateX(5px)",
                      },
                    },
                  }}
                >
                  {feat.cta}
                </Button>
              </BentoCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ContentTop;
