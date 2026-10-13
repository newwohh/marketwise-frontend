import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import InsightsIcon from "@mui/icons-material/Insights";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import BoltIcon from "@mui/icons-material/Bolt";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCryptoPrice } from "../../../../reducers/reducers";
import heroBgVideo from "../../../../assets/hero-bg.mp4";
import heroBgPoster from "../../../../assets/hero-bg-poster.jpg";

const keywords = ["Leap", "Trade", "Chart", "Analyze", "Scale"];

const quickPills = [
  { symbol: "BTC", name: "Bitcoin", price: "$68,420", change: "+3.42%", up: true, link: "/cryptocurrency" },
  { symbol: "ETH", name: "Ethereum", price: "$3,520", change: "+2.18%", up: true, link: "/cryptocurrency" },
  { symbol: "NVDA", name: "Nvidia", price: "$134.80", change: "+4.15%", up: true, link: "/stocks" },
  { symbol: "SPY", name: "S&P 500", price: "$574.80", change: "+0.45%", up: true, link: "/stocks" },
  { symbol: "EUR/USD", name: "Forex", price: "1.0872", change: "-0.14%", up: false, link: "/forex" },
];

function HeroSection() {
  const [keywordIndex, setKeywordIndex] = useState(0);
  const { prices } = useSelector((state) => state.marketwise);
  const dispatch = useDispatch();
  const videoRef = React.useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!prices || prices.length === 0) {
      dispatch(getCryptoPrice());
    }
  }, [dispatch, prices]);

  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % keywords.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Top 4 preview tickers
  const defaultTickers = [
    { name: "Bitcoin", symbol: "BTC", price_usd: "68,420.50", percent_change_24h: "3.42" },
    { name: "Ethereum", symbol: "ETH", price_usd: "3,520.10", percent_change_24h: "2.18" },
    { name: "Solana", symbol: "SOL", price_usd: "182.40", percent_change_24h: "6.85" },
    { name: "S&P 500", symbol: "SPY", price_usd: "574.80", percent_change_24h: "0.45" },
  ];

  const displayTickers =
    prices && prices.length >= 4
      ? prices.slice(0, 4).map((p) => ({
          name: p.name,
          symbol: p.symbol,
          price_usd: Number(p.price_usd || 0).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          percent_change_24h: p.percent_change_24h || p.percent_change_7d || "1.25",
        }))
      : defaultTickers;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        background: "#080B11",
        color: "#FFFFFF",
        pt: { xs: 14, sm: 16, md: 19 },
        pb: { xs: 10, md: 15 },
        overflow: "hidden",
      }}
    >
      {/* Background Cinematic Video Loop */}
      <Box
        component="video"
        ref={videoRef}
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="auto"
        poster={heroBgPoster}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.42,
          filter: "brightness(0.75) contrast(1.2)",
          pointerEvents: "none",
        }}
      >
        <source src={heroBgVideo} type="video/mp4" />
      </Box>

      {/* Atmospheric Overlays for TradingView Contrast */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(130% 100% at 50% 15%, rgba(8, 11, 17, 0.45) 0%, rgba(2, 6, 23, 0.85) 65%, #020617 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* TradingView coordinate grid mask */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 30%, transparent 80%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Ambient Blue/Indigo Glow */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: 350, md: 800 },
          height: { xs: 350, md: 600 },
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 75%)",
          filter: "blur(75px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* TradingView Pill Badge */}
        <Box sx={{ display: "inline-flex", mb: 3 }}>
          <Chip
            icon={<BoltIcon sx={{ fontSize: "16px !important", color: "#F59E0B" }} />}
            label="TradingView Architecture • Institutional Precision • Real-Time Stream"
            sx={{
              backgroundColor: "rgba(15, 23, 42, 0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(59, 130, 246, 0.35)",
              color: "#E2E8F0",
              fontWeight: 600,
              fontSize: { xs: "0.75rem", sm: "0.825rem" },
              py: 2.2,
              px: 1.5,
              borderRadius: "50px",
              boxShadow: "0 0 25px rgba(37, 99, 235, 0.2)",
            }}
          />
        </Box>

        {/* Dynamic Main Headline */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.4rem", sm: "3.6rem", md: "4.75rem" },
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            maxWidth: 960,
            mx: "auto",
            mb: 2.5,
          }}
        >
          Look First.{" "}
          <Box
            component="span"
            key={keywordIndex}
            sx={{
              display: "inline-block",
              background: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "hero-fade 400ms ease-out both",
              "@keyframes hero-fade": {
                from: { opacity: 0, transform: "translateY(8px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Then {keywords[keywordIndex]}.
          </Box>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            color: "#94A3B8",
            maxWidth: 720,
            mx: "auto",
            mb: 4,
            lineHeight: 1.65,
          }}
        >
          Where the world charts, simulates, and trades. Explore real-time streaming data across crypto, global equities, and forex with institutional-grade technical intelligence.
        </Typography>

        {/* TradingView Quick-Asset Filter Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
            maxWidth: 820,
            mx: "auto",
            mb: 4.5,
          }}
        >
          {quickPills.map((pill, idx) => (
            <Chip
              key={idx}
              component={RouterLink}
              to={pill.link}
              clickable
              label={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                  <Typography component="span" sx={{ fontWeight: 700, fontSize: "0.78rem", color: "#F8FAFC" }}>
                    {pill.symbol}
                  </Typography>
                  <Typography component="span" sx={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                    {pill.price}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: pill.up ? "#34D399" : "#F87171",
                    }}
                  >
                    {pill.change}
                  </Typography>
                </Box>
              }
              sx={{
                backgroundColor: "rgba(15, 23, 42, 0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                py: 2,
                px: 0.5,
                borderRadius: "20px",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(37, 99, 235, 0.18)",
                  borderColor: "rgba(96, 165, 250, 0.4)",
                  transform: "translateY(-1px)",
                },
              }}
            />
          ))}
        </Box>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 7,
          }}
        >
          <Button
            component={RouterLink}
            to="/cryptocurrency"
            variant="contained"
            size="large"
            startIcon={<CandlestickChartIcon />}
            sx={{
              px: 4,
              py: 1.6,
              fontSize: "1.025rem",
              fontWeight: 700,
              borderRadius: "12px",
              background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
              boxShadow: "0 4px 24px rgba(37, 99, 235, 0.45)",
              "&:hover": {
                background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)",
                boxShadow: "0 6px 28px rgba(37, 99, 235, 0.6)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Launch Interactive Charts
          </Button>

          <Button
            component={RouterLink}
            to="/investsimulator"
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 3.5,
              py: 1.6,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "12px",
              color: "#FFFFFF",
              borderColor: "rgba(255, 255, 255, 0.22)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              "&:hover": {
                borderColor: "#60A5FA",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transform: "translateY(-2px)",
              },
            }}
          >
            Start Free Simulator
          </Button>
        </Box>

        {/* Live Ticker Snapshot Cards */}
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 2.5 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#10B981",
                boxShadow: "0 0 10px #10B981",
                animation: "pulse-green 2s infinite",
                "@keyframes pulse-green": {
                  "0%": { transform: "scale(0.95)", opacity: 0.8 },
                  "50%": { transform: "scale(1.3)", opacity: 1 },
                  "100%": { transform: "scale(0.95)", opacity: 0.8 },
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#94A3B8",
                fontWeight: 700,
              }}
            >
              Live Market Stream • 100+ Exchanges Connected
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            {displayTickers.map((ticker, idx) => {
              const isPositive = parseFloat(ticker.percent_change_24h) >= 0;
              return (
                <Grid item xs={6} sm={6} md={3} key={idx}>
                  <Card
                    component={RouterLink}
                    to="/cryptocurrency"
                    sx={{
                      textDecoration: "none",
                      backgroundColor: "rgba(15, 23, 42, 0.72)",
                      backdropFilter: "blur(14px)",
                      border: "1px solid rgba(255, 255, 255, 0.09)",
                      borderRadius: "14px",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      textAlign: "left",
                      transition: "all 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        borderColor: "#3B82F6",
                        backgroundColor: "rgba(15, 23, 42, 0.88)",
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.45)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: "0 !important", width: "100%" }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "#FFFFFF", lineHeight: 1.2 }}>
                            {ticker.symbol}
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#64748B" }}>
                            {ticker.name}
                          </Typography>
                        </Box>
                        <Chip
                          icon={
                            isPositive ? (
                              <TrendingUpIcon sx={{ fontSize: "14px !important", color: "#10B981" }} />
                            ) : (
                              <TrendingDownIcon sx={{ fontSize: "14px !important", color: "#EF4444" }} />
                            )
                          }
                          label={`${isPositive ? "+" : ""}${ticker.percent_change_24h}%`}
                          size="small"
                          sx={{
                            backgroundColor: isPositive ? "rgba(16, 185, 129, 0.12)" : "rgba(239, 68, 68, 0.12)",
                            color: isPositive ? "#34D399" : "#F87171",
                            fontWeight: 700,
                            fontSize: "0.75rem",
                            borderRadius: "6px",
                          }}
                        />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.01em" }}>
                        ${ticker.price_usd}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
