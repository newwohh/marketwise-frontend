import React, { useContext, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Button,
  Paper,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import HeatmapCard from "../components/Heatmap/HeatmapCard";
import { useDispatch, useSelector } from "react-redux";
import { getStockPricesforHeatMap, getCryptoPrice } from "../reducers/reducers";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";
import { MyContext } from "../context/Context";

function Heatmap(props) {
  const { user } = useContext(MyContext);
  const location = useLocation();
  const dispatch = useDispatch();
  useScrollToTop();

  const isCrypto = location.pathname.includes("cryptocurrency") || Boolean(props.cryptomap);
  titleHandler(`${isCrypto ? "Crypto" : "Stocks"} Heatmap`);

  const { prices, stockpriceforheatmap } = useSelector((state) => state.marketwise);

  useEffect(() => {
    if (isCrypto && (!prices || prices.length === 0)) {
      dispatch(getCryptoPrice());
    } else if (!isCrypto && user?.user?._id) {
      dispatch(getStockPricesforHeatMap(user.user._id));
    }
  }, [dispatch, isCrypto, prices, user]);

  // Fallback items if endpoint is empty
  const defaultCrypto = [
    { name: "Bitcoin", symbol: "BTC", price_usd: "68420.50", percent_change_24h: "3.42" },
    { name: "Ethereum", symbol: "ETH", price_usd: "3520.10", percent_change_24h: "-1.18" },
    { name: "Solana", symbol: "SOL", price_usd: "182.40", percent_change_24h: "7.85" },
    { name: "Binance Coin", symbol: "BNB", price_usd: "594.30", percent_change_24h: "0.45" },
    { name: "Cardano", symbol: "ADA", price_usd: "0.36", percent_change_24h: "-3.12" },
    { name: "Avalanche", symbol: "AVAX", price_usd: "28.50", percent_change_24h: "4.90" },
    { name: "Chainlink", symbol: "LINK", price_usd: "12.30", percent_change_24h: "-0.65" },
    { name: "Polkadot", symbol: "DOT", price_usd: "4.45", percent_change_24h: "-4.20" },
  ];

  const defaultStocks = [
    { name: "Apple Inc.", symbol: "AAPL", price: "231.40", change: "1.45" },
    { name: "Microsoft Corp.", symbol: "MSFT", price: "428.10", change: "0.85" },
    { name: "NVIDIA Corp.", symbol: "NVDA", price: "135.20", change: "4.12" },
    { name: "Alphabet Inc.", symbol: "GOOGL", price: "166.50", change: "-0.75" },
    { name: "Amazon.com", symbol: "AMZN", price: "189.30", change: "2.10" },
    { name: "Tesla Inc.", symbol: "TSLA", price: "218.40", change: "-3.65" },
    { name: "Meta Platforms", symbol: "META", price: "582.00", change: "1.95" },
    { name: "JPMorgan Chase", symbol: "JPM", price: "220.15", change: "-0.30" },
  ];

  let displayData = [];
  if (isCrypto) {
    displayData = prices && prices.length > 0 ? prices : defaultCrypto;
  } else {
    displayData =
      stockpriceforheatmap && Array.isArray(stockpriceforheatmap) && stockpriceforheatmap.length > 0
        ? stockpriceforheatmap
        : defaultStocks;
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F8FAFC" }}>
      <NavBar />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 }, flexGrow: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <LocalFireDepartmentIcon sx={{ color: "#EF4444", fontSize: 24 }} />
            <Typography variant="caption" sx={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#EF4444" }}>
              Liquidity & Momentum Distribution
            </Typography>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: "#0F172A",
              letterSpacing: "-0.03em",
              mb: 1,
            }}
          >
            {isCrypto ? "Cryptocurrency" : "Stock Market"} Heatmap
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", maxWidth: 750 }}>
            Visual order flow distribution and 24-hour momentum clustering across top active assets.
          </Typography>
        </Box>

        {/* Controls & Legend Bar */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 4,
            borderRadius: "16px",
            border: "1px solid #E2E8F0",
            backgroundColor: "#FFFFFF",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Market Switcher */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              component={RouterLink}
              to="/heatmap/cryptocurrency"
              variant={isCrypto ? "contained" : "outlined"}
              size="small"
              startIcon={<CurrencyBitcoinIcon />}
              sx={{ borderRadius: "10px", fontWeight: 700 }}
            >
              Crypto
            </Button>
            <Button
              component={RouterLink}
              to="/heatmap/stocks"
              variant={!isCrypto ? "contained" : "outlined"}
              size="small"
              startIcon={<ShowChartIcon />}
              sx={{ borderRadius: "10px", fontWeight: 700 }}
            >
              Stocks
            </Button>
          </Box>

          {/* Color Legend */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: "#64748B" }}>
              LEGEND:
            </Typography>
            <Chip
              label="> +3% Gain"
              size="small"
              sx={{ bgcolor: "rgba(16, 185, 129, 0.22)", color: "#059669", fontWeight: 700, fontSize: "0.72rem" }}
            />
            <Chip
              label="0 to +3% Gain"
              size="small"
              sx={{ bgcolor: "rgba(16, 185, 129, 0.12)", color: "#059669", fontWeight: 700, fontSize: "0.72rem" }}
            />
            <Chip
              label="0 to -3% Drop"
              size="small"
              sx={{ bgcolor: "rgba(239, 68, 68, 0.12)", color: "#EF4444", fontWeight: 700, fontSize: "0.72rem" }}
            />
            <Chip
              label="< -3% Drop"
              size="small"
              sx={{ bgcolor: "rgba(220, 38, 38, 0.22)", color: "#DC2626", fontWeight: 700, fontSize: "0.72rem" }}
            />
          </Box>
        </Paper>

        {/* Heatmap Grid */}
        <Grid container spacing={2.5}>
          {displayData.map((el, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={el.id || el.symbol || i}>
              <HeatmapCard el={el} isProps={isCrypto} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default Heatmap;
