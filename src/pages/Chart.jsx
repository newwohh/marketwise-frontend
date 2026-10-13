import React, { useEffect, useRef } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Chip,
  Breadcrumbs,
  Paper,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import { titleHandler } from "../handler/titleHandler";
import { useScrollToTop } from "../actions/actions";

let tvScriptLoadingPromise;

function Chart() {
  const { id } = useParams();
  const assetSymbol = (id || "BTC").toUpperCase();
  titleHandler(`${assetSymbol} Chart`);
  useScrollToTop();

  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;
    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }
    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );
    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget() {
      const container = document.getElementById("tradingview_chart_container");
      if (container && "TradingView" in window) {
        // Map common crypto identifiers to clean TradingView symbols
        let tvSymbol = assetSymbol;
        if (!tvSymbol.includes(":") && !tvSymbol.includes("USD")) {
          tvSymbol = `BINANCE:${tvSymbol}USDT`;
        }

        new window.TradingView.widget({
          autosize: true,
          symbol: tvSymbol,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f8fafc",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_chart_container",
        });
      }
    }
  }, [id, assetSymbol]);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F8FAFC" }}>
      <NavBar />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 }, flexGrow: 1 }}>
        {/* Navigation & Breadcrumbs */}
        <Box sx={{ mb: 3 }}>
          <Breadcrumbs sx={{ mb: 1.5, color: "#64748B", fontSize: "0.875rem" }}>
            <RouterLink to="/" style={{ color: "#64748B", textDecoration: "none" }}>
              Home
            </RouterLink>
            <RouterLink to="/cryptocurrency" style={{ color: "#64748B", textDecoration: "none" }}>
              Markets
            </RouterLink>
            <Typography color="text.primary" sx={{ fontWeight: 600, fontSize: "0.875rem" }}>
              {assetSymbol}
            </Typography>
          </Breadcrumbs>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  color: "#0F172A",
                  letterSpacing: "-0.02em",
                }}
              >
                {assetSymbol} Live Chart
              </Typography>
              <Chip
                icon={<ShowChartIcon sx={{ fontSize: "14px !important", color: "#2563EB" }} />}
                label="Interactive TradingView Engine"
                size="small"
                sx={{
                  bgcolor: "rgba(37, 99, 235, 0.08)",
                  color: "#2563EB",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  borderRadius: "6px",
                }}
              />
            </Box>

            <Button
              component={RouterLink}
              to="/cryptocurrency"
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "10px",
                color: "#475569",
                borderColor: "#CBD5E1",
                "&:hover": { borderColor: "#2563EB", color: "#2563EB" },
              }}
            >
              Back to Overview
            </Button>
          </Box>
        </Box>

        {/* Chart Layout */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: "20px",
                border: "1px solid #E2E8F0",
                overflow: "hidden",
                height: { xs: 450, md: 620 },
                backgroundColor: "#FFFFFF",
              }}
            >
              <div
                id="tradingview_chart_container"
                style={{ width: "100%", height: "100%" }}
              />
            </Paper>
          </Grid>

          {/* Side Info */}
          <Grid item xs={12} lg={3}>
            <Card
              sx={{
                p: 3,
                borderRadius: "18px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent sx={{ p: "0 !important" }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: "#0F172A", mb: 1 }}>
                  Technical Workspace
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" sx={{ color: "#475569", lineHeight: 1.7, mb: 3 }}>
                  Use the TradingView toolbar at the top of the chart to select candlestick styles, timeframes (1m, 15m, 1h, 1D), and over 100+ technical overlays including RSI, MACD, and Bollinger Bands.
                </Typography>

                <Box sx={{ p: 2, borderRadius: "12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", mb: 2 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "#2563EB", textTransform: "uppercase" }}>
                    Symbol Mapping
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#0F172A", fontWeight: 700, mt: 0.5 }}>
                    {assetSymbol} / USDT
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#64748B" }}>
                    Direct tick feed
                  </Typography>
                </Box>
              </CardContent>

              <Box sx={{ pt: 2, borderTop: "1px solid #F1F5F9" }}>
                <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                  Charts powered by TradingView widget API. Not financial advice.
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default Chart;
